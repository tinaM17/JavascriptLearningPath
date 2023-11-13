// Is Javascript a object oriented programming language?
// JavaScript is a multi-paradigm language, which means it supports multiple programming paradigms, including object-oriented programming (OOP). While it's not purely a classical OOP language like Java or C++, JavaScript does have key OOP features:

//Objects and Prototypes: JavaScript uses a prototype-based model for object creation and inheritance. Objects can be created and extended through prototypal inheritance.

//Encapsulation: Objects can encapsulate properties and methods. With ES6 (ECMAScript 2015), the introduction of classes made the creation and organization of objects and their behavior more akin to traditional OOP languages.

//Inheritance: JavaScript supports inheritance through prototypes. Objects can inherit properties and behaviors from other objects.

// Polymorphism: JavaScript allows objects to be used interchangeably through the concept of duck typing, where the suitability of an object for a particular purpose is determined by its properties and methods, rather than its explicit type.

// So, while JavaScript might not follow the classical class-based OOP approach, it does provide tools and features that allow for the implementation of OOP principles.

// Is Javascript has classes?

//Yes, JavaScript has introduced the class syntax in ECMAScript 2015 (ES6) to make it easier to work with objects and inheritance in a way that's similar to traditional class-based object-oriented languages.
// Classes in JavaScript are essentially syntactic sugar over the prototype-based inheritance model that JavaScript has always had. Under the hood, classes are still using prototypes and constructor functions. This syntax just provides a more familiar and clearer way to define objects and their relationships, making it easier for those familiar with class-based languages to work in JavaScript.

// Object literal:- an object literal is a comma-separated list of name-value pairs inside of curly braces. means a single object

// Constructor functions:- 
//In JavaScript, constructor functions are a way to create objects or instances. They are used as a blueprint for creating multiple objects with similar properties and methods. They are akin to classes, especially in the context of older JavaScript versions where classes weren't directly supported.

function User(username,password) {
    this.username=username;
    this.password=password;
    //return this;
    // when we use new keyword to generate object then we don't have to explicitly return the this object
    this.greetings= function(){
    console.log(`Welcome ${this.username}`);
   }
   // we can also create functions as an methods of that current context object 

}

// const user1=User("Tina","1234")
// //console.log(user1);
// //By this we can create an user object using an constructor function.
// // Disadvantages:- But in this case if we create another user object using this constructor function then it will override the previous value of the object this
// const user2=User("Misty","1234")
// console.log(user1);

// So to overcome this draback we used new keyword for creating objects

//new:- when we used new keyword firstly it creates an empty object/instance you can say.
//then it call the constructor function with parameter. and all the arguments are injected with that empty object and finally implicitly return that object.
  const user1=new User("Tina","1234")
  const user2= new User("Misty","1234")
  // console.log(user1 instanceof User);
  // instanceof check if the object is the instance of that constructor function or not
// console.log(user2.greetings());

//by this we can create objects just like an oop programming language

/*

Prototype:- 
Every object in JavaScript has a built-in property, which is called its prototype. 
The prototype is itself an object, so the prototype will have its own prototype, 
making what's called a prototype chain. The chain ends when we reach a prototype that 
has null for its own prototype.

When you try to access a property of an object: if the property can't be found in the 
object itself, the prototype is searched for the property. If the property still can't
 be found, then the prototype's prototype is searched, and so on until either the 
 property is found, or the end of the chain is reached, in which case undefined is 
 returned.

*/

//Custom Prototype

const myObj={
  username:"Tina",
  password: "1234"
}

Object.prototype.customProto= function(){
  console.log("I am a custom prototype of object. I am accesible in any datatypes like Arrays, Strings etc");
}

//myObj.customProto()

// accessible in Arrays also

const myHero=["Batman","Dr. Strange"]
//myHero.customProto()

// But if we create a custom prototype in Array then it is not accessible in objects or any other. Because prototype search in that type first then goes to it's parent type not some other datatypes

/****
 * Inheritance with the prototype chain
Inheriting properties
JavaScript objects are dynamic "bags" of properties (referred to as own properties). 
JavaScript objects have a link to a prototype object. When trying to access a property 
of an object, the property will not only be sought on the object but on the prototype 
of the object, the prototype of the prototype, and so on until either a property with 
a matching name is found or the end of the prototype chain is reached.
 * 
 * 
 */

// Prototypical inheritance using __proto__ keyword

// const user={
//   username:"Tina",
//   password: "1234",
//   getDetails: function () {
//     console.log(`username is ${this.username} and password is ${this.password}`);
//   }
// }

// const developer= {
//   role: "fullstack developer",
//   salary: "50000",
//   __proto__: user
// }

// Using __proto__ now developer object has access to the user object and it's prototype

//console.log(developer.username);
// It will first search it's own property, if not found then it check it's prototype properties and if found return the result

//console.log(developer.getDetails());
// we can access the method of the prototype object also

// // A constructor function
// function Box(value) {
//   this.value = value;
// }

// // Properties all boxes created from the Box() constructor
// // will have
// Box.prototype.getValue = function () {
//   return this.value;
// };

// const boxes = [new Box(1), new Box(2), new Box(3)];
// // all boxes can use the getValue prototype
// console.log(boxes[0].getValue());


/*****
 * Modern Syntax of prototypical inheritance
 * 
 * Object.setPrototypeOf(obj1,obj2)
 */


// const user={
//   username:"Tina",
//   password: "1234",
//   getDetails: function () {
//     console.log(`username is ${this.username} and password is ${this.password}`);
//   }
// }

// const developer= {
//   role: "fullstack developer",
//   salary: "50000",
// }

// Object.setPrototypeOf(developer,user)
// console.log(developer.getDetails());

// console.log(Object.getPrototypeOf(developer));
//It returns the prototype of the object. as we set user as the prototype of developer so it returns user as the prototype of developer.

//console.log(Object.getPrototypeOf(user));
// Output:- [Object: null prototype] { customProto: [Function (anonymous)] }
// As we are not setting any prototype of user so it returns Object null as it's prototype


/*****
 * call():- When we have a function inside a another function and try to change or add some properties
 * of the upper function then if we simply just call the function then it does not change
 * the properties of the uppper function as it only have it current context and which is ends as
 * soon as the function current context ends. So no effect will be reflect in our upper fn current objects
 * let's see it with an example
*/

// function checkUsername(username){
//    this.username=username;
// }

// function addUser(username,password,id){
//   checkUsername(username);
//   this.password=password;
//   this.id=id;
// }

// const user=new addUser("Tina","1234","tina17")
// console.log(user);
//Output:- addUser { password: '1234', id: 'tina17' }

// So here we can see username is not set for the upper constructor current context.
// So to spcify that we wanna modify the upper fn current context we have to send a this with the fn call arguments. 

// function checkUsername(this,username){
//   this.username=username;
// }  // here in the parameter section we don't have to add this explicitly because when we pass this to the fn it's automatically take that "this" instead of using current context this


function checkUsername(username){
  this.username=username;
}

function addUser(username,password,id){
  checkUsername.call(this,username);
  this.password=password;
  this.id=id;
}
// Here we have to use the call() method because The call() method of Function instances calls this function with a given this value and arguments provided individually.

const user=new addUser("Tina","1234","tina17")
console.log(user);

//Output:- addUser { username: 'Tina', password: '1234', id: 'tina17' }






