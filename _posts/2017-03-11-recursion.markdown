---
layout: post
title:  "Technical Interview Prep with Ruby, Part 2"
date:   2017-03-10 15:57:21 -0500
---

**What is Recursion?**


Recursive programming is the process of progressively reducing a problem into easier to solve versions of itself. Think of it as a more complicated loop. The recursive function goes through all its steps and during the course of that, usually one or more items are removed from the array/list and then the recursive function calls itself as the last step in the function. This means that the function is running a loop over itself–over and over until it gets to the break value which ends the loop.

Here is an example from a technical interview I recently had:

Let's say you are given an array of *n* integers, which represents the prices of a stock over *n* consecutive days. Please write a function that returns the biggest loss you could incur over those *n* days by buying high and selling low.

```
test_1 = [6, 14, 1, 23, 18, 8, 11] // 15
test_2 = [17, 5, 7, 19, 8] // 13
```

*Now, recursively solving this problem is not the easiest nor simplest way to do it, but I think it serves as a good simple problem to follow along and understand the principles of recursion. The advantage is it is quicker for the computer to run, and doesnt have an outer and inner loop checking each and every set of numbers together.* 

How to think this through recursively in pseudo code...

*n* should never equal nil, because that is not an integer, so to begin, we will set 
*n* = 0. 

**Step 1.** The variable *firstValue* should equal the first value in the array. Once *firstValue* is set to that value, we can delete that item from the array, as we no longer need it. 
To solve the problem, only the items that come AFTER that number count. You can only sell something AFTER you have purchased it. 

**Step 2.** Find the smallest value in the remaining array and set it to the variable *secondValue*.

**Step 3.** Store the difference from firstValue - secondValue as the *n* variable 

**Step 4.** Repeat steps 1-3 if the array has more than one item in it. Each time through step 3, check to see that the existing *n* value is larger than the difference from step 2. Whichever value is largest, should be the new value of *n*. Make sure to set the value of *n* when recalling the function to *n* = *n* (which retains the current value instead of resetting *n* to the zero value).

As we are running through the array
test_1 = [6, 14, 1, 23, 18, 8, 11]

the first time through the array would consist of
[6, 14, 1, 23, 18, 8, 11]

the second time through
[14, 1, 23, 18, 8, 11]

the third time through
[1, 23, 18, 8, 11]

the fourth time through
[23, 18, 8, 11]

the fifth time through
[18, 8, 11]

the sixth time through
[8, 11]

**Step 5.** Because after the 6th time through there will only be 1 item remaining in the array, the if statement in our recursive function lets us escape the loop and it spits out the value of *n*.


In Ruby code this recursive function would look like:

```
def biggest_loss(array, n = 0)
    firstValue = array.slice!(0)
    secondValue = array.min
    if firstValue - secondValue > n
        n = firstValue - secondValue
    end
    if array.length > 1
        biggest_loss(array, n = n)
    end
    n
end

biggest_loss(test_1)
```