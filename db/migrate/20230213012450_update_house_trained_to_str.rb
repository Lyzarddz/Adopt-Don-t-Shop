class UpdateHouseTrainedToStr < ActiveRecord::Migration[7.0]
  def change
change_column :pets, :house_trained, :string

  end
end
