class Summary < ApplicationRecord
  belongs_to :pet


  validates :date, presence: true
  validates :notes, presence: true
  validates :pet_id, presence: true
end
