---
title: Features
---

## Headings

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

# Code blocks

```python { title="hello-world.py" }
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

number = int(input("Enter a non-negative integer: "))
if number < 0:
    print("Factorial is not defined for negative numbers.")
else:
    result = factorial(number)
    print(f"The factorial of {number} is {result}")
```