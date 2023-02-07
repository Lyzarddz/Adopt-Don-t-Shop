class Pet < ApplicationRecord
  belongs_to :rescue
  belongs_to :adopters

  has_many :summaries

  validates :name, presence: true
  validates :gender, presence: true
  validates :age, presence: true
  validates :friendly, presence: true
  validates :house_trained, presence: true
  validates :health, presence: true
  validates :description, presence: true
end