class PetSerializer < ActiveModel::Serializer
  attributes :id


  belongs_to :rescues
  belongs_to :adopters
  has_many :summaries
end
