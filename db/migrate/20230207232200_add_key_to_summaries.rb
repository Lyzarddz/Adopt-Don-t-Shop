class AddKeyToSummaries < ActiveRecord::Migration[7.0]
  def change
    add_reference :summaries, :pets, index: true, foreign_key: true
  end
end
