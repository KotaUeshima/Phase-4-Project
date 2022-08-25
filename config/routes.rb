# config/routes.rb
Rails.application.routes.draw do
  resources :comments
  resources :blogs
  resources :users, only: [:create]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/user_blogs", to: "users#show_blogs"

  get "/me", to: "users#show"
  
    get '*path',
        to: 'fallback#index',
        constraints: ->(req) { !req.xhr? && req.format.html? }
  end