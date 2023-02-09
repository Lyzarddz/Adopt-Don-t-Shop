class AdopterSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone

  has_many :pets
  has_many :rescues, through: :pets
  has_many :summaries, through: :pets



end
