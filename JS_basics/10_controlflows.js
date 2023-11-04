//if...else

//switch

//truthy & falsy values

//falsy values: false, 0, -0, "",null,undefined,NaN, BigInt On
//truthy:- Except falsy values all are truthy values
//Some exceptional truthy values:- "0",'false'," ",[],{}, function (){}

//How to check an array is empty or not
const arr=[]

if(arr.length==0){
    console.log("Array is Empty");
}

//How to check an object is empty or not
const obj={}

if(Object.keys(obj).length==0){
    console.log("Object is Empty");
}

//Nullish Coalescing Operator(??): null undefined
//The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

const name=null ?? "Tina"
console.log(name);
//left expr is null so assign Tina into the variable

const price=0 ?? 123
console.log(price);
// left expr is not null so assign 0 to the price

// Ternary Operator

const coursePrice=100;
coursePrice<=100 ? console.log("Affordable"):console.log("Pricey");;