
class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :gender, :age,:breed, :friendly, :description,:house_trained, :health, :image

  belongs_to :rescue
  belongs_to :adopter
  has_many :summaries

end