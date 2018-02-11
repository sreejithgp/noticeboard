Rails.application.routes.draw do
  resources :notices, except: ["show","index"]
  root to: "home#index"
end
