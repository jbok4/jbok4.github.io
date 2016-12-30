---
layout: post
title:  "What is Angular binding?"
date:   2016-12-30 15:57:21 -0500
---
Data binding in AngularJS is the synchronization between the data model and the view. AngularJS applications usually have a data model. The model is a collection of data available for the application.

Binding is one of the most powerful features of Angular. When data in the model changes, the view reflects the change, and when data in the view changes, the model is updated as well. This happens immediately and automatically, which makes sure that the model and the view are in sync at all times.

The HTML container where the AngularJS application is displayed, is called the view.
The view has access to the model, and there are several ways of displaying model data in the view.
You can use the `ng-bind` directive, which will bind the innerHTML of the element to the specified model property:

```
<p ng-bind="username"></p>
```
<img src="/img/username_brackets1.jpg" alt="curly brackets">

Or you can use the `ng-model` directive on HTML controls to bind the model to the view.
The `ng-model` directive provides a two-way binding between the model and the view.

```
<input ng-model="username">
```

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
      <h1>Let's Learn How To Use Angular Binding</h1>
    </div>
  </body>
</html>
```

The `ng-app` directive defines where in our page an Angular application is running. There are a few different ways to bind data within Angular. Before we can go over those, we'll need setup a model for us to read data from.

Create a text `input` that has an `ng-model` attribute of "username"

```
<div ng-app>
  <h1>Binding</h1>
  <input type="text" ng-model="username">
</div>
```

`ng-model` is a directive in AngularJS that binds a variable from an input field to a scope variable.

**Binding Using Brackets**
Now that we have a variable set up that we can provide input for, let's bind our message variable into our view. We can do this directly into our view by using the double curly bracket syntax we read about above: \{\{ username \}\}.

Create a paragraph tag underneath our `input` field to display our input

<img src="/img/username_brackets2.jpg" alt="curly brackets2">

Now if we start typing into our `input` field, we can see the text we're typing appear below our input field. What's in between the brackets is an Angular expression. The brackets lets Angular know that there is an expression that needs to be evaluated, which Angular will then evaluate and replace the brackets with the results. Angular expressions are slightly different from javascript expressions.


**Two-way Binding**
Data binding in AngularJS is the synchronization between the model and the view.

When data in the model changes, the view reflects the change, and when data in the view changes, the model is updated as well. This happens immediately and automatically, which makes sure that the model and the view are up to date at all times, no need to worry about refreshing the content.

<img src="/img/username_brackets4.jpg" alt="curly brackets4">

```<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.username = 'Jaclyn Ciringione';
});
</script>```

Try out a couple different expressions with the following code:

<img src="/img/username_brackets3.jpg" alt="curly brackets3">

Here, we added our username to our header. Our second paragraph will display our username twice, and our third paragraph will display false until we type Jaclyn into our `input`. Our last paragraph simply displays 4, which is the result of 2 + 2.

**Binding Using ng-bind**
Another way to use binding in Angular applications is to use the `ng-bind` directive. As applications get bigger and take longer to render, it's possible that we can see curly brackets in our browser for a split second while Angular is still compiling our templates. We can avoid this flashing behavior by using `ng-bind` instead of curly brackets. Since `ng-bind` is used as an element, our expressions will be hidden from the users until they are ready to be displayed.

Switch from curly brackets to `ng-bind`

<img src="/img/username_brackets6.jpg" alt="curly brackets6">

The functionality is exactly same as before, this is just an alternative way of displaying Angular expressions. The downside to `ng-bind` is that the entire text of the element gets replaced with what the expression returns, so we had to move the Binding text from our header into the `ng-bind` expression to get the same results as before.

**One-Time Binding**
The final way to bind data is one-time binding. As the name suggests, this means the data is only read once from the source (in our case the input), then the data between the source and the view are no longer synchronized. This will come in handy as your application grows as it is a much less resource intensive way of displaying static data or data that only needs to be read once. We can express this by prefixing our variables with ::.

See one-time binding in action with the following code:

<img src="/img/username_brackets5.jpg" alt="curly brackets5">

Here we used the `ng-init` directive to initialize username with a value of Jaclyn. `ng-init` is a directive that evaluates the given expression once when the element is initialized. Note that `ng-init` shouldn't be used regularly, as you should be initializing your variables in your controllers. We're using a one-time binding in the third paragraph, which made it so once the value in username was compared to Jaclyn, that specific expression stopped listening for changes to username, leaving the value of true to stay in that paragraph regardless of what we put into our text input.

I feel like each time I write a post explaining something code oriented, it becomes a lot clearer after. This, as with the others, is one of those situations. Once you spend a little time experimenting with the ways in which you can use `ng-bind` it becomes a simple task, and is indeed a very cool feature of angular. 

Thank you to <a href="https://thinkster.io/a-better-way-to-learn-angularjs">thinkster.io</a> and of course to the Flatiron School, for helping me to understand angularJS better.
