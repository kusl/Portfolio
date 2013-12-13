Portfolio::Application.routes.draw do

  get 'about' => 'static_pages#about'
  get 'projects/:name' => 'projects#show'
  match '/projects' => 'projects#options', :constraints => {:method => 'OPTIONS'}, via: [:options]

  resources :projects, except: [:show]

  root :to => 'projects#index'
  
  

end
