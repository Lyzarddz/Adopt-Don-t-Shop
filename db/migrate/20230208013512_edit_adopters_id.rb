class EditAdoptersId < ActiveRecord::Migration[7.0]
  def change
    rename_column :pets, :adopters_id, :adopter_id
  end
end
