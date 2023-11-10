//Promise:- The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//A Promise is in one of these states:

//pending: initial state, neither fulfilled nor rejected.
//fulfilled: meaning that the operation was completed successfully.
//rejected: meaning that the operation failed.

//How to create a Promise

// const promise=new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         console.log("Promise created");
//         resolve();
//      },2000)
// })
//
//Promise consumed on .then()

// promise.then(()=>{
//     console.log("Promise resolved");
// })

// We can merge this twop steps in a single step
// new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         console.log("Promise started");
//         const data={username:"Tina",Email:"tina@gmail.com"}
//         resolve(data)
//      })
// }).then((data)=>{
//     console.log("Promise resolved");
//     console.log(data);
// })

// Promise Chaining:-
//A common need is to execute two or more asynchronous operations back to back, 
//where each subsequent operation starts when the previous operation succeeds, 
//with the result from the previous step. In the old days, doing several asynchronous 
//operations in a row would lead to the classic callback pyramid of doom

//With promises, we accomplish this by creating a promise chain. The API design of 
//promises makes this great, because callbacks are attached to the returned promise 
//object, instead of being passed into a function.

// const promiseChain=new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         let err=false;
//         if(!err){
//             console.log("Data fetched");
//             resolve({username:"Tina",id:"1234"})
//         }
//         else {
//             reject("Error: Something went wrong")
//         }
//      },2000)
// })

// promiseChain
// .then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch((err)=>{
//     console.log(err);
// })

//PROMISE handle by async await

const promise=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let err=true;
        if(!err){
            resolve({username:"Tina",password:"1234"})
        }
        else {
            reject("Error: Something went wrong")
        }
    },1000)
});

//Promise consumed by async await function

//  async function handleByAsync(){
//       const response=await promise
//       console.log(response);
// }

//This code gives an error because we are not handle the error that are getting from the promise
//To handle this error we have to wrap up our await code into a try catch block

async function handleByAsync(){
    try {
        const response=await promise
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

// Now it works fine

//call the function to execute
handleByAsync()

// Now fetch a actual api request and print the data using async await and .then()
// Earlier to fetch an api request data we used XmlHttpRequest object but now we are using fetch() to fetch the data
// Fetch is a asynchronous function which also returns a promise object that we have to handle either .then or async await

// fetch() handled by .then()

// fetch('https://api.github.com/users/tinaM17')
// .then((response)=>{
//    //console.log(response.json());
//    //Here to convert a response into a json is also a expensive task so we have to handle it using a .then() method
//    const data=response.json()
//    return data;
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//    console.log(err);
// })


// fetch handled by async await

async function handleFetch(){
    try {
        const response=await fetch('https://api.github.com/users/tinaM17')
        try {
            const data = await response.json() // This is also an expensive operation so we have to await this also
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        console.log(error);
    }
}

handleFetch()

// By this we can handle fetch request by using async await without using .then chaining