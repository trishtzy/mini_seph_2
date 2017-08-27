require 'rails_helper'

RSpec.describe "Products", type: :request do
  describe "GET /products" do
    it "gets all products with HTTP 200 status code" do
      get api_products_path
      expect(response).to have_http_status(200)
    end

    it "gets all products of the same brand id with 200 code" do
      get get_products_by_brand_api_products_path(:id => 1)
      expect(response).to have_http_status(200)
    end

    it "gets all products of the same category id with 200 code" do
      get get_products_by_cat_api_products_path(:id => 1)
      expect(response).to have_http_status(200)
    end

    it "gets all products of the same subcategory id with 200 code" do
      get get_products_by_subcat_api_products_path(:id => 1)
      expect(response).to have_http_status(200)
    end

    it "gets all products of the same subsubcategory with 200 code" do
      get get_products_by_subsubcat_api_products_path(:id => 1)
      expect(response).to have_http_status(200)
    end

    it "gets 200 response and products with the word 'auto' inside" do
      get search_api_products_path(:query => "auto")
      expect(response).to have_http_status(200)
    end

    it "gets empty json response with the search query 'foundy'" do
      get search_api_products_path(:query => "foundy")
      expect(response).to have_http_status(200)
      expect(response.parsed_body).to eq([])
    end

    it "gets all products of the same brand name with 200 code" do
      brand = Brand.create!(name: "Repetto")
      get search_by_brand_api_products_path(:query_brand => brand.name)
      expect(response).to have_http_status(200)
    end

    it "does not get products if brand name is case sensitive" do
      brand = Brand.create!(name: "repetto")
      get search_by_brand_api_products_path(:query_brand => brand.name)
      expect(response).to have_http_status(200)
      expect(response.parsed_body).to eq([])
    end

    it "gets all products of the same category name with 200 code" do
      c = Category.create!(name: "MAKEUP")
      get search_by_category_api_products_path(:query_cat => c.name)
      expect(response).to have_http_status(200)
    end

    it "does not get products when category does not exist" do
      c = Category.create!(name: "sale")
      get search_by_category_api_products_path(:query_cat => c.name)
      expect(response).to have_http_status(200)
      expect(response.parsed_body).to eq([])
    end

    it "gets products of same category even if str is lowercase" do
      c = Category.create!(name: "makeup")
      get search_by_category_api_products_path(:query_cat => c.name)
      expect(response).to have_http_status(200)
    end

    it "gets all products of the same subcategory name with 200 code" do
      c = Category.create!(name: "makeup")
      sc = Subcategory.create!(name: "FACE",
                               category_id: c.id)
      get search_by_subcategory_api_products_path(:query_sub => sc.name)
      expect(response).to have_http_status(200)
    end

    it "does not get products when subcategory does not exist" do
      c = Category.create!(name: "makeup")
      sc = Subcategory.create!(name: "sale",
                              category_id: c.id)
      get search_by_subcategory_api_products_path(:query_sub => sc.name)
      expect(response).to have_http_status(200)
      expect(response.parsed_body).to eq([])
    end

    it "gets products of same subcategory even if str is lowercase" do
      c = Category.create!(name: "makeup")
      sc = Subcategory.create!(name: "face",
                               category_id: c.id)
      get search_by_subcategory_api_products_path(:query_sub => sc.name)
      expect(response).to have_http_status(200)
    end

    it "gets all products of the same subsubcategory name with 200 code" do
      c = Category.create!(name: "makeup")
      sc = Subcategory.create!(name: "face",
                               category_id: c.id)
      ssc = Subsubcategory.create!(name: "Foundation",
                                   category_id: c.id,
                                   subcategory_id: sc.id)
      get search_by_subsubcategory_api_products_path(:query_sub => ssc.name)
      expect(response).to have_http_status(200)
    end

    it "does not get products when subsubcategory does not exist" do
      c = Category.create!(name: "makeup")
      sc = Subcategory.create!(name: "face",
                               category_id: c.id)
      ssc = Subsubcategory.create!(name: "Foundationy",
                                   category_id: c.id,
                                   subcategory_id: sc.id)
      get search_by_subsubcategory_api_products_path(:query_sub => ssc.name)
      expect(response).to have_http_status(200)
      expect(response.parsed_body).to eq([])
    end

    it "does not get products when subsubcategory is case sensitive " do
      c = Category.create!(name: "makeup")
      sc = Subcategory.create!(name: "face",
                               category_id: c.id)
      ssc = Subsubcategory.create!(name: "foundation",
                                   category_id: c.id,
                                   subcategory_id: sc.id)
      get search_by_subsubcategory_api_products_path(:query_sub => ssc.name)
      expect(response).to have_http_status(200)
      expect(response.parsed_body).to eq([])
    end
  end
end
