Rails.application.routes.draw do
  root 'home#index'
  namespace :api do
    resources :products
    resources :brands
    resources :categories
    resources :subcategories
  end
end
