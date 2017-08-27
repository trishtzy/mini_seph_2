class Subsubcategory < ApplicationRecord
  has_many :products
  belongs_to :category
  belongs_to :subcategory
end
