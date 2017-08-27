module Api
  class ProductsController < ApplicationController
    def index
      render json: Product.all
    end

    def search
      query = params[:query]
      products = Product.where('name LIKE ? OR description LIKE ?',
                               "%#{query}%", "%#{query}%")
      render json: products
    end

    def select_brand
      query_brand = params[:query_brand]
      brand = Brand.find_by(:name => query_brand)
      products = Product.where("brand_id = ?", brand.id)

      render json: products
    end

    def select_category
      query_cat = params[:query_cat]
      category = Category.find_by(:name => query_cat)
      products = Product.where("category_id = ?", category.id)

      render json: products
    end

    def select_subcategory
      query_sub = params[:query_sub]
      subcategory = Subcategory.find_by(:name => query_sub)
      products = Product.where("subcategory_id = ?", subcategory.id)

      render json: products
    end

    def get_products_by_brand
      id = params[:id]
      products = Product.where(:brand_id => id)

      render json: products
    end

    def get_products_by_cat
      id = params[:id]
      products = Product.where(:category_id => id)

      render json: products
    end

    def get_products_by_subcat
      id = params[:id]
      products = Product.where(:subcategory_id => id)

      render json: products
    end
  end
end
