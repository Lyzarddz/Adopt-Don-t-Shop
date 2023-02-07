class Adopter < ApplicationRecord

    has_many :pets
    has_many :rescues, through: :pets
    has_many :summaries, through: :pets

    has_secure_password
end
