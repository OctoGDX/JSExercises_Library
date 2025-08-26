/*
Exercise proposed by ChatGPT 2:
Declare a constant piText = "3.14".
Convert it to a number using Number().
Print to the console the result and its type (typeof).
Make an if statement that compares if piText converted to a number is less than 10.
If it is, print "The number is small".
If not, print "The number is large".

Solution written by:
Gadiel Guillen (OctoGDX)
LinkedIn: /in/gguillenprodev/
*/

const pi = "3.1416";

// conversion of pi to a number
const piNumber = Number(pi);
console.log(piNumber, typeof piNumber);

// Flow control scope of the constant
if (piNumber < 10) {
    console.log("The number is small");
} else {
    console.log("The number is large");
}

/*
To convert the value of a constant to another data type
we must create a new constant based on the previous one.

Example:
const pi = "3.1416";         // pi is a string
const piNumber = Number(pi); // conversion to number

We can check the result with:
console.log(piNumber, typeof piNumber);
*/
