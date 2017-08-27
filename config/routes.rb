Rails.application.routes.draw do
  root 'home#index'
  namespace :api do
    resources :products, only: [:index] do
      get :search, on: :collection
      get :select_brand, on: :collection
      get :select_category, on: :collection
      get :select_subcategory, on: :collection
      get :get_products_by_brand, on: :collection
      get :get_products_by_cat, on: :collection
      get :get_products_by_subcat, on: :collection
    end
    resources :brands
    resources :categories
    resources :subcategories
  end
end
