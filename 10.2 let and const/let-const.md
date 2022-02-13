# *let* and *const* Exercise
In this exercise, you’ll refactor some ES5 code into ES2015.

## ES5 Global Constants
```
var PI = 3.14;
PI = 42; // stop me from doing this!
```

## ES2015 Global Constants
```
/* Write an ES2015 Version */
const PI = 3.14;
PI = 42; // should return error 
```

## Quiz
- What is the difference between ***var*** and ***let***?
	- You can redeclare ***var***, but cannot redeclare ***let***. \
	Also, ***const*** is block-scoped, meaning the variable only lives inside the code block it's in.
- What is the difference between ***var*** and ***const***?
	- You can reassign and redeclare ***var***, but you cannot do either with ***const***. \
	Also, ***const*** is block-scoped, meaning the variable only lives inside the code block it's in.
- What is the difference between ***let*** and ***const***?
	- You can reassign ***let***, but cannot reassign ***const***.
- What is hoisting?
	- When the declaration of a variable is run first, prior to the initialization of the variable. Typical when using ***var***.