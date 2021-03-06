Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:show, :index, :create, :destroy, :update] do
      resources :likes, only: [:create]
      delete 'likes', to: 'likes#destroy'
      resources :comments, only: [:show, :index, :create, :destroy, :update] do
        resources :likes, only: [:create]
        delete 'likes', to: 'likes#destroy'
      end
    end
  end
end
