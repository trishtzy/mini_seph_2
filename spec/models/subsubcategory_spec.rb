require 'rails_helper'

RSpec.describe Subsubcategory, type: :model do
  it "successfully creates a subsubcategory" do
    c = Category.create!(name: "test1")
    sc = Subcategory.create!(name: "test2",
                             category_id: c.id)
    ssc = Subsubcategory.create!(name: "test3",
                                 category_id: c.id,
                                 subcategory_id: sc.id)
    expect(ssc.name).to eq("test3")
  end
end
