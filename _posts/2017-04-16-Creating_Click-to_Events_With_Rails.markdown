---
layout: post
title:  "Creating Click-To Events With Rails"
date:   2017-04-16 15:57:21 -0500
---

You have a form in your rails project, and you want to create a click event. How to go about doing it? 
Its simple really, but you have to think about it in rails terms. **With Views, Controllers, and Routes**.

**First step is to create the click event in the form.**
A Link to will work just fine.

In my example I will use a method where upon the click event, the `User.doctor_id` will update to `doctor_id:5`


```ruby
<%= link_to "Click Here", user_see_patient_path(user.id), method: :post %>
```

Now when the link_to is clicked, you are setup to begin the process of running your method, or `click event`. 

**Next step is to create said method in your controller.**


```ruby
class UsersController < ApplicationController
  def seePatient
    @user = User.find(params[:id])
    @user.update(doctor_id: 5)
    redirect_to root_path
  end
end
```

**Finally the last step** is to let the view know how to find the appropriate method. We do this by creating a post route in the routes.rb file.

```ruby
post '/users/:id/seen', to: 'users#seePatient', as: 'user_see_patient'
```

Now if we run `rake routes` we see

```user_see_patient POST   /users/:id/seen(.:format)                    users#seePatient```

Which is exactly what we want. All the pieces linking together perfectly.

Now we have a fully working click event, the rails way.
