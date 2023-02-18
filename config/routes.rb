Rails.application.routes.draw do

  scope :api do
  resources :summaries
  resources :adopters
  resources :rescues, only: [:show, :create, :index]
  resources :pets

  post "/signup", to: "adopters#create"
  get "/me", to: "adopters#show"
  post "/login", to:"sessions#create"
  delete "/logout", to:"sessions#destroy"

  get "/pets/not/adopted", to: "pets#not_adopted"

  
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
