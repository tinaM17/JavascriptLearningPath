//Functions and Parameters

// function add(num1,num2){
//    console.log(num1+num2);
// }

//add    //reference of the function
//add();   //NaN because we did not pass any argument

//add(3,2) //5

// const result=add(3,2) //5
// console.log(result);  //undefined because function does not return anything

// function add(num1,num2) {
//    return num1+num2;
// } 

// const result=add(3,2);
// console.log(result); //5

// const result=add("3",5) //35
//const result=add("3",null) //3null
// const result=add("3") //if i don't pass any of the argument then it takes as an undefined value
// console.log(result);  


//Rest operators(...)
//if we want to send multiple arguments in the function then how we can send and retrieve it

// function cart(...num){
//    return num;
// }

// console.log(cart(100,200,300)); //[100,200,300]

// function cart(val,...num){
//    return num;
// }
// console.log(cart(100,200,300)); // [200,300] first value is assign to val


// Objects as an function argument

// const myUser={
//    username:"Tina"
// }

// function userDetails(obj){
//    return `Username is ${obj.username}`
// }

// console.log(userDetails(myUser)); //Tina
// console.log(userDetails()); //gives an error

// Function with Arrays

// function users(array){
//    return array[0];
// }

// console.log(users(["Tina","Misty"])); //Tina



