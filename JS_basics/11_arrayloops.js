// forof loop

//const nums=[1,2,3,4,5]

// for (const num of nums) {
//  //   console.log(num); //1,2,3,4,5
// }

// const myObject={
//     js: "JavaScript",
//     cpp: "C++",
//     py: "Python"
// }

// for (const key of myObject) {
//     console.log(key);
// }

// for (const [key,value] of myObject) {
//     console.log(key);
// }

//We can not iterate an object using forof loop

//Map in js:- 
//Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection. A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration. Iteration happens in insertion order, which corresponds to the order in which each key-value pair was first inserted into the map by the set() method (that is, there wasn't a key with the same value already in the map when set() was called).

// const map=new Map();
// map.set("IN","India");
// map.set("Fr","France");
// map.set("IN","India");

// for (const [key,value] of map) {
// //    console.log(key);// [ 'IN', 'India' ]
//    // [ 'Fr', 'France' ]

//   // console.log(`${key} is ${value}`);
// //    IN is India
// //    Fr is France
// }


//forin loop
const myObject={
    js: "JavaScript",
    cpp: "C++",
    py: "Python"
}

// for (const key in myObject) {
//     console.log(`${key} is for ${myObject[key]}`);

// }

//So we can iterate objects using forin loop

//forin loop in array
//const heros=["flash","spiderman","batman"]

// for (const index in heros) {
//     console.log(index); // 0 1 2
// }

//forin loop returns only key's of the data structure. Array's keys are the index values so it returns the index value

// for (const index in heros) {
//     console.log(heros[index]); //we can access the values like this
// }

//for in loop in map

// const map=new Map();
// map.set("IN","India");
// map.set("Fr","France");
// map.set("IN","India");

// for (const key in map) {
//     console.log(key); //nothing is print in the console
// }
//The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.
// The keys in a map are not enumerable properties (though a map, like all objects, can have enumerable properties). For one thing, they can be of any type, not just strings, as with JavaScript objects, which have historically stood in for maps.

//forEach loop in arrays. this is a prototype for array in js

//const heros=["flash","spiderman","batman"]

// heros.forEach(function (item){
//    console.log(item);
// }) //forEach loop takes a callback function as an argument. the callback function does not have a name. and it takes a parameter like item to iterate over each of the item in the array

// heros.forEach((item)=>{
//     console.log(item);
// }) //Pass a arrow function as a callback function

// heros.forEach((item,index,arr)=>{
//    console.log(item,index,arr);
// })
//callback function also have two more parameters like index of the array and the whole array itself

// function print(item){
//     console.log(item);
// }
//heros.forEach(print) // we can pass a predefined function also as a callback function in forEach loop

//Array of Objects iterate using forEach

// const users=[
//     {
//         "username":"Tina",
//         "age":18
//     },{
//         "username":"Misty",
//         "age":20
//     }
// ]

// users.forEach((item)=>{
//    console.log(`username is ${item.username}`);
// })
// here item refers to each objects in the array

//filter(callbackFn) 
//This methods returns an array containing just the elements that pass the test. If no elements pass the test, an empty array is returned.

//const prices=[100,55,230,65,780,99,101]

// const reasonable=prices.filter((price)=>{
//     return price>=100
// })
//It takes a explicit return arrow function which take each time as a argument and check a condition if it it true then return the item

//Using implicit arrow function. here we can remove return keyword and the braces
//const reasonable=prices.filter((price)=>price>100)
//console.log(reasonable);

//Can we achieve this using forEach loop????

// we can not return any value directly from the forEach loop

// const reasonable=prices.forEach((price)=>{
//     return price>=100
// })
// console.log(reasonable); //undefined

//But we can achieve this in another way using forEach loop:-
// const reasonable=[]

// prices.forEach((price)=>{
//    if(price>=100){
//     reasonable.push(price)
//    }
// })
// console.log(reasonable);

//Arrays of object

// const movies=[
//     {title:"Titanic", genre:"Romantic", release:1990},
//     {title:"Dil", genre:"Romantic", release:2000},
//     {title:"The Nun", genre:"Horror", release:2021},
//     {title:"Mission Impossible", genre:"Thriller", release:2023},
//     {title:"Conjuring 1", genre:"Horror", release:2017}
// ]

// let filteredMovies= movies.filter((movie)=>movie.genre==="Horror")
// filteredMovies= movies.filter((movie)=>movie.release>2000)
// console.log(filteredMovies);

//In real world we can filter out our specific datas using this filter() method

//map():- The map() method is an iterative method. It calls a provided callbackFn function once for each element in an array and constructs a new array from the results.

// if we want to modify the array then filter() does work? let's see

const prices=[100,99,101,567,345,23]

// const newPrices=prices.filter((price)=>{
//     return price+10;
// })
//console.log(newPrices) //[ 100, 99, 101, 567, 345, 23 ]
// Here we can see using filter method we just check the array elements on basis of conditions we can not modify the array elements so here map() comes into the picture. 

// const newPrices=prices.map((price)=>{
//     return price+10;
// })
// console.log(newPrices); //[ 110, 109, 111, 577, 355, 33 ]
// Using map we can modify our each element in the array. We can also achieve this using forEach loop also here is the example

// const updatePrice=[]

// prices.forEach((price)=>{
//      updatePrice.push(price+10);
// })
// console.log(updatePrice); //[ 110, 109, 111, 577, 355, 33 ]

// multiple method chaining

// const newPrices=prices
//         .map((price)=>price+10)
//         .map((price)=>price+1)
//         .filter((price)=>price>=200)
// console.log(newPrices); //[ 578, 356 ]

//reduce():- The reduce() method is an iterative method. It runs a "reducer" callback function over all elements in the array, in ascending-index order, and accumulates them into a single value. Every time, the return value of callbackFn is passed into callbackFn again on next invocation as accumulator. The final value of accumulator (which is the value returned from callbackFn on the final iteration of the array) becomes the return value of reduce().
//The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

//const nums=[1,2,3,4]

// const total=nums.reduce(function (acc,currval) {
//     return acc+currval
// },0)
// reduce() using a callbackFn
// const total=nums.reduce((acc,currval)=>acc+currval,0)
// console.log(total);