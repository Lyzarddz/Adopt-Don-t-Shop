class SummarySerializer < ActiveModel::Serializer
  attributes :id, :date, :notes, :pet_id

  belongs_to :pet
end
