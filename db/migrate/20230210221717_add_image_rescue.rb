class AddImageRescue < ActiveRecord::Migration[7.0]
  def change
    add_column :rescues, :image, :string
  end
end
