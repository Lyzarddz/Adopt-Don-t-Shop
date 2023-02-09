class AddLocationToRescue < ActiveRecord::Migration[7.0]
  def change
    add_column :rescues, :location, :string
  end
end
