Rails.application.routes.draw do
  root 'home#index'
  namespace :api do
    resources :products, only: [:index, :create] do
      get :search, on: :collection
    end
    resources :brands
    resources :categories
    resources :subcategories
  end
end
