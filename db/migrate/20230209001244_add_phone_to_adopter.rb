class AddPhoneToAdopter < ActiveRecord::Migration[7.0]
  def change
    add_column :adopters, :phone, :string
  end
end
