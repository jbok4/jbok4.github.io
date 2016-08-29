---
layout: post
title:  "How The Internet Works"
date:   2016-08-29 17:04:04 +0000
---


So, we all know that when you switch on a lightswitch–voila–we have light! But we never really think about how this happens. The same is true for how the internet works. We type in a web address, hit enter and the page we were looking for magically appears in our browser. But what is happening behind the scenes to get this information to our screen from some far-away server? It's a little more complicated than the explanation below, but it is accurate. 

There are some key words you should know. 

At its most basic, **the Internet** is a large **network** of computers which communicate all together. Each computer on a **network** is connected to a special tiny computer called a **router**. This router has only one job: like a signaler at a railway station, it makes sure that a message sent from a given computer arrives at the right destination computer. To send a message to computer B, computer A must send the message to the router, which in turn forwards the message to computer B and makes sure the message is not delivered to computer C.

The computer, smartphone or other device you're using to read this are known as **clients**. They are the end-point in the information connection. 

Machines that store the information we seek on the Internet are **servers**. Servers are computers that store webpages, sites, or apps. When a client wants to access a webpage, a copy of the webpage is downloaded from the server onto the client machine to be displayed in the user's web browser.

Basically a **router** connects the **client**, to the proper **server**, to that it can request the information it needs. After the request is made, the **server** responds with the information that was requested, and sends it back to the **client**, via the **router**. 

Other elements are **nodes** which serve as a connecting point along a route of traffic–nodes are the transmission lines between the network. Nodes can be physical, as in the case of cables and fiber optics– which are very fast–in some cases traveling at the speed of light across the ocean floor, or they can be wireless signals from satellites, cell phone or 4G towers, or radios.

All of this hardware wouldn't create a network without the second component of the Internet: **the protocols**.

**Protocols** are sets of rules that machines follow to complete tasks. Without a common set of protocols that all machines connected to the Internet must follow, communication between devices couldn't happen. The various machines would be unable to understand one another or even send information in a meaningful way. The protocols provide both the method and a common language for machines to use to transmit data.

**Hypertext transfer protocol** is what we use to view Web sites through a browser -- that's what the *http* at the front of any Web address stands for.

There are also some other protocols that you've probably heard of, like FTP, or TCP/IP.

What do these protocols do? At their most basic level, these protocols establish the rules for how information passes through the Internet. You've probably heard of *IP addresses*. These addresses follow the **Internet protocol**. Each device connected to the Internet has its own specific an *IP address* and just like a fingerprint no two are alike. This is how one machine can find another through the massive network. To make things easier, we can alias an IP address with a human readable name called a **domain name**. For example, google.com is the domain name used on top of the IP address 173.194.121.32. So using the domain name is the easiest way for us to reach a computer over the Internet, because no human wants to remember all those numbers.

In order to retrieve this post, your computer had to connect with the specific Web server containing the article's file and the server responded by sending the proper information back to you. 

So what happens, exactly?

First, you open your Web browser and connect to this Web site by typing the web address into your browser. When you do this, your browser sends an HTTP request message over your Internet connection to the server  asking it to send a copy of the specified webpage to your computer, also known as the client. This message, and all other data sent between the client and the server, is sent across your internet connection using TCP/IP.

Provided the server approves your client's request, the server sends the client a "200 OK" message, which means "Of course you can look at that website! Here it is", and then starts sending the website's files to the browser as a series of small chunks called data packets which travel back up the network and down to your computer. 

The browser assembles the small chunks into a complete website and displays it to you according to the rules of the protocols. It's kind of like putting together a jigsaw puzzle. 

And that, in a nutshell, is how the Internet works to connect data from all over the world, stored on endless numbers of servers, to your computer with the click of a button. 
