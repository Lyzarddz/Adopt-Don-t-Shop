class Pet < ApplicationRecord
  belongs_to :rescue, dependent: :destroy 
  belongs_to :adopter

  has_many :summaries, dependent: :destroy 

  validates :name, presence: true
  validates :gender, presence: true
  validates :age, presence: true
  validates :friendly, presence: true
  validates :house_trained, presence: true
  validates :health, presence: true
  validates :description, presence: true
end