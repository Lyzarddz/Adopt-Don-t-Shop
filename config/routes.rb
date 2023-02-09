Rails.application.routes.draw do

  scope :api do
  resources :summaries
  resources :adopters, only: [:show, :create, :index, :update]
  resources :rescues, only: [:show, :create, :index]
  resources :pets

  post "/signup", to: "adopters#create"
  get "/me", to: "adopters#show"
  post "/login", to:"sessions#create"
  delete "/logout", to:"sessions#destroy"

  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
