---
path: "/2017/10/03/learn-python-iteration-for-loop-while-loop/"
category: "Python"
tags: ["python","learning"]
title: "Learn Python — Iteration (for loop, while loop)"
date: "2017-10-05T00:00:00.000Z"
summary: "In my previous post variables and conditional statement covered. Now let’s see Iteration (for loop, while loop) So many ways I can use for loop..."
images: ["images/post3/post3.jpg"]
---
In my previous post <a href="https://nikhilgohil11.com/2017/10/03/learn-python-variable/">variables</a> and <a href="https://nikhilgohil11.com/2017/10/03/learn-python-conditional-statement-if-if-else/">conditional statement</a> covered.
Now let’s see Iteration (for loop, while loop)
So many ways I can use for loop
I can iterate through string like this

```python
for character in “Nikhil”:
     print character
```

Output:

```op
N
i
k
h
i
l
```

Also, I can iterate through an array

```python
numbers = [1,2,3,4,5,6,7,8,9,0]
for number in numbers:
     print number
```

Output:

```op
1
2
3
4
5
6
7
8
9
0
```

Now suppose I want to iterate between range from 4 to 11, then in python its very easy

```python
for number in range(4,11):
     print number
```

Output:
```op
4
5
6
7
8
9
10
11
```

Hmm.. this is really cool. Let’s look at while


```python
number = 4
while number <=11:
 print number
 number += 1
```

Output:

```op
4
5
6
7
8
9
10
11
```

I am trying while with boolean. Yes its simple and expected

```python
student_passed = true
while student_passed:
 print(“Congratulations!!!”)
 ```

 Output:

```op
Congratulations!!!
```