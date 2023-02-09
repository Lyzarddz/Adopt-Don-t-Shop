class RescueSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone, :location, :image

  has_many :pets
  has_many :adopters, through: :pets

  def featured_image
    if object.image.attached?
      {
        url: rails_blob_url(object.image)
      }
    end
  end
end
