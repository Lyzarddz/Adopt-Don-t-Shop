class CreatePets < ActiveRecord::Migration[7.0]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :gender
      t.integer :age
      t.string :breed
      t.string :friendly
      t.boolean :house_trained
      t.string :description
      t.string :health
      t.belongs_to :rescue, null: false, foreign_key: true
      t.belongs_to :adopters, null: false, foreign_key: true

      t.timestamps
    end
  end
end
