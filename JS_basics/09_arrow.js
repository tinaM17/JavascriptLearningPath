/////this keyword

// const user= {
//     username:"Tina",

//     welcome: function() {
//         //Here 'this' refer the current context values
//         console.log(`${this.username}, welcome`)
//     }
// }

// user.welcome() //Tina Welcome
// user.username="Misty"
// user.welcome()  // Misty welcome

//when we print this outside any context it returns an empty object
//console.log(this); //{}

// function print() {
//     console.log(this); //Here it returns a global object reference
// }
// print()

//******* Arrow function */

// const greetings = (username) => {
//     console.log(`Hello ${username}`);
// }

// greetings("tina")

//Implicit return arrow function
//we can remove the curly braces and return keyword if our code returns a single line of execution
// const add = (num1,num2) =>  num1+num2

// console.log(add(5,4));
//If we have to return an object in a implicit arrow function then we have to add aparenthesis on the object
// const userDetails= ()=> ({username:"Tina"})
// console.log(userDetails()); //{ username: 'Tina' }


//*********** IIFF */

// Immediately Invoked Function Expression (IIFF)
// It is run as soon as it is declared. When we don't want to reuse the code and the variables declare inside that then instead of creating a function we can create an IIFF which will avoid polluting the global namespace

//Syntax:-

(function db() {
    console.log("DB connection Successfull");
}) ();
// This is a named IIFF
//db(); //If i try to invoke this function later then it is not invoked. Because we can't reuse later

// Arrow function IIFF

// (()=>{
//     console.log('App is running on port 8080');
// })()

// To run two IIFF in a single application we need to explicity end thec first IIFF else it gives an error. To end the first IIFF we place a semicolon end of the IIFF

// Parameterized IIFF

((port)=>{
    console.log(`App is running on port ${port}`);
})(5000)
// by this we can passed parameter to our IIFF