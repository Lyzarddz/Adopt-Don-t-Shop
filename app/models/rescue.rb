class Rescue < ApplicationRecord

    has_many :pets
    has_many :adopters, through: :pets

    has_one_attached :image

    validates :name, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :phone, presence: true
    validates :location, presence: true
end
