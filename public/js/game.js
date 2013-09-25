function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
	this.start_time = null
	this.end_time = null
	this.winner = null
}

Game.prototype.check_key = function(event){
	if (event.which === this.player1.key){
		player1.advance()
	}
	else if (event.which === this.player2.key){
		player2.advance()
	}
}

Game.prototype.game_view = function(event){
	$('.active').removeClass('active')
	$("#player1_strip > td:nth-child("+this.player1.current_position+")").addClass('active')
	$("#player2_strip > td:nth-child("+this.player2.current_position+")").addClass('active')
}


Game.prototype.game_winner = function(event) {
	if (this.player1.current_position === 13) {
		this.winner = (this.player1);
		$("#player2_strip td").removeClass('active');
		$('body').unbind('keyup')
	}
	else if (this.player2.current_position === 13) {
		this.winner = (this.player2);
		$("#player1_strip td").removeClass('active');
		$('body').unbind('keyup')
	}
}

Game.prototype.finished = function(event) {
	if (this.winner != null) {
		this.time_stop()
		this.to_html()
		this.database()
	}
}

Game.prototype.loser = function(event) {
	if (this.winner != null) {
		if (this.winner === player1) {
			return player2 } 
		else if (this.winner === player2) {
			return player1
		}
	}
}

Game.prototype.database = function() {
	data = { winner: (this.winner.name), loser: (this.loser().name), time: (this.game_time())}
	$.post('/winner', data, function(response){
        $('.container').append(response);
      });
}

Game.prototype.to_html = function(event) {
	$('#winner').text(this.winner.name + " is the winner with a time of " + this.game_time() + " seconds!");
}

Game.prototype.time_start = function() {
	if (this.start_time === null){
		this.start_time = $.now()
	}
}

Game.prototype.time_stop = function() {
	this.end_time = $.now()
}

function Player(name, key) {
	this.current_position = 2
	this.name = name
	this.key = key
}

Player.prototype.advance = function(){
	this.current_position += 1
}

Game.prototype.game_time = function(event){
	return ((this.end_time - this.start_time) / 1000)
}

$(document).ready(function() {
	player1 = new Player($('#player1_strip').data('value'), 81)
	player2 = new Player($('#player2_strip').data('value'), 80)
	game = new Game(player1, player2)

	$('body').on('keyup', function(event){
		game.time_start(event)
		game.check_key(event);
		game.game_view(event);
		game.game_winner(event);
		game.finished(event)
	});
});