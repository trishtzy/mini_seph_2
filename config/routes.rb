Rails.application.routes.draw do
  ActiveAdmin.routes(self)
  root 'home#index'
  namespace :api do
    resources :products, only: [:index] do
      get :search, on: :collection
      get :search_by_brand, on: :collection
      get :search_by_category, on: :collection
      get :search_by_subcategory, on: :collection
      get :search_by_subsubcategory, on: :collection
      get :get_products_by_brand, on: :collection
      get :get_products_by_cat, on: :collection
      get :get_products_by_subcat, on: :collection
      get :get_products_by_subsubcat, on: :collection
    end
    resources :brands
    resources :categories
    resources :subcategories
    resources :subsubcategories
  end
end
