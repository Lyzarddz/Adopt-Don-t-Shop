class RescueSerializer < ActiveModel::Serializer
  attributes :id, :name, :email

  has_many :pets
  has_many :adopters, through: :pets
end
