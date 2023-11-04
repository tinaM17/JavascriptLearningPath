// ********************** Objects ***********************///
// Object creation using literals
// Literal: Any constant value which can be assigned to the variable is called literal/constant. 

// In simple words, Literals in Java is a synthetic representation of boolean, numeric, character, or string data. It is a medium of expressing particular values in the program, such as an integer variable named ‘’/count is assigned an integer value in the following statement.

// // Here 100 is a constant/literal.
// int x = 100; 
// This is not a singleton object
// const myUser= {
//    name:"Tina",
//    age:18,
//    "full name": "Tina Majumder"
// }
// // Object creation using constructor
// // It is a singleton object
// //const user=Object.create(myUser)

// console.log(myUser.name);
// //console.log(myUser.full name); //we can not access this using dot operator
// console.log(myUser["full name"]); //to access this we have to use square braces and as by default key's of objects are string so to use that in square braces we have to use it using ""

// How to add a symbol in object as a key
//  create a symbol first
// const mySym= Symbol("key");

// const myUser= {
//    name:"Tina",
//    age:18,
//    mySym:"my key",
//    "full name": "Tina Majumder"
// }

//console.log( typeof myUser.mySym); //string
// if we declare symbol in the same way as we declare other keys in the objects then does not work as a symbol
// We have to declare it using []
// const myUser= {
//    name:"Tina",
//    age:18,
//    [mySym]:"my key",
//    "full name": "Tina Majumder"
// }
//console.log(myUser[mySym]);
// To modify the fields in myUser object we use = operator
// myUser.name="Misty";
// myUser["full name"]="Misty Majumder"
// myUser[mySym]="new key";
// console.log(myUser);
// Output: {
//   name: 'Misty',
//   age: 18,
//   'full name': 'Misty Majumder',
//   [Symbol(key)]: 'my key'
// }

// mySym="pro key"; // We can not change the Symbol value as it is constant and unique throughout your program

// To freeze the object from modification we can use
//Object.freeze(myUser);
//myUser.name="Tina" //Object is not modified
//console.log(myUser); 
// {
//    name: 'Misty',
//    age: 18,
//    'full name': 'Misty Majumder',
//    [Symbol(key)]: 'new key'
//  }

// myUser.greetings= function() {
//    console.log(`Hello World ${this.name}`); //this refers this object and we can access the keys's of this object
// }
// console.log(myUser.greetings()); //Hello World Misty
// //undefined

//Objects inside an object
// const myUser= {
//    name:"Tina",
//    age:18,
//    [mySym]:"my key",
//    "full name": {
//       "firstname": "Tina",
//       "lastname":"Majumder"
//    }
// }
// console.log(myUser["full name"].firstname);

// How to merge two objects
// const obj1={'1':"a",'2':"b"}
// const obj2={'3':"c",'4':"d"}

// const obj3={obj1,obj2} // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//const obj3=Object.assign({},obj1,obj2) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//here {} empty object is the target and sources are obj1 and obj2
//const obj3=Object.assign(obj1,obj2)
//here target is obj1 and source is obj2 so after merging all  values are merged in the obj1 if you don't want to modify the obj1 then provide the target parameter as empty object
//console.log(obj1); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//Using spread operator

// const obj3={...obj1,...obj2}
// console.log(obj3);

// Array with objects

// const users=[
//    {
//       id:1,
//       name:"Tina"
//    },
//    {
//       id:2,
//       name:"Misty"
//    }
// ]
// console.log(users[0].name); //Tina

// console.log(Object.keys(myUser)); //[ 'name', 'age', 'mySym', 'full name' ]
// console.log(Object.values(myUser)); // [ 'Tina', 18, 'my key', 'Tina Majumder' ]
// console.log(Object.entries(myUser));
// [
//   [ 'name', 'Tina' ],
//   [ 'age', 18 ],
//   [ 'mySym', 'my key' ],
//   [ 'full name', 'Tina Majumder' ]
// ]

//console.log(myUser.hasOwnProperty('name')); //true

/********** Object Destructuring */

// const myUser= {
//    name:"Tina",
//    age:18,
//    mySym:"my key",
//    "full name": "Tina Majumder"
// }

// const {name:username} = myUser
// console.log(username);
