//getters or get:- The set syntax binds an object property to a function to be called when there is an attempt to set that property. It can also be used in classes.

//setters or set:- The get syntax binds an object property to a function that will be called when that property is looked up. It can also be used in classes.

// class User {
//     constructor(username,email){
//       this.username=username
//       this.email=email
//     }

//     get email(){
//         return this.email.toUpperCase();
//     }
// }

// const user=new User("Tina","tina@g.com")
// console.log(user.email);
/***
 * Output:- 
TypeError: Cannot set property email of #<User> which has only a getter
    at new User (/Users/tinamajumder/Code/MernStack/practice/Js_Course/Js_OOPs/getters_setters.js:8:17)
 */

  //   class User {
  //     constructor(username,email){
  //       this.username=username
  //       this.email=email
  //     }
  
  //     get email(){
  //         return this.email.toUpperCase();
  //     }
  //     set email(value){
  //       this.email=value
  //     }
  // }
  
  // const user=new User("Tina","tina@g.com")
  // console.log(user.email);

  /***
   * Output:- RangeError: Maximum call stack size exceeded
   * As the constructor and set try to set the value in the email it returns an error that both are not done
   * To set the email we have to change the field name in set email() method
   */

//   class User {
//     constructor(username,email){
//       this.username=username
//       this.email=email
//     }

//     get email(){
//         return this.email.toUpperCase();
//     }
//     set email(value){
//       this.newEmail=value
//     }
// }

// const user=new User("Tina","tina@g.com")
// console.log(user.email);

/***
 * Output:-  return this.email.toUpperCase();
                    ^

RangeError: Maximum call stack size exceeded
similar happens in get method also so we have to change the fieldname in get method also
 */

// class User {
//   constructor(username,email){
//     this.username=username
//     this.email=email
//   }

//   get email(){
//       return this.newEmail.toUpperCase();
//   }
//   set email(value){
//     this.newEmail=value
//   }
// }

// const user=new User("Tina","tina@g.com")
// console.log(user.email);
// NoW it works fine

// class User {
//   constructor(){
//   }

//   get email(){
//       return this.newEmail.toUpperCase();
//   }
//   set email(value){
//     this.newEmail=value
//   }
// }

// const user=new User()
// user.email="tina@g.com"
//console.log(user.email);

// Here we see we can set and get the values of an object without using a constructor


/***
 * Function based object creation with getters and setters
 */

// function dance(form,instructor) {
//   this._form=form
//   this._instructor=instructor

//   Object.defineProperty(this,'form',{
//     get: function(){
//       return this._form.toUpperCase();
//     },
//     set: function(value){
//        this._form=value
//     }
//   }),

//   Object.defineProperty(this,'instructor',{
//     get: function(){
//       return this._instructor.toUpperCase();
//     },
//     set: function(value){
//        this._instructor=value
//     }
//   })
// }

// const bollyhop=new dance("BollyHop","Ashish Singh")
// console.log(bollyhop.instructor);


/**
 * Object based getters and setters
 */

const user ={
  _email:'Tina@gmail.com',
  _password: '12345',

  get email(){
    return this._email.toUpperCase()
  },

  get password(){
    return this._password.concat('abc');
  }
}

console.log(user.password);
console.log(user.email);


