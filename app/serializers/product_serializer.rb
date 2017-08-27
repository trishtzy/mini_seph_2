class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :brand, :category, :subcategory, :subsubcategory
end
