---
layout: post
title:  "Using Moment.js"
date:   2016-12-09 15:00:03 +0000
---


Using [moment.js](http://momentjs.com/) makes it simple to change your computer generated timestamps (or created_at's) into human readable time. 

Start by downloading the moment.js file from their website, and place it in your app>assets>javascripts folder (the same place you keep your jquery and other js files.)

Then in your application.js file, lets add it to the list of requirements.
before the` //= require_tree . ` lets include it, so your list looks something like this

```
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require moment
//= require_tree .
```

Now, we set up the date or created_at as a js variable, and it has to access the timestamp in Date format. 
Below is an example of how to turn a json created_at into a moment.js:

```
var date = created_at; 

var dateNew = new Date(date);
//new Date(date) is used to make the timestamp into a Date object, so moment.js can do it magic

var momentNew = moment(dateNew).format("MMM Do YY"); //there are plenty of other formats to choose from
console.log(Posted: " + momentNew);
```


This will output

Posted: Dec 9th 16

What an incredibly easy fix to a complicated problem, and we didn't even have to use REGEX! 
Thank goodness for moment.js

Here are some of the other formats you can use (and there are still more to choose from on [moment.js](http://momentjs.com/)
![](http://)

