Portfolio::Application.routes.draw do

  resources :projects
  root :to => 'projects#index'
  
  get 'about' => 'static_pages#about'

end
