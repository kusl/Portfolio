Portfolio::Application.routes.draw do

  get 'about' => 'static_pages#about'
  get 'projects/:name' => 'projects#show'

  resources :projects, except: [:show]

  root :to => 'projects#index'
  
  

end
