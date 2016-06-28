---
layout: post
title:  "BAD URI(IS NOT URI?): TODO: SET TO ‘HTTP://MYGEMSERVER.COM’"
date:   2016-06-28 09:35:00 -0400
---


I created my first gem, called MLB Headlines, which scrapes the info from the latest MLB headlines (as you might have guessed, per the catchy title) and also the descriptions of any Headlines you might be interested in quickly reading more about. Except, when I tried to push it to Ruby Gems…. I kept getting this error:

ERROR: While executing gem … (URI::InvalidURIError)
bad URI(is not URI?): TODO: Set to ‘http://mygemserver.com’

![<img src="(http://dkphotoimaging.com/wp-content/uploads/2016/04/mlb_headlines1.jpg">](http://dkphotoimaging.com/wp-content/uploads/2016/04/mlb_headlines1.jpg)

I googled it, found nothing helpful. … tried a bunch of different things ,and couldn’t figure out where the problem was. After re-reading through any rubygems info I could get my hands on to try and solved the problem but to no avail, I asked the advice of my teacher Avi Flombaum and learned that in the gemspec, there are a few lines of code that need to be commented out for the gem to work.

Standard in the gem install is this block of code, within the gemspec file

![<img src="http://dkphotoimaging.com/wp-content/uploads/2016/04/mlb_headlines2.jpg">](http://dkphotoimaging.com/wp-content/uploads/2016/04/mlb_headlines2.jpg)

and therein is where the error lies.

If I comment out those lines of my code, like below

![<img src="http://dkphotoimaging.com/wp-content/uploads/2016/04/mlb_headlines3.jpg">](http://dkphotoimaging.com/wp-content/uploads/2016/04/mlb_headlines3.jpg)

then make a new pull request to github

git add .

git commit -m “gemspec fix”

git push

now, we are finally ready to send this file to rubygems.org

gem build mlb_headlines

gem push mlb_headlines-0.1.0.gem

![<img src="http://dkphotoimaging.com/wp-content/uploads/2016/04/mlb_headlines4.jpg">](http://dkphotoimaging.com/wp-content/uploads/2016/04/mlb_headlines4.jpg)

voila! a new ruby gem is born.


![<img src="http://dkphotoimaging.com/wp-content/uploads/2016/04/mlb_headlines___RubyGems_org.jpg">](http://dkphotoimaging.com/wp-content/uploads/2016/04/mlb_headlines___RubyGems_org.jpg)

In programming, nothing is easy until you have experienced it.

I thought the biggest hurdle was the scraping and creating this program from scratch on my own, and it was definitely a challenge. But it wasn’t the only one. Hopefully this post will serve to help someone else who runs into this same issue.

This project started out as an assignment for school, and turned into a bit of a labor of love. It sure was laborious, and there sure is plenty more I can do to make it better, but thats what version 0.1.1. is for! and 0.1.2, and 0.3.1 for that matter. There were a few days at the start of this epic project journey where I was completely so intimidated by what I needed to accomplish, that I couldnt even begin to fathom what it entailed. This is how I began: by watching youtube videos, then class lectures and checking out some websites and inspecting their code to see which site was best to scrape. Getting prepped to begin this project ended up being just as time consuming as the actual coding, which is not a bad thing, I do think it paid off in the end. Hopefully you will appreciate this gem too.

https://rubygems.org/gems/mlb_headlines

Good luck programming out there!
