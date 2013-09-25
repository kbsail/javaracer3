class User < ActiveRecord::Base
  validates :name, uniqueness: true 
  has_many :records
  has_many :games, through: :records
end


 # User.find(Game.first.records.where(winner: true).first.user_id).name
