Rails.application.routes.draw do

  resources :feedbacks
  resources :impacts
  resources :users
  resources :feedback_assignments
root 'pages#start'
get 'about' => 'pages#about'
get 'users' => 'pages#users'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
