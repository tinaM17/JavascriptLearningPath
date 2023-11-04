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
