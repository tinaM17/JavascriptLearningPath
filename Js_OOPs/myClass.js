/***
 * Class:- Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.
 * 
 * Classes are in fact "special functions", and just as you can define function expressions and function declarations, a class can be defined in two ways: a class expression or a class declaration.
 * The body of a class is the part that is in curly braces {}. This is where you define class members, such as methods or constructor.

The body of a class is executed in strict mode even without the "use strict" directive.

A class element can be characterized by three aspects:

Kind: Getter, setter, method, or field
Location: Static or instance
Visibility: Public or private

 * The constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class — a SyntaxError is thrown if the class contains more than one occurrence of a constructor method.
 */

//Creating a class
/** 
class User {
    constructor(username,password){
        this.username=username;
        this.password=password
    }
    // Constructor used for creating and initializing the object

    get getUsername(){
       return this.username
    }
    get getPassword(){
        return this.password
    }
    //The get syntax binds an object property to a function that will be called when that property is looked up. It can also be used in classes.
    set setUsername(username){
       this.username=username
    }
    set setPassword(password){
        this.password=password
    }
    // The set syntax binds an object property to a function to be called when there is an attempt to set that property.
    getDetails(){
        console.log(`${this.username} have the password ${this.password}`);
    }
    //Method definition is a shorter syntax for defining a function property in an object initializer.
}

// How to create an object?
const user=new User("Tina","1234")
console.log(user.getDetails());
console.log(user.getUsername);
console.log(user.getPassword);
user.setUsername="Misty"
console.log(user.getUsername);
console.log(user.getDetails());

*/


//Behind the scene how js understand class and works behind the scene

/**** 
function User(username,password){
    this.username=username
    this.password=password
}

User.prototype.getDetails= function() {
    console.log(`${this.username} have the password ${this.password}`);
}

const user=new User("Tina","1234")
console.log(user.getDetails());

*/

/****
 * Inheritance:- Js gives us a new keyword "extends" that use to inherite one class prototype to another class.
 * It just a syntactic sugar but behind the scene it's implement the same prototypical inheritance
 */

/*** 
class User {
    constructor(username){
        this.username=username
    }
    loggedIn(){
        console.log(`${this.username} is logged in`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.password=password
        this.email=email
    }
    addCourse(){
        console.log(`${this.username} added a course`);
    }
}
const user1=new Teacher("Tina","tina@gmail.com","1234")
console.log(user1.addCourse());
console.log(user1.loggedIn());
// So as we extends User in the Teacher class so we can access the method of user class also

const user2=new User("Misty")
console.log(user2.loggedIn());

//console.log(user2.addCourse());
//Gives an error because User class does not extends Teacher class means it does not have the prototype of Teacher so user can not invoke the methods of Teacher class

console.log(user1 instanceof Teacher); //true
console.log(user1 instanceof User);  //true
console.log(user2 instanceof Teacher); //false

*/

