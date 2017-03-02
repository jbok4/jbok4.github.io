---
layout: post
title:  "Technical Interview Prep with Rails, Part 1"
date:   2017-03-01 15:57:21 -0500
---
Jumping right in today, with some general knowledge questions for Technical Interview Prep.

**Q: In Ruby, which is generally the better option: a recursive function or an iterative one?**

Loops may achieve a performance gain for your computer. Recursion may achieve a performance gain for your programmer. Choose which is more important in your situation!

Comparing recursion to iteration is like comparing a phillips head screwdriver to a flat head screwdriver. For the most part you could remove any phillips head screw with a flat head, but it would just be easier if you used the screwdriver designed for that screw right? Some algorithms just lend themselves to recursion because of the way they are designed (Fibonacci sequences, traversing a tree like structure, etc.). Recursion makes the algorithm more succinct and easier to understand (therefore shareable and reusable).

Recursion is, in general, the more natural approach in functional languages, and iteration is normally more intuitive in imperative languages.

**Q: What's new in Rails 5?**

* In Rails 5, the rails-api gem will be merged into core allowing the use of Rails as a simple JSON API. 

* Rails 5 will only work on Ruby 2.2.1 and above.

* TurboLinks 3 - Tubolinks 3 allows you to retain most of your page and selectively update certain regions through partials. This is very similar to how SPA’s work, and you can choose to do all this from the server, this offers an instantaneous performance boost.

* Action Cable

* Rake inside Rails–For many a Rails noob, having to figure out when to use rake and when to use rails is a source of confusion. Now you don’t need to switch context between the rake and rails commands. You can run all Rake tasks with the rails keyword. For instance,

``rake db:migrate``

will now become:

``rails db:migrate``

This may not look like much on the surface, but this will make the lives of beginners much simpler. Rails 5 will also add a restart command that quickly restarts the application.

* One change that almost went unnoticed was the update to ``belongs_to``. When you create a Student ``belongs_to`` Class relation, it was possible to create a student without an associated Class relation. This lead to a lot of data inconsistencies. With Rails 5, the parent has become mandatory. 

**Q: Explain the different pieces of Rails.**

* ActiveRecord -> ORM
* ActiveResource -> the main class for mapping RESTful resources as models in a Rails application.
* ActionPack -> the Controller and View layers are handled together by Action Pack.
* ActiveSupport-> Active Support is a grab bag of utility methods and extensions to the Ruby standard library that accelerate development by providing syntactic sugar and easy ways to write expressive and DRY code
* ActionMailer -> mailer

**Some technical interview terms**

**Encapsulation:** Encapsulation is the packing of data and functions into a single component.

**Polymorphism:** In programming languages and type theory, polymorphism is the provision of a single interface to entities of different types.

**Inheritance:** Inheritance is a relation between two classes. A child class inherits all the features of its parent class. Methods from the parent can be overridden in the child and new logic can be added. Inheritance allows you to create a class that is a refinement or specialization of another class. Inheritance is indicated with <.

**MVC:** The Model View Controller principle divides the work of an application into three separate but closely cooperative subsystems. 

**Service Oriented Architecture:** SOA is a new badge for some very old ideas:

Divide your code into reusable modules.
Encapsulate in a module any design decision that is likely to change.
Design your modules in such a way that they can be combined in different useful ways (sometimes called a "family" or "product line").
These are all bedrock software-development principles, many of them first articulated by David Parnas.

What's new in SOA is

You're doing it on a network.
Modules are communicating by sending messages to each other over the network, rather than by more traditional programming-language mechanisms like procedure calls. In particular, in a service-oriented architecture the parts generally don't share mutable state (global variables in a traditional program). Or if they do share state, that state is carefully locked up in a database which is itself an agent and which can easily manage multiple concurrent clients. 

**SOAP API v RESTful API:** Simple Object Access Protocol (SOAP) and Representational State Transfer (REST)
Originally developed by Microsoft, SOAP is a standards-based Web services access protocol that has been around for a while and enjoys all of the benefits of long-term use.

REST is the newcomer to the block. It seeks to fix the problems with SOAP and provide a truly simple method of accessing Web services. Both techniques have issues to consider when deciding which protocol to use. 

While both SOAP and REST share similarities over the HTTP protocol, SOAP is a more rigid set of messaging patterns than REST. The rules in SOAP are important because without these rules, you can’t achieve any level of standardization. REST as an architecture style does not require processing and is naturally more flexible. Both SOAP and REST rely on well-established rules that everyone has agreed to abide by in the interest of exchanging information.

SOAP relies exclusively on XML to provide messaging services. One of the most important SOAP features is built-in error handling. If there’s a problem with your request, the response contains error information that you can use to fix the problem. Given that you might not own the Web service, this particular feature is extremely important; otherwise you would be left guessing as to why things didn’t work. The error reporting even provides standardized codes so that it’s possible to automate some error handling tasks in your code.

Working with SOAP in JavaScript means writing a ton of code to perform extremely simple tasks because you must create the required XML structure absolutely every time.

REST provides a lighter weight alternative. Instead of using XML to make a request, REST relies on a simple URL in many cases. In some situations you must provide additional information in special ways, but most Web services using REST rely exclusively on obtaining the needed information using the URL approach. 

SOAP is definitely the heavyweight choice for Web service access. It provides the following advantages when compared to REST:

Language, platform, and transport independent (REST requires use of HTTP)
Works well in distributed enterprise environments (REST assumes direct point-to-point communication)
Standardized
Provides significant pre-build extensibility in the form of the WS* standards
Built-in error handling
Automation when used with certain language products
REST is easier to use for the most part and is more flexible. It has the following advantages when compared to SOAP:

No expensive tools require to interact with the Web service
Smaller learning curve
Efficient (SOAP uses XML for all messages, REST can use smaller message formats)
Fast (no extensive processing required)
Closer to other Web technologies in design philosophy

For more info on SOAP v REST check out this <a href="http://blog.smartbear.com/apis/understanding-soap-and-rest-basics/">blog</a>.

**Anonymous Function:** Anonymous functions are used heavily in JavaScript for many things, most notably the many callbacks used by the language’s many frameworks. In Ruby we see them most often in their block format. The code run inside a block is an anonymous function.