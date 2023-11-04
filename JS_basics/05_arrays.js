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
