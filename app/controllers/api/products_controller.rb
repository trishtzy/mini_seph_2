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
  end
end
