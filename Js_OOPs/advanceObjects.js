//Object.getOwnProperties(Object,"PropertyName")
// This return the details description of the object's property has

//console.log(Object.getOwnPropertyNames(Math));
/**
 * [
  'abs',    'acos',    'acosh',  'asin',
  'asinh',  'atan',    'atanh',  'atan2',
  'ceil',   'cbrt',    'expm1',  'clz32',
  'cos',    'cosh',    'exp',    'floor',
  'fround', 'hypot',   'imul',   'log',
  'log1p',  'log2',    'log10',  'max',
  'min',    'pow',     'random', 'round',
  'sign',   'sin',     'sinh',   'sqrt',
  'tan',    'tanh',    'trunc',  'E',
  'LN10',   'LN2',     'LOG10E', 'LOG2E',
  'PI',     'SQRT1_2', 'SQRT2'
]
By this functions we can see all the properties of a object
 */

// console.log(Math.PI);
// Math.PI=4.14
// console.log(Math.PI);

/**
 * Output:- 3.141592653589793
3.141592653589793
So we can not modify Math.PI value but why?
 */
// we have a prototype called getOwnPropertyDescriptor() by this we can see all the properties are set on the property of that object

const properties=Object.getOwnPropertyDescriptor(Math,"PI")
//console.log(properties);
/**
 * Output:- {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
 */

//Here we can see that PI has a property of writable false that's why we can not modify it's value

// How to change this descriptors?

// Object.defineProperty(Math,"PI",{
//     writable:true
// })
//console.log(Object.getOwnPropertyDescriptor(Math,"PI"))
/***
 * Output:- Object.defineProperty(Math,"PI",{
       ^
TypeError: Cannot redefine property: PI

Here it gives an error that we can not redefine the property as it is disabled by js developers because of the code security
But we can defineProperty of our custom objects. let's see
 */

const myObj={
    name:"BollyHop",
    instructor: "Ashish Singh",
    price: 5000
}

// console.log(Object.getOwnPropertyDescriptors(myObj));

/***
 * Output:- {
  name: {
    value: 'BollyHop',
    writable: true,
    enumerable: true,
    configurable: true
  },
  instructor: {
    value: 'Ashish Singh',
    writable: true,
    enumerable: true,
    configurable: true
  },
  price: { value: 5000, writable: true, enumerable: true, configurable: true }
}
 */

//Now change the property instructor that nobody rewrite it's value

Object.defineProperty(myObj,"instructor",{
    writable:false
})
// It change the writable property of instructor. means we can not rewrite it's property
console.log(Object.getOwnPropertyDescriptor(myObj,"instructor"));
//
//Here try to rewrite the value but it did not happend.
myObj.instructor="Rahul Das"
console.log(myObj.instructor);



