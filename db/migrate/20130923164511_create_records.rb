class CreateRecords < ActiveRecord::Migration
  def change
    create_table :records do |t|
      t.belongs_to :user
      t.belongs_to :game
      t.integer :time 
      t.integer :winner
      t.string  :winner_name
      t.timestamps
    end 
  end
end


