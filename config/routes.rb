Rails.application.routes.draw do
  resources :notices, except: ["show","index"]
  root to: "home#index"
  get "/home/tags/:tags" => "home#index", as: "taggable"
end
