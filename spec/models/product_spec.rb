require 'rails_helper'

RSpec.describe Product, type: :model do
  it "successfully creates a product" do
    brand = Brand.create(name: 'brand')
    cat = Category.create(name: 'category')
    subcat = Subcategory.create(name: 'subcategory',
                                category_id: cat.id)
    subsubcat = Subsubcategory.create(name: 'subsubcategory',
                                      category_id: cat.id,
                                      subcategory_id: subcat.id)

    product = Product.create!(name: "test",
                              brand_id: brand.id,
                              category_id: cat.id,
                              subcategory_id: subcat.id,
                              subsubcategory_id: subsubcat.id)
    expect(product.name).to eq("test")
  end

  it "has 4 associations (brand, cat, subcat, subsubcat)" do
    brand = Brand.create(name: 'brand')
    cat = Category.create(name: 'category')
    subcat = Subcategory.create(name: 'subcategory',
                                category_id: cat.id)
    subsubcat = Subsubcategory.create(name: 'subsubcategory',
                                      category_id: cat.id,
                                      subcategory_id: subcat.id)

    product = Product.create!(name: "test",
                              brand_id: brand.id,
                              category_id: cat.id,
                              subcategory_id: subcat.id,
                              subsubcategory_id: subsubcat.id)
    expect(product.brand_id).to eq(1)
  end
end
