class Pet < ApplicationRecord
  belongs_to :rescue
  belongs_to :adopters
end
