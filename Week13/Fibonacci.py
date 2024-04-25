# Function to generate Fibonacci series up to a given limit
def fibonacci_series(limit):
    # Initialize variables to store the first two numbers of the series
    a, b = 0, 1
    # Print the first two numbers
    print(a, end=" ")
    print(b, end=" ")
    
    # Generate Fibonacci numbers until the limit is reached
    while True:
        # Calculate the next Fibonacci number
        c = a + b
        # If the next number exceeds the limit, break out of the loop
        if c > limit:
            break
        # Print the next number
        print(c, end=" ")
        # Update variables for the next iteration
        a, b = b, c

# Call the function with the limit of 50
fibonacci_series(50)
