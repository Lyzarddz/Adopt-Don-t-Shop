class Rescue < ApplicationRecord

    has_many :pets
    has_many :adopters, through: :pets

    validates :name, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
end
