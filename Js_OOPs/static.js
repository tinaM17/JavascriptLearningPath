/****
 * 
 * Static:- The static keyword defines a static method or field for a class, or a static initialization block (see the link for more information about this usage). Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.

Static methods are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.
 *

*/

class User {
   constructor(username){
    this.username=username
   }
   static loggedIn(){
    console.log("I am a static method");
   }
}

const user=new User("Tina")

// console.log(user.loggedIn()); //This gives an error as instance can not invoke the static methods

//How anyone invoke static methods?
// Using class name itself

console.log(User.loggedIn());
// Output:- I am a static method

//Static method also does not call using it's child instance

class Teacher extends User {
    constructor(username,email){
        super(username);
        this.email=email
    }
    getDetails(){
        console.log(`${this.username}`);
    }
}

const teacher=new Teacher("Misty","1234")

//console.log(teacher.loggedIn()); //This gives an error also

console.log(Teacher.loggedIn());
// Output:- I am a static method
// So as Teacher extends the User class so Teacher class can also access the static method of User class
