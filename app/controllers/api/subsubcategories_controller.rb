module Api
  class SubsubcategoriesController < ApplicationController
    def index
      render json: Subsubcategory.all
    end
  end
end
