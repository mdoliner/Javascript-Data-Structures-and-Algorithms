Data Structures and Algorithms - Javascript
===
I noticed that there is a lack of many decent Javascript implementations of most data structures and algorithms. So for all you poor sods out there interviewing in JS, I decided to make a repo of my go-to implementations.

These are by no means the perfect implementations, however I tried to heavily annotate them so you could easily adapt them to the demands of a given problem.

Feel free to drop me a line at msd83@cornell.edu with any feedback or requests! Don't forget to star if you find this useful!

Syntax
===
Some notes on the JS conventions I use:
  - In for loops, I always create an n variable to store lengths of arrays and strings (i.e. for (var i = 0, n = arr.length; i < n;...)). Some JS compilers continuously recalculate the length if you do something like i < arr.length, so this syntax is safer for computational efficiency.
