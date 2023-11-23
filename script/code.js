// Operators: 
// Make use of the dot operator
//  console.log(person.name);

// /Make use of square bracket 
//  console.log(person['surname']);

// // What if the key wasn't found 
// console.log(person['surnames']);
//  console.log(person.subjects.at(-1));

// // With the dot operator
//  console.log(person.ages);
// console.log(Object.keys(person));
// console.log(Object.values(person));
// 
//you can use an object : it does represent a thing, person or place. Such as a phone, car, etc
/* --------------------------------------------O P E R A T O R S-------------------------------------------------------------------
-Operators
- Arithmetic
- Assignment (=) 
- Comparison 
- Logical operators: when we want to combine conditions 

- Conditional operator: 
we make use of the if statement to compare*/

//outer if statement

//spread operator: it copies all the properties vs assignment operator: used to assign the value, variable and function to another variable
// let car2 = {...car1}
// console.log(car1, car2);
// console.log("Change the value of car2"); 
// car2.year = 2024
// console.log(car1, car2); 

//switch -- we want to evaluate a variable 
//alternative statement -->/


//Modulus is to check if its even or odd: 
let numb1 = +prompt("")
console.log(57 % 2 > 0 ? "Odd Number" : "Even Number"); //% is dividing 

//Ternary Operator: is a simplified conditional operator like if / else.
/* Before: 
if (authenticated) {
  renderApp();
} else {
  renderLogin();
}

After: With Ternary 
authenticated ? renderApp() : renderLogin(); */

let salary = 50000
let bonus = 2000
let performance = true
console.log(performance ? salary + bonus : salary );  // to display the salary