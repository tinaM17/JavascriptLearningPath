// **********  Numbers and Math *************

const balance=100000;
const score= new Number(500.768)

console.log( typeof balance); // Number
console.log(typeof score); //Object

// //toString()
// console.log(balance.toString().length); //6

// //toFixed()
//console.log(balance.toFixed(2)); //100000.00

// //toPrecision()
//console.log(score.toPrecision(4)); //500.8

// //toLocaleString()
// console.log(balance.toLocaleString('en-In')); // 1,00,000

// *************** Maths ********************
// console.log(Math.abs(-45));
// console.log(Math.round(4.5)); //round off the number, output=5
// console.log(Math.ceil(4.2)); //ceiling means it returns the next value here returns 5
// console.log(Math.floor(4.8)); // it returns the previous value here returns 4
// console.log(Math.max(2,8,4,1,0,6));
// console.log(Math.min(2,8,4,1,0,6));
// console.log(Math.pow(2,3)); //ouput:- 8
// console.log(Math.sqrt(16));

// console.log(Math.random()); //generates decimal numbers btw 0 to 1
// console.log(Math.random()*100); //generates decimal numbers btw 0 to 100
// console.log((Math.random()*100)+1); //generates decimal numbers btw 1 to 100 to omit 0 we +1

// console.log(Math.floor((Math.random()*100)+1)); //returns the int part of the random number

//generates a random number btw 100 to 500
// const min=100;
// const max=500;

// console.log(Math.random()*(max-min+1)); //multiply with 500-100=400 and to omit 0 +1
// //to convert it int num
// console.log(Math.floor((Math.random()*(max-min+1))+min)); //here we can see it gives result from 1 to 400 so we have to add the min number where it starts
