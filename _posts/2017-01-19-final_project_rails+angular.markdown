---
layout: post
title:  "Final Project! The Hard Process Of Putting It All Together"
date:   2017-01-19 15:57:21 -0500
---
Project: Make a full-stack app, combining rails/JSON with an angular frontend–that can speak to each other. Wow. Where to even begin? I had so many questions. I took a few weeks to do some online tutorials. wrap my brain around the problem and my lack of experience building with angular (and zero experience with how to work with angular+rails together, then watch as many youtube codealongs as I could for angular, until I finally felt I was ready to take a stab at it. 

**4 false starts later - I had it! My idea** 

I would create an app database for people to easily find the championships and awards their professional sports teams have won. All in one easy list. It would work similarly to wikipedia in that anyone can add in more data, and it relies on the public to fact check and grow. Rails would cover the backend and store the data as JSON and angular would pull the data from JSON/rails and display it to the user. Easy right?

To be honest, setting up this project with rails and bower was a breeze. I have Brigan Enser to thank for that. He had a <a href="https://medium.com/@briganenser/connect-rails-angularjs-618642683205#.dxiu1jis1">wonderful post</a> that I came across and since follow for each new project I make: 

... because connecting rails and angular is not THAT simple if you don't know what you're doing. Adding gem 'angular-rails-templates' is a lifesaver as well. 

The hard part came when implementing all the powerful aspects of angular into my project, and remembering what they all were and how to make them all work together. I ended up taking it slow, and doing things a couple different ways to try to have some practice with each. 
More on that later...

Probably the coolest part of angular is how easy it is to display lists of data, and also how easy it is to create a search filter and validations. 

Things that took forever in rails, now take a few words and work automagically in angular. So while it's quite time consuming to create new controllers, factories and pull in the data, the reward is in: 
1. how speedy the site loads
2. how easy it is to manipulate the data
3. how well angular and rails work together

**Controllers, Factories and Directives - What to do with them**

Angular Controllers