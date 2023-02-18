class AddAdoptedToPets < ActiveRecord::Migration[7.0]
  def change
    add_column :pets, :adopted, :boolean
  end
end
