class PetSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :rescue
  belongs_to :adopter
  has_many :summaries
end
