require 'rails_helper'

RSpec.describe Subcategory, type: :model do
  it "successfully creates a subcategory" do
    c = Category.create!(name: "test")
    sc = Subcategory.create!(name: "test",
                             category_id: c.id)
    expect(sc.name).to eq("test")
  end
end
