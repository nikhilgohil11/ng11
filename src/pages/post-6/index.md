---
path: "/2017/10/16/learn-python-collection-of-data-list-tuple-and-dictionary-part-1/"
category: "Python"
tags: ["python","learning"]
title: "Learn Python — Collection of data ( List, Tuple and Dictionary) — part 1"
date: "2017-10-16T00:00:00.000Z"
summary: "I have tried learning how to declare the variable and assign value in python in the first post and then how to write if else in python and ..."
images: ["images/post3/post3.jpg"]
---

I have tried learning how to declare the variable and assign value in python in the <a href="https://nikhilgohil11.com/2017/10/03/learn-python-variable/">first post</a> and then how to write <a href="https://nikhilgohil11.com/2017/10/03/learn-python-conditional-statement-if-if-else/">if else</a> in python and in the third post tried hands-on <a href="https://nikhilgohil11.com/2017/10/03/learn-python-iteration-for-loop-while-loop/">iteration (for loop & while loop)</a> in python

Now I want to go little further and want to try something where I can hold multiple values in collection form. In variable, we can store single value like this

```python
totalSubjects = 6
```

But it’s not possible to store multiple values like 80, 90, 76, 88, 91 to totalSubjects. Either I declare multiple variables where maintaining each variable is difficult in a major project or I need collections where I can store multiple values to make this works.
In python, we can store a collection of data in List, Tuple and Dictionary.
I will try List in this blog post.

<b>List</b>: List is another name for the array. In many other languages, they call it an array and in python its list. When I look at List, it’s easy and has so many methods to make operations easy.
Now I am declaring and assigning value to a list in next line

```python
subjects = [‘algebra’, ‘geometry’, ‘biology’, ‘’, physics', 'chemistry'];
marks = [80, 90, 76, 88, 91];
```

Accessing List elements and assigning a new value is like this

```pyhton
print(subjects[0])

Output: algebra

print(marks[4])

Output: 91
```

Now I wanted to use multiple values from List from 2nd Index to 4th Index,

```python
print(marks[1:4]);

Output: [90, 76, 88]
```

I am replacing/updating value 88 to 99

```python
marks[3] = 99

print(marks[1:4]);

Output: [90, 76, 99]
```

Delete value at specific location from marks List

```python
del marks[3] or marks.remove(88)

print(marks)

Output: [80, 90, 76, 91]
```

Concate two List
```python
print(marks+subjects)

Output: [80, 90, 76, 88, 91,‘algebra’, ‘geometry’, ‘biology’, ‘’, physics', 'chemistry']
```

Append value to marks list

```python
marks.append(77)

print(marks)

Output: [80, 90, 76, 88, 91,,77]
```
