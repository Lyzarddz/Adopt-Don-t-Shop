class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :gender, :age,:breed, :friendly, :description,:house_trained, :health, :image

  belongs_to :rescue
  belongs_to :adopter
  has_many :summaries


  def featured_image
    if object.image.attached?
      {
        url: rails_blob_url(object.image)
      }
    end
  end
end
