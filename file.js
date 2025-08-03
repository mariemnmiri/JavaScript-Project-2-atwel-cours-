//String Manipulation Functions:
// This function takes a string as input and returns the string reversed.
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    return reversed;
}
// This function counts the number of characters in a string.
function countCharacters(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count = count + 1;
    }
    return count;
}
// This function capitalizes the first letter of each word in a sentence.
function capitalizeWords(sentence) {
    let words = sentence.split(" ");
    let result = "";

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 0) {
            let capitalized = word[0].toUpperCase() + word.slice(1);
            result = result + capitalized + " ";
        }
    }

//Array Functions:

// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function findMaximum(arr) {
    let max = arr[0]; // start with the first element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // update if a bigger value is found
        }
    }
    return max;
}

function findMinimum(arr) {
    let min = arr[0]; // start with the first element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; // update if a smaller value is found
        }
    }
    return min;
}
//Sum of Array: Create a function that calculates the sum of all elements in an array.
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]; // add each element to sum
    }
    return sum;
}
//Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filterEvenNumbers(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]); // only add even numbers
        }
    }
    return result;
}
//Mathematical Functions:

//Factorial: Write a function to calculate the factorial of a given number.
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
//Prime Number Check: Create a function to check if a number is prime or not.
function isPrime(n) {
    if (n < 2) {
        return false; // 0 and 1 are not prime
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // found a divisor
        }
    }
    return true;
}
//Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function fibonacci(n) {
    let sequence = [];

    if (n >= 1) sequence.push(0);
    if (n >= 2) sequence.push(1);

    for (let i = 2; i < n; i++) {
        let next = sequence[i - 1] + sequence[i - 2];
        sequence.push(next);
    }

    return sequence;
}

