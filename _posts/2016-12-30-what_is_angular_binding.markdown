---
layout: post
title:  "What is Angular binding?"
date:   2016-12-30 15:57:21 -0500
---

Binding is one of the powerful features of Angular. It allows us to automatically synchronize data between our views and our models, allowing our models to be the "single-source-of-truth" in our application.

Read the AngularJS guide on data binding.

Let's start by creating an angular application with the following code:

```
<!DOCTYPE html>
<html>
  <head>
    <title>AngularJS Binding</title>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0-beta.5/angular.min.js"></script>
  </head>
  <body>
    <div ng-app>
      <h1>Binding</h1>
    </div>
  </body>
</html>
```

The ng-app directive defines where in our page an Angular application is running. There are a few different ways to bind data within Angular. Before we can go over those, we'll need setup a model for us to read data from.

Create a text input that has an ng-model attribute of "message"

```
<div ng-app>
  <h1>Binding</h1>
  <input type="text" ng-model="message">
</div>
```

ng-model is a directive in AngularJS that binds a variable from an input field to a scope variable.

Binding Using Brackets
Now that we have a variable set up that we can provide input for, let's bind our message variable into our view. We can do this directly into our view by using the double curly bracket syntax: {{ message }}.

Create a paragraph tag underneath our input field to display our input

```
<div ng-app>
  <h1>Binding</h1>
  <input type="text" ng-model="message">
  <p>{{ message }}</p>
</div>
```

Now if we start typing into our input field, we can see the text we're typing appear below our input field. What's in between the brackets is an Angular expression. The brackets lets Angular know that there is an expression that needs to be evaluated, which Angular will then evaluate and replace the brackets with the results. Angular expressions are slightly different from javascript expressions.

See the AngularJS guide on expressions to learn more about the difference between Angular expressions and javascript expressions

Try out a couple different expressions with the following code:

```
<div ng-app>
  <h1>Binding {{ message }}</h1>
  <input type="text" ng-model="message">
  <p>{{ message }}</p>
  <p>{{ message + message}}</p>
  <p>{{ message === 'hello'}}</p>
  <p>{{ 1 + 2 }}</p>
</div>
```
Here, we added our message to our header. Our second paragraph will display our message twice, and our third paragraph will display false until we type hello into our input. Our last paragraph simply displays 3, which is the result of 1 + 2.

Binding Using ng-bind
Another way to use binding in Angular applications is to use the ng-bind directive. As applications get bigger and take longer to render, it's possible that we can see curly brackets in our browser for a split second while Angular is still compiling our templates. We can avoid this flashing behavior by using ng-bind instead of curly brackets. Since ng-bind is used as an element, our expressions will be hidden from the users until they are ready to be displayed.

Switch from curly brackets to ng-bind

```
<div ng-app>
  <h1 ng-bind="'Binding ' + message"></h1>
  <input type="text" ng-model="message">
  <p ng-bind="message"></p>
  <p ng-bind="message + message"></p>
  <p ng-bind="message === 'hello'"></p>
  <p ng-bind="1 + 2"></p>
</div>
```
The functionality is exactly same as before, this is just an alternative way of displaying Angular expressions. The downside to ng-bind is that the entire inner text of the element gets replace with what the expression returns, so we had to move the Binding text from our header into the ng-bind expression to get the same results as before.

One-Time Binding
The final way to bind data is one-time binding. As the name suggests, this means the data is only read once from the source, then the data between the source and the view are no longer synchronized. This will come in handy as your application grows as it is a much less resource intensive way of displaying static data or data that only needs to be read once. We can express this by prefixing our variables with ::.

Read the AngularJS guide on one-time binding

See one-time binding in action with the following code:

```
<div ng-app>
  <h1 ng-bind="'Binding ' + message"></h1>
  <input type="text" ng-model="message" ng-init="message = 'hello'">
  <p ng-bind="message"></p>
  <p ng-bind="message + message"></p>
  <p ng-bind="::message === 'hello'"></p>
  <p ng-bind="1 + 2"></p>
</div>
```
Here we used the ng-init directive to initialize message with a value of hello. ng-init is a directive that evaluates the given expression once when the element is initialized. Note that ng-init shouldn't be used regularly, as you should be initializing your variables in your controllers (which we'll go over how to do in a different lesson). We're using a one-time binding in the third paragraph, which made it so once the value in message was compared to hello, that specific expression stopped listening for changes to message, leaving the value of true to stay in that paragraph regardless of what we put into our text input.
