class EditPetsId < ActiveRecord::Migration[7.0]
  def change
    rename_column :summaries, :pets_id, :pet_id
  end
end
