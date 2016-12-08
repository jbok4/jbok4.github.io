---
layout: post
title:  "What is Handlebars, and how to use it"
date:   2016-12-08 11:21:17 -0500
---


So... you've built your app–and it works great, but its a little bit bland. Its like a kindergarten version of a grownup app/website. All this page reloading to get to a form, submit that form, and post data. This is where Ajax, JS and Jquery come in to save the day. They help to let forms show up inside the current page without a refresh, to GET data and POST data directly to the page also without ever having to refresh. Like how in your gmail, the new messages just appear, or you can send an email without refreshing your whole window. Or how on twitter the new tweets just feed in automatically. This is all done using ajax and jquery. The magic of programming continues to astound me. 

So.. why am I talking about this, when Im supposed to be talking about Handlebars? Because handlebars is a tool that makes that user experience even better. It is a way to integrate your data into the html asynchronously by making your html templates into javascript readable functions and implementing them into your program! Lets find out how...

[Handlebars.js](http://handlebarsjs.com/) is a templating library that "provides the power necessary to let you build semantic templates" based on data that is formatted as javascript objects. Using an example from the handlebar.js website, the library allows you to do things like this...

```
<div class="entry">
    <h1>{{title}}</h1>
    <div class="body">
        {{body}}
    </div>
</div>
```
… where {{title}} and {{body}} represents information stored in an object like this:

`var context = {title: "My New Post", body: "This is my first post!"}`

The advantage of this is keeping your html small. Handlebars.js {{syntax}} simplifies the design of HTML structure and CSS style to the design of one single example element–the template. Less html means less data to load when people are using their mobile devices to browse the web. Thus the need for handlebars.js - Instead of listing out all your html indexes, you can make one handlebars template (like the above example) and reuse it again and again.

The most important use of Handlebars, and any templating engine, is to keep your HTML pages simple and clean and decoupled from the logic-based JavaScript files.

** But, how does Handlebars.js work?**

Written in JavaScript, Handlebars.js is a compiler that takes any HTML and Handlebars expression and compiles them to a JavaScript function. This derived JavaScript function then takes one parameter, an object—your data—and it returns a string with the HTML and the object properties’ values inserted into the HTML. So, you end up with a string that has the values from the object properties inserted in the relevant places, and you insert that string as HTML on the page.

 ** I still don't understand, an example please... **
 
To use Handlebars, first you link to the Handlebars.js file in the head block of your HTML page, just like you do for jQuery or any .js files. Then there are 3 main pieces of code you use for Handlebars templating:

**Handlebars.js Expressions**

A simple Handlebars expression is written like this (where “content” can be a variable or a helper function with—or without—parameters:
`{{ content }}` 

Or like this, in the case of Handlebars block expressions:

```
{{#each}} ​
HTML content and other Handlebars expression go here and repeat for each iteration on the page.
{{/each}}
```
Below is a Handlebars expression with HTML. The customerName variable is the property whose values will be inserted in place by the Handlebars.compile function:

`<div> Name: {{ customerName }} </div>`

Handlebars templates are embedded in script tags (where the script tag’s type property is set to “text/x-handlebars-template”). The script tag is similar to the script tag you normally use to embed JavaScript in the HTML page, except the type attribute is different. You retrieve the HTML content from the script tag and pass it to the Handlebars compiler.

Here is an example of the Handlebars script tag:

```
<script id="header" type="text/x-handlebars-template">​
 <div> Name: {{ customerName }} </div>​
​</script>
```
Since you have to pass the Handlebars expression (with any containing HTML) to the Handlebars.compile function, (keep reading, we will get to that) a script tag is used to enclose each Handlebars template when they are on the HTML page. This is what lets the compiler know where the template is–to be ready to place the data you have passed it. 

**Data**

The second piece of code in Handlebars templating is the data you want to display on the page. You pass your data as an object (a regular JavaScript object) to the Handlebars function. This object can be comprised of arrays, strings, numbers, other objects like JSON, or a combination of all of these. If the data object has an array of objects, you can use Handlebars each helper function to iterate the array, and the current context is set to each item in the array.

**The Handlebars Compile Function**

The last piece of code we need for Handlebars templating is actually a two-step execution:

1. Compile the template with the Handlebars.compile function. (handlebars provides this function for you)
```
var source   = $("#entry-template").html();
var template = Handlebars.compile(source);
```

2. Then use that compiled function to invoke the data object passed to it (it takes a data object as its sole parameter). And this will return an HTML string with the interpolated object values inserted into the HTML.
In short:
The Handlebars.compile function takes the template as a parameter and it returns a JavaScript function. We then use this compiled function to execute the data object and return a string with HTML and the interpolated object values. Then we can insert the string into the HTML page.
```
var context = {title: "My New Post", body: "This is my first post!"};
var html    = template(context);
```


**Here are the 3 pieces together:**

- On the HTML page: Setup the templates by using Handlebars expressions, and add the templates to a script tag (if using script tags: templates in individual HTML files don’t need script tags):

```
<script id="header" type="text/x-handlebars-template">​
 <div>  Welcome to {{ headerTitle }} </div>​
Current User: {{userName}}
​</script>
```
- In the JavaScript file: Initialize the data object

```
 var theData = {headerTitle:"Good Reads", userName:”Jaclyn”};
 ​
 ​// Retrieve the HTML from the script tag we setup in step 1​
// We use the id (header) of the script tag to target it on the page​
var theTemplateScript = $("#header").html();
```

- Also in the JavaScript file: Then we use the Handlebars compile function to compile the templates.
Compile the template retrieved from the script tag:

```
// The Handlebars.compile function returns a function to theTemplate variable​
var theTemplate = Handlebars.compile (theTemplateScript);
```

Use the theTemplate () function returned by the compile function to generate the final string with interpolated object values. We pass the object data as a parameter. Then attach the resulting string with HTML to the page:

`$(document.body).append (theTemplate (theData));`
This will return our HTML with the values from the object inserted in place, and the result will look like this:&#x2028;


Welcome to Good Reads

Current User: Jaclyn



