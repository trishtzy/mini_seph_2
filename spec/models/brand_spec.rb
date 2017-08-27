require 'rails_helper'

RSpec.describe Brand, type: :model do
  it "successfully creates a brand" do
    b = Brand.create!(name: "test")
    expect(b.name).to eq("test")
  end
end
