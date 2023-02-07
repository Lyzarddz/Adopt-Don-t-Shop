class SummarySerializer < ActiveModel::Serializer
  attributes :id, :date, :notes

  belongs_to :pet
end
