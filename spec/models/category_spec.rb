require 'rails_helper'

RSpec.describe Category, type: :model do
  it "successfully creates a category" do
    c = Category.create!(name: "test")
    expect(c.name).to eq("test")
  end
end
