// let age=null

// console.log(typeof age);
// console.log(age);

// let num=Number(age)
// console.log(typeof num);
// console.log(num);

// comparison

//console.log("2"===2);

//String

// const name="Tina";
// const nickName=new String("Misty");

// console.log(typeof name);
// console.log(typeof nickName);
// console.log(name.charAt(1));


// //*************** Strings Operations */
 // const url="http://www.google.com";

// //1) length
// console.log(url.length);

// //2)indexOf
// console.log(url.indexOf('w'));

// //3) valueOf
// console.log(url.valueOf()); //http://www.google.com

// //4) substring
// console.log(url.substring(0,4));

// // 5) slice
// console.log(name.slice(-3,2));
// //if startIndex is negative then it starts with max(startIndex+length,0)
// //if endIndex is negative then if ends with max(endIndex+length,0)
// console.log(name.slice(0,-2));

// //6) replace
// console.log(name.replace("na","ya"));
// console.log(name);

// //7) trim

// const subject="    javascript    "
// console.log(subject.trim()); // remove all the spaces
// console.log(subject.trimStart()); //remove spaces from start
// console.log(subject.trimEnd()); //remove spaces from end

// // 8) split
// const username="Tina Majumder"
// const arr= username.split(' ');
// console.log(arr);

// //9) includes
// console.log(url.includes("www",7));

/* 
In JavaScript, both the `substring` and `slice` methods are used to extract a portion of a string. However, they have some differences in their behavior.

**1. Arguments:**
   - `substring`: Takes two arguments: the starting index and the ending index (not including the character at the ending index).
   - `slice`: Takes two arguments: the starting index and the ending index (the character at the ending index is included).

**2. Negative Index:**
   - `substring`: If the starting index is greater than the ending index, `substring` swaps the two indices.
   - `slice`: If the starting index is greater than the ending index, `slice` returns an empty string.

**3. Omitted Arguments:**
   - `substring`: If you omit one or both arguments, `substring` treats them as if they were 0.
   - `slice`: If you omit the second argument, `slice` goes to the end of the string.

Here are some examples to illustrate the differences:

```javascript
var str = "Hello, World!";
var resultSubstring = str.substring(0, 5); // "Hello"
var resultSlice = str.slice(0, 5); // "Hello"

var resultSubstringNegative = str.substring(7, 2); // "Hello" (swaps indices)
var resultSliceNegative = str.slice(7, 2); // "" (empty string)

var resultSubstringOmitted = str.substring(7); // "World!" (treats omitted as 0)
var resultSliceOmitted = str.slice(7); // "World!" (goes to the end)

console.log(resultSubstring);
console.log(resultSlice);
console.log(resultSubstringNegative);
console.log(resultSliceNegative);
console.log(resultSubstringOmitted);
console.log(resultSliceOmitted);
```

In most cases, you can use either `substring` or `slice` to achieve the same result, but it's important to be aware of the differences, especially when dealing with negative indices and omitted arguments. Choose the method that best fits your specific use case.
*/


// **********  Numbers and Math *************

// const balance=100000;
// const score= new Number(500.768)

// console.log( typeof balance);
// console.log(typeof score);

// //toString()
// console.log(balance.toString().length);

// //toFixed()
// console.log(balance.toFixed(2));

// //toPrecision()
// console.log(score.toPrecision(4));

// //toLocaleString()
// console.log(balance.toLocaleString('en-In'));

// *************** Maths ********************
// console.log(Math.abs(-45));
// console.log(Math.round(4.6)); //round off the number
// console.log(Math.ceil(4.2)); //ceiling means it returns the next value here returns 5
// console.log(Math.floor(4.7)); // it returns the previous value here returns 4
// console.log(Math.max(2,8,4,1,0,6));
// console.log(Math.min(2,8,4,1,0,6));
// console.log(Math.pow(2,3));
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

//************************ Date and Time */

// let myDate= new Date()
// console.log(myDate); // Output:- 2023-10-26T12:49:38.080Z

// console.log(myDate.toString()); //Thu Oct 26 2023 18:20:12 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString()); // returns only date not time Thu Oct 26 2023

// console.log(myDate.toLocaleString()); //10/26/2023, 6:21:45 PM

// console.log(myDate.toLocaleDateString()); //10/26/2023

// console.log(myDate.toISOString()); //2023-10-26T12:53:04.282Z

// console.log(myDate.toJSON()); //2023-10-26T12:53:53.812Z

// console.log(myDate.toTimeString()); //18:24:39 GMT+0530 (India Standard Time)

//let myDate= new Date(2023,0,26)
//let myDate= new Date(2023,0,26,10,20,5)
//let myDate= new Date("2023-05-17 08:20:30 PM")
// console.log(myDate.toLocaleString());

// //***********************Time********* */
// let myTime=Date.now();
// console.log(myTime) //this gives mili seconds time from 1970 to till now
// console.log(myDate.getTime()); //also gives milisecond time from 1970 to till the date

// console.log(Math.round(myDate.getTime()/1000)); //this gives seconds value

// console.log(myDate.getDate());

// console.log(myDate.toLocaleString('default',{
//    weekday:"long"
// }));  //you can customize toLocaleString() whatever your needs

/****************** Arrays ******** */

// const myArr=[3,6,9,8]
// // const myArr1=new Array(4,9,5,7)
// //declare arrays using one of them 
// console.log(myArr);

// Array methods

// myArr.push(10) //push an element at the last
// console.log(myArr);
// myArr.pop() //remove an element fropm last
// console.log(myArr);


// myArr.unshift(2) ////add an element from the first and shift the element
// console.log(myArr);
// myArr.shift() //remove an element from the first and shift the array
// console.log(myArr);


// console.log(myArr.includes(3)); //true
 
// console.log(myArr.indexOf(5)); //-1

// const newString=myArr.join()
// console.log(newString);

/******* Difference btw slice() and splice() */
// const newSlice=myArr.slice(1,3); //slice() returns a new array with the startIndex and endIndex-1 values and it does not modify the original array
// console.log(newSlice)
// newSlice.push(10)
// console.log(newSlice)
// console.log(myArr);

//splice()
// const newSplice=myArr.splice(-1,3) //splice() returns a new array with the startIndex and endIndex values and it modify the original array. from the original array it removes the startIndex and endIndex values
// console.log(newSplice);
// console.log(myArr);

// const arr1=[1,2,3]
// const arr2=[5,6]

// const newarr=arr1.concat(arr2);
// console.log(newarr); //[ 1, 2, 3, 5, 6 ]
// console.log(arr1); // [ 1, 2, 3 ]
// arr1.push(arr2)
// console.log(arr1); //[ 1, 2, 3, [ 5, 6 ] ]

// const newarr=[...arr1,...arr2] //... is the spread operator it spreads all the values in the array and merge the both arrays in a single array
// console.log(newarr);

// const arr=[1,2,3,[4,5,6,[7,8]],9,10]
// const flatArray=arr.flat(2)
// console.log(flatArray);

// console.log(Array.isArray("Tina")); //check it is a array or not
// console.log(Array.from("Tina")); //make an array with the string
// console.log(Array.from({name:"Tina"})); //return empty array because it does not understand to make key's array or value's array
// console.log(Array.of(1,2,3,4,5)); 


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
