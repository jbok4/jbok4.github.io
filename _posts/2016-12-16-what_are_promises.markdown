---
layout: post
title:  "What are Promises?"
date:   2016-12-16 15:57:21 -0500
---


Before jumping right into the codespeak, lets speak easy ... Think back to when you first started to learn JS, and it all seemed so overwhelming. There were so many different functions and brackets and error handlers, and nested items to do something that before you got overwhelmed it didnt seem like it would take THAT many steps... did it? I mean just yesterday you leared what JQuery methods were, and now we are building these neverending JS functions with all these nested parts, and OMG did I forget a closing bracket somewhere? This is where promises come in to save the day. They are a way to organize your code into something both readable and synchronous. 

Promises are an alternative method to using Callbacks, for managing asynchronous requests in your codebase - which in english means - to make javascript run in the order of your choosing, instead of all at once or whichever runs the fastest shows up first. JS without promises is like the wild west–Every man(function) for himself. 

At their most basic, promises are a bit like event listeners except:
A promise can only succeed or fail once. It cannot succeed or fail twice, neither can it switch from success to failure or vice versa. If a promise has succeeded or failed and you later add a success/failure callback, the correct callback will be called, even though the event took place earlier.
This is extremely useful for asynchronous success/failure, because you're less interested in the exact time something became available, and more interested in the next step/function in your method chain reacting to the outcome.

Promises are a design pattern. They help you naturally handle errors and write cleaner code by not having callback parameters, and without modifying the underlying architecture (i.e. you can implement them in pure JavaScript and use them to wrap existing asynchronous operations into a synchronous pattern).

The promise object has 2 functions you can call (then) and (catch). *Catch* is used to hold the errors.
*Then* is the one we are most interested in using. 

This is about the time where an example would be useful, right?

Lets say we have 3 functions. The 1st needs to occur before we can do the 2nd (as it depends on the first being successful), and then if each of those first 2 are successful, then we can run the 3rd. This is important if each depends on the resulting data of the one before it to keep the information accurate. So they MUST run in order. 

Take a look at the following example about the steps it takes to start your car. If the first (sitting in the drivers seat) and then 2nd (putting the key in the ignition) dont occur and in order (you cant put the key in the ignition before you get into the car), you cant have the 3rd (the car starting). It balances on the success of the steps before it. 

```
let satInside = function() {
  return new Promise(function(resolve, reject) {
    resolve('Sat in the driver\'s seat');
  });
};

let placeKey = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + ', placed the key in the ignition');
  });
};

let startEngine = function(message) {
  return new Promise(function(resolve, reject) {
    resolve( message + ', and the car started right up!');
  });
};

function handleError(xhr, status, error) {
  $("body").append('<p>error:'+ error.toString()+'</p>');
}
```

The first thing we did, was make 3 individual functions, for the 3 tasks we wanted to complete, instead of nesting them into one large function with callbacks. We also added an error function which will tell us the error if any of the methods we are about to call do not succeed. After all our functions are defined, we need to call these functions as a promise. See below:

```
satInside().then(function(result){
	return placeKey(result);
}).then(function(result){
	return startEngine(result);
}).then(function(result){
	console.log('I\'m driving: ' + result);
}, handleError);
```

When using promise - you can call the first function, after which you have access to a method "then", which you can now use an anonymous function to return the next function you want to run. It will not run until the first one is completed THEN it will run. You can chain the function calls all together, one after the other in whatever you order you desire, they will run in that order always, as the first one runs, and the others dont get called until the first is complete, then the 2nd, and so on. 

**If we run the above code, we get logged to the console:**

`I'm driving: Sat in the driver's seat, placed the key in the ignition, and the car started right up!`

Pretty impressive stuff, and fairly simple once you understand the pattern. It makes for much easier to read code as well. Notice we only had to write code for one error handler, even though we had multiple functions. 

**Check out how the above code works on [jsfiddle](https://jsfiddle.net/jbok4/kyqkuLzj/2/).** (remember to have the console open)
