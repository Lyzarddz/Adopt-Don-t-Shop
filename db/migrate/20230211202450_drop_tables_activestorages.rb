class DropTablesActivestorages < ActiveRecord::Migration[7.0]
  def change
    drop_table :active_storage_blobs
    drop_table :active_storage_variant_records
  end
end
