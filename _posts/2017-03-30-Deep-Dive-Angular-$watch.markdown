---
layout: post
title:  "Deep Dive: Angular Watch"
date:   2017-03-30 15:57:21 -0500
---

**AngularJs Watch** keeps track of (watches) scope variables and the changing of their values. **Angular Watch** in essence is a monitor of a variable and its value. 

Watches are automatically created by the AngularJs framework, and are usually used to watch variables with data-bindings. If variables exist but are not currently being used in data-binding situations in the view, they are not watched.

If a value gets changed, AngularJs performs the necessary updates (which can be propogations to the DOM, UI updates, etc)

You can also create custom functions which will execute when specific values change. These are called **Watch Listeners**. 

Watch is used heavily in data-binding because bindings are automatically associated with their own Watches once you create a data-binding.

It is recommended that your application only have a count of < 2000 watchers per page. More than that will significantly decrease the speed of the apps functionality.
There are google chrome extensions that can keep track of how many watchers you have on a page. <a target="_blank" href="https://chrome.google.com/webstore/detail/angular-watchers/nlmjblobloedpmkmmckeehnbfalnjnjk?hl=en">This</a> is a good one.

We can create our own Watches manually using the **$watch** function that is available with AngularJs through the **$scope** object.

Lets see this in action:

```
$scope.$watch('variableA'), function(newValue, oldValue) {
  if(newValue != oldValue) {
  $scope.variableB = $scope.variableA + 5;
  }
});
```
You would use **$watch** when AngularJs does not consider the $scope variable(s) for watching. I.e. when they are not being used for data-binding.

A Watch Listener is a type of function that gets executed when a "watch" detects a value change. The above anonymous function that is called as
```function(newValue, oldValue)``` is a Watch Listener.

<a target="_blank" href="http://jsfiddle.net/jbok4/yempjpgb/">This JSFiddle</a> is a working example of how to use a **$scope.$watch** to count the number of changes made in an input field. Play around with it, type in the input box.
