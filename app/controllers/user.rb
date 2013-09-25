######### GET ##############

get '/logged_in' do 
  erb :game
end 

######### Post #############

post '/signup' do
  user = User.create(name: params[:name])
  if user.valid?
    redirect 'logged_in'
  else 
    redirect '/'
  end 
end

post '/login' do
  @player1 = User.find_by_name(params[:player1])
  @player2 = User.find_by_name(params[:player2])

  if @player1 && @player2
    erb :game
  else 
    redirect '/'
  end 
end

post '/winner' do
  @game = Game.create()
  @winner = User.find_by_name(params[:winner])
  @loser = User.find_by_name(params[:loser])
  @time = params[:time]
  @record = Record.create(user_id: @winner.id, game_id: @game.id, time: @time, winner_name: @winner.name, winner: @winner.id)
  @record2 = Record.create(user_id: @loser.id, game_id: @game.id, time: @time, winner_name: @winner.name, winner: @winner.id)  
  # erb :result, layout: false 
end   

