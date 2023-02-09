class AddPhoneToRescue < ActiveRecord::Migration[7.0]
  def change
    add_column :rescues, :phone, :string
  end
end
