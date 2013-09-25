// $(document).ready(function() {
//   var player1 = new Player('#player1_strip') 
//   var player2 = new Player('#player2_strip') 


//     var start = 0;
//   $(document).on('keyup', function(event){
//     if (event.which === 81){
//       if (start === 0){
//         start = Date.now();
//       }
//       player1.advance
//     }
//     else if (event.which === 80){
//       if (start === 0){
//         start = Date.now();
//       }
//       advance_player('#player2_strip .active')
//     }

//     if ($('#player1_strip td:last-child').hasClass('active')){
//       var end_time = Date.now();
//       total_time = ((end_time - start)/1000);
//       var url = '/winner'
//       var data = {winner: player1, loser: player2, time: total_time}
//       $.post(url, data, function(response){
//         $('.container').append(response);
//       });
//       // player_loses('#player2_strip .active')
//     } 
//     else if ($('#player2_strip td:last-child').hasClass('active')){
//       var end_time = Date.now();
//       total_time = ((end_time - start)/1000);
//       var url = '/winner'
//       var data = {winner: player2, loser: player1, time: total_time}
//       $.post(url, data, function(response){
//         $('.container').append(response);
//       });
//       player_loses('#player1_strip .active')
//     }
//   });
// });

// // var advance_player = function(player){
// //   $(player).removeClass('active').next().addClass('active');
// // }

// var player_wins = function(winner){
//   $(winner).show();
// }



