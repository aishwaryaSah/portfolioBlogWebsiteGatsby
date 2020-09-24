---
path: "/bit-much"
title: "Bit Much?"
date: "10.4.2020"
published: true
description: "Overview of some bit manipulation concepts to help you code better each day."
---
<div className="blog-space" style="font-family: sans-serif; text-align: justify; font-size:23px;">

<p style="font-size:25px;">Let’s begin with some bit manipulation basics: </p>

<ol style="padding-left:20px; font-size:18px;">
  <li>XOR of n-inputs is true if input has odd number of true’s.</li>
  <li>Left shift operation of 
    <div className="code-snippet" style="background-color:black; color:white; padding: 20px; width:50%; text-align: justify;">
      a&lt;&lt;b
        <span style="padding-left:20px; padding-right:20px;">is equilvalent to </span>
      a * ( 2 <sup>b</sup> )
    </div>
  </li>
  <li>Right Shift operation
    <div className="code-snippet" style="background-color:black; color:white; padding: 20px; width:50%; text-align: justify;">
      a>>b 
        <span style="padding-left:20px; padding-right:20px;">is equilvalent to </span>
      a / ( 2 <sup>b</sup> )
    </div>
  </li>
  <li>Left and right operators work perfectly only for positive numbers.</li>
  <li>Upper case English alphabets to lower case
    <div className="code-snippet" style="background-color:black; color:white; padding: 20px; width:50%; text-align: justify;">
      ch | = ‘ ‘
    </div>
  </li>
  <li>Lower case English alphabets to upper case
    <div className="code-snippet" style="background-color:black; color:white; padding: 20px; width:50%; text-align: justify;">
      ch & = ‘ ‘
    </div>
  </li>
  <li>Total number of bits in a number
    <div className="code-snippet" style="background-color:black; color:white; padding: 20px; width:50%; text-align: justify;">
      log2(num) +1 
    </div>
  </li>
</ol>

<div >
  <span style="font-size:23px;">
  I always try to solve a few problems every now and then to stay in touch and A few days ago I stumbled across a leetcode hard problem <a href="https://leetcode.com/problems/maximum-score-words-formed-by-letters/">Maximum Score Words Formed by Letters</a>
  </span>
  <br></br>
  <span style="font-size:23px;">The way I approach such problems:</span>
  <br></br>
  <ol style="padding-left:20px; font-size:18px;">
    <li>Read it thoroughly.</li>
    <li>Try to understand the test cases.</li>
    <li>Then try different ways of solving it as you can think of.</li>
    <li>Still no luck? See the related topic.</li>
    <li>Got any ideas? No? Then Brush up on the topic. Try to read some problems related to it. </li>
    <li>Go and try the problem again yourself.</li>
    <li>Still facing issues then read up the editorial or some one’s answer and jot down the things that you missed. If it is something that you were not aware of, read it throughly.  Try not to make the same mistake again.</li>
    <li>Finally, mark the problem to try to solve it in a few days again.</li>
  </ol>
</div>


This problem stated that it was from bit masking.
And I had no clue of how to apply combinations logic using bit manipulation. 

Got to reading and found the easiest way to :
<p style="font-size:25px;">
  <b> To calculate 0 or more ways to make combinations out of an array/string of elements using Bit Masking </b>.
</p>

Based on the Binary Table. Lets take we have an array of 3 elements - A, B , C. Any combination from these would be one of these :

<div className="code-snippet" style="background-color:black; color:white; padding: 20px; width:50%; text-align: justify;">
<table>
  <tr style="border-bottom: 2px solid white;">
    <td style="text-align: center;">A</td>
    <td style="text-align: center;">B</td>
    <td style="text-align: center;">C</td>
  </tr>
  <tr>
    <td style="text-align: center;">0</td>
    <td style="text-align: center;">0</td>
    <td style="text-align: center;">0</td>
  </tr>
  <tr>
    <td style="text-align: center;">0</td>
    <td style="text-align: center;">0</td>
    <td style="text-align: center;">1</td>
  </tr>
  <tr>
    <td style="text-align: center;">0</td>
    <td style="text-align: center;">1</td>
    <td style="text-align: center;">0</td>
  </tr>
  <tr>
    <td style="text-align: center;">0</td>
    <td style="text-align: center;">1</td>
    <td style="text-align: center;">1</td>
  </tr>
  <tr>
    <td style="text-align: center;">1</td>
    <td style="text-align: center;">0</td>
    <td style="text-align: center;">0</td>
  </tr>
  <tr>
    <td style="text-align: center;">1</td>
    <td style="text-align: center;">0</td>
    <td style="text-align: center;">1</td>
  </tr>
  <tr>
    <td style="text-align: center;">1</td>
    <td style="text-align: center;">1</td>
    <td style="text-align: center;">0</td>
  </tr>
  <tr>
    <td style="text-align: center;">1</td>
    <td style="text-align: center;">1</td>
    <td style="text-align: center;">1</td>
  </tr>
</table>
</div>


So, when we generate this for a particular list of options, we can easily apply our filters/constraints and get the required combinations.

Algorithm:

<div className="code-snippet" style="background-color:black; color:white; padding: 20px; width:80%; text-align: justify;">
  <p style="line-height: 10px; display: inline;">// length of array = len </p>
  <p style="line-height: 10px;">mask = 1 &lt;&lt; len; </p>
  <p style="line-height: 10px; display: inline;"> // Iterating over rows</p>
  <p style="line-height: 10px;">for (i=0; i &lt;= mask; i++)</p>
  <p style="line-height: 10px;">&#123;</p>
  <p style="line-height: 10px; padding-left:15px; display: inline;">// iterating over columns</p>
  <p style="line-height: 10px; padding-left:15px;">for ( j=0; j &lt; len; j++ )</p>
  <p style="line-height: 10px; padding-left:15px;">&#123; </p>
  <p style="line-height: 10px; padding-left:30px; display: inline;">// checking if jth bit is set in i.</p>
  <p style="line-height: 10px; padding-left:30px;">if ( i & ( 1 &lt;&lt; j ) )</p>
  <p style="line-height: 10px; padding-left:30px;">&#123;</p>
  <p style="line-height: 10px; padding-left:45px; display: inline;">// every time we have a 1 in the table, cursor comes here</p>
  <p style="line-height: 10px; padding-left:30px;">}</p>
  <p style="line-height: 10px; padding-left:15px;">}</p>
  <p style="line-height: 10px;">}</p>
</div>
Worked for the question and all test cases passed.

<br></br>
But when I was looking into other solutions , I found perfect submissions using <b>Backtracking</b>, <b>Recursion</b> and <b>DFS</b> as well. Should have thought harder i suppose. 

<b>Drawback of this method</b> =  Does not work for lengths greater than 31. As 32 bit integer limit gets exceeded. 
<br></br>
I hope this article was informative. Do feel free to give feedbacks and let me know if you would like me to write about something else as well. 

<div>
  You can read more about bit manipulations from :
  <ul>
    <li><a href="https://www.geeksforgeeks.org/bit-tricks-competitive-programming/" target="_blank" rel="noopener noreferrer">GeeksforGeeks</a></li>
    <li><a href="https://www.hackerearth.com/practice/basic-programming/bit-manipulation/basics-of-bit-manipulation/tutorial/" target="_blank" rel="noopener noreferrer">Hackerearth</a></li>
  </ul>
</div>


</div>