---
layout: post
title:  "Why Omniauth and Devise?"
date:   2016-10-12 11:50:03 -0400
---

When I began to think about my Rails Assessment Project, implementing devise and omniauth, which are required, seemed daunting. I had trouble getting these to work in the Authentication section of Rails, and was really worried this would trip me up and I would never get through it. Boy was I wrong! I am now on board with both Devise and Omniauth! Here's a bit of a walkthrough/tutorial of how they work:

Most Ruby on Rails applications require user registration and authentication mechanisms. Developing these from scratch requires a lot of time and effort. Instead, you can use the Devise gem and set up an entire user authentication system including models and views within minutes. (After the first few attempts, it does get simpler - just like anything else in programming.) 

The trick I used was to make a separate git branch for each attempt at omniauth so that I could practice the entire process from start to finish over and over until I got it right. There always seems to be one small detail or another that causes confusion and the whole thing to not function. When this happens, just go back to the master branch and create a whole new branch to start the devise process over. 

The second suggestion I would make is to watch as many youtube videos as you can before getting started. There are countless tutorials and codealongs on youtube for devise and also specifically devise with omniauth. The steps and processes of what you need to do and why/where the magic happens slowly starts to make sense this way.

In addition to using Devise, you could make your users happier by allowing them to access your application without creating a new account. They could simply log in using their existing Facebook, Gmail, Twitter, Github or Linkedin, etc. accounts with Omniauth. OmniAuth support is provided by the OmniAuth gem, and with a few small steps and about 15 minutes (for a beginner who is still unfamiliar with Omniauth) your users can have easy and safe logins using Omniauth, and you can move onto the more exciting parts of your application.

To get through the Devise, Omniauth parts of your application setup, first create a new application, in your terminal type

`rails new APP_NAME_HERE` 
(my app is called 'good_reads' so I typed 'rails new good_reads')

then cd into your app, and open it in sublime

Adding the required gems to your gemfile is the next step. Add the following lines to your gemfile:

```
gem 'devise'
gem 'omniauth'
gem 'omniauth-facebook' 
```

(this is for if youre using facebook, if youre using a different provider, use that instead, i.e. "omniauth-twitter")

Install the gems by running `bundle install` or `bundle` for short.

Switching gears for a minute, get started with the app creation by add a few pages outside of the logging in functions; I used `rails g resource book title:string description:text author:string pages:integer published:string` which will generate a controller and model and migration for Books. followed by creating from scratch the views for books index, show, edit, etc.

A faster way to do this would be to use `rails g scaffold book title:string description:text author:string pages:integer published:string`, where Rails generates fully functional pages to perform CRUD operations on that model. In other words, all the associated controllers and views are generated, along with the model file. For this particular Book this would have probably been a good idea because I'm using all CRUD (Create Read Update Delete) functionality - but Avi tells us that 'no programmer worth their salt' would use a scaffold generator, and so I'm learning the proper way, not the fast way.

After, back to the terminal, run
`rake db:migrate`

Onto the config/routes.rb file to define the root of this application good_reads so that when someone goes to the site, something shows up!

```
Rails.application.routes.draw do
  resources :books
  root 'books#index'
end
```

After going into `rails s` (short for rails server) and playing around with it on localhost:3000 - Notice that no login is required yet, add a few books and make sure that they work, they do and I am now ready to implement devise. 

**(this is an important step because once we have a working site, its a great idea to push the work to git, and checkout a new branch to get moving with devise. That way you can always go back to the master branch and know you are starting with a working product.) **

To switch to a new branch in git, after running 
```
git add .
git commit -m "MESSAGE HERE"
git push
```

then switch branch 

`git checkout -b NEW_BRANCH_NAME`

Now we are ready to get started with Devise. 

Type the following commands to add Devise authentication support.

```
rails generate devise:install
rails generate devise User
rake db:migrate
```

This adds the sign-in and sign-up forms, and all the associated logic. Just like that my good_reads app now has a basic authentication system, where users can register themselves, and then log in. 

However, all the book pages are still directly accessible. To change this, edit the application_controller.rb and add authenticate_user! as an action that has to be performed before serving any page.

```
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!
end
```

If you want to, you could start the development server again with the rails s command, and check out these newly added pages, You can now register as a new user by visiting http://localhost:3000/users/sign_up. 

If everything's working properly, lets stop the server by hitting control C and then save all our changes and merge and then switch branches. 

in the terminal type

```
git add .
git commit -m "Devise complete"
git push
```

then to merge with the master branch we first switch back to the master branch

```
git checkout master
git merge
git add .
git commit -m "Devise Added"
git push
```

then switch branch 

`git checkout -b Omniauth`

Now we are ready to get started with Omniauth.

First thing we need to do is add a column uid to the Devise Users table, do so by creating a migration in the terminal

```
rails g migration AddColumnsToUsers provider uid
rake db:migrate
```
 
Now, visit the service provider's (in our case facebook's) website and register your application there. All the service providers have different registration procedures. This was covered in learn.co's omniauth walkthrough and lab for how to create a developer key and secret for your app so I wont go over it in detail again. for Facebook, we go here: https://developers.facebook.com/

Updating the Devise Initializer (this is different from using omniauth by itself, instead of making an omniauth initializer file, we are putting the info into the devise initializer file.  ...good_reads/config/initializers/devise.rb

at the bottom of the file, type
```
#Add your ID and secret here
 #ID first, secret second
  config.omniauth :facebook, "your app key here in quotes", "your app secret here in quotes"
```

Updating the User Model

The User model that Devise generated has to be changed to specify the service providers that we want to use. We're adding three items to the existing list (:omniauthable, :omniauth_providers => [:facebook], and don't forget the extra comma!). We also create a new method named from_omniauth to extract the information that is available after the authentication. 
After editing it, your good_reads/app/models/user.rb should look like this:

```
class User < ActiveRecord::Base
   devise :database_authenticatable, :registerable, :recoverable, :rememberable, 
   :trackable, :validatable, :omniauthable, :omniauth_providers => [:facebook]

  def self.from_omniauth(auth)
      where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
        user.provider = auth.provider
        user.uid = auth.uid
        user.email = auth.info.email
        user.password = Devise.friendly_token[0,20]
      end
  end
end
```

Now the complicated part. 
Add a Controller to Handle the Callback URLs from facebook.

First, edit config/routes.rb and update the devise_for line to specify the name of the controller that will be handling the callbacks. Let us simply call it callbacks. Your file should now look similar to this:

```
Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }
  resources :books
  root 'books#index'
end
```

Then, create a new file in app/controllers/callbacks_controller.rb.

Add the following code to it:

```
class CallbacksController < Devise::OmniauthCallbacksController
  def facebook
    # You need to implement the method below in your model (e.g. app/models/user.rb)
    @user = User.from_omniauth(request.env["omniauth.auth"])

    if @user.persisted?
      sign_in_and_redirect @user, :event => :authentication #this will throw if @user is not activated
      set_flash_message(:notice, :success, :kind => "Facebook") if is_navigational_format?
    else
      session["devise.facebook_data"] = request.env["omniauth.auth"]
      redirect_to new_user_registration_path
    end
  end

  def failure
    redirect_to root_path
  end
end
```

The application is now ready to work with omniauth! Fire up your server again with `rails s`
Visit your home page. 

Since we're testing the login feature, you may want to do this in a session without stored data, such as a Chrome Incognito Window. You should see a Sign in with Facebook link. Click on it. You should be redirected to Facebook's login page. After a successful login, you will be redirected back to your own application, and the book index page.

If this worked, then lets merge it into the master branch, and we are now all set to continue on with the original parts of app development. If it didnt for whatever reason, you can save your changed to the omniauth branch, then switch back into the master branch (**do not merge**) and start the omniauth process once more on a new branch.

Hope this helps, and good luck!
