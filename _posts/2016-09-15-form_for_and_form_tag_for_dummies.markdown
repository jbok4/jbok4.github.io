---
layout: post
title:  "form_for and form_tag for dummies"
date:   2016-09-15 18:32:38 +0000
---


*info taken from ruby on rails guide [form helpers](http://guides.rubyonrails.org/formhelpers.html) and learn.co's form_tag form_for lessons*

I don't know about you, but form_tag and form_for gave me a lot of trouble, and so the best way to learn something? Explain it! So here goes:

ActionView, a sub-gem of Rails, provides a number of helper methods to assist with streamlining view template code. These ActionView methods come pre-loaded with Rails so you don't have to build any separate functionality for them to work. Specifically, we can use ActionView methods to improve our forms. 
Even though they seem like it, form helpers aren't magic; they're Ruby methods that accept arguments, such as the :title attribute and any additional parameters related to the form's elements.  In this post we will discuss specifically form_tag and form_for. 

When creating a form, the first question you should ask yourself is "Should I be using form_tag or form_for here?" If you are not editing a models' attributes, then you want to use the generic form_tag because form_fors  are linked to one of your model objects (they correspond to a class in your models folder and are creating or editing an instance of a specific model.)

As an example of a circumstance when form_tag is used, if you were making a search form you would use the basic form_tag because there is no model object to reference/alter/create–you are just searching for something in the database. 

The most basic form helper is **form_tag**, which literally creates as its name states "a <form> tag."

<%= form_tag do %>
  Form contents
<% end %>

When called without arguments like above, it creates a simple <form> tag which, when submitted, will POST to the current page. For instance, assuming the current page is /home/index, the generated HTML will look like this:

<form accept-charset="UTF-8" action="/" method="post">
  <input name="utf8" type="hidden" value="&#x2713;" />
    Form contents
</form>

You'll notice that the HTML contains an input element with type hidden. This input is important, because the form cannot be successfully submitted without it. The hidden input element with the name utf8 enforces browsers to properly respect your form's character encoding and is generated for all forms whether their action is "GET" or "POST". 

**form_for**, is the high-powered alternative to form_tag. The biggest difference between these two helpers is that **form_for creates a form specifically for a model object.**  If a model object (like for example Post) has many attributes to edit then we would be repeating the name of the edited object many times. What we want to do is somehow bind a form to a model object, which is exactly what form_for does. 

Form_for is full of convenient features:

-form_for automatically performs a route lookup to find the right URL for the model object.

-The form_for method yields a form builder object (the f variable). Or in other words...
form_for takes a block. It passes an instance of FormBuilder as a parameter to the block, which is what |f| is below. Methods to create form controls are called on the form builder object f.

A basic form_for implementation looks like this:

<!-- app/views/posts/edit.html.erb //-->

<%= form_for @post do |f| %>
  <%= f.text_field :title %>
  <%= f.text_area :content %>
  <%= f.submit %>
<% end %>

Which creates the corresponding HTML:

<form class="edit_post" id="edit_post" action="/posts/1" accept-charset="UTF-8" method="post">
  <input name="utf8" type="hidden" value="&#x2713;" />
  <input type="hidden" name="_method" value="patch" />
  <input type="hidden" name="authenticity_token" value="nRPP2OqVKB00/Cr+8EvHfYrb5sAkZRtr8f6dzBaJAI+cMceR0fUatcLWd4zdwYCpojW2J3QLK6uyBKeFAgZvmw==" />
  <input type="text" name="post[title]" id="post_title" value="Existing Post Title"/>
  <textarea name="post[content]" id="post_content">Existing Post Content</textarea>
  <input type="submit" name="commit" value="Update Post" />
</form>

Form_tag doesn't know what action we're going to use it for, because it has no model object to check.  But form_for knows that an empty, unsaved model object needs a new form and a populated object needs an edit form. Which means that new.html.erb and edit.html.erb are exactly the same with form_for, regardless of the record being new or existing. Record identification (which comes pre-loaded with rails) is smart enough to figure out if the record is new by asking record.new_record?. It also selects the correct path to submit to and the name based on the class of the object. This means we get to skip all of these steps:

Setting the name and id of the <form> element.
Setting the method to patch on edits.
Setting the text of the <submit> element.
Specifying the root parameter name (post[whatever]) for every field.
Choosing the attribute (@post.whatever) to fill for every field.

Here's what we would need to do with form_tag to generate the exact same HTML as we did with the form_for in the above example:

<!-- app/views/posts/new.html.erb //-->

<%= form_tag post_path(@post), method: "patch", name: "edit_post", id: "edit_post" do %>
  <%= text_field_tag "post[title]", @post.title %>
  <%= text_area "post[content]", @post.content %>
  <%= submit_tag "Update Post" %>
<% end %>

Thats a lot more specific code to get right. If this still isn't making sense, let's put it another way...

Assume we have a controller for dealing with articles app/controllers/posts_controller.rb:

def new
  @post = Post.new
end

The corresponding view app/views/posts/new.html.erb using form_for looks like this:

<%= form_for @post do |f| %>
  <%= f.text_field :title %>
  <%= f.text_area :content %>
  <%= f.submit "Create" %>
<% end %>

There are a few things to note here:

@post is the actual object being edited.
The form_for method yields a form builder object (the f variable).
Methods to create form controls are called on the form builder object f.
The resulting HTML is:

<form accept-charset="UTF-8" action="/posts" method="post">
  <input id="post_title" name="post[title]" type="text" />
  <textarea id="post_content" name="post[content]"></textarea>
  <input name="commit" type="submit" value="Create" />
</form>

The name passed to form_for controls the key used in params to access the form's values. Here the name is post and so all the inputs have names of the form post[attribute_name]. Accordingly, in the create action params[:post] will be a hash with keys :title and :content. 

The helper methods called on the form builder are identical to the model object helpers except that it is not necessary to specify which object is being edited since this is already managed by the form builder.

Hopefully that cleared it up a bit for you, and me. 

