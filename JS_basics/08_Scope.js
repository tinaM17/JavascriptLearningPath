// let, var const
let name="Tina" // This is a global scope variable we access it throughout the program
if(true){
    let a=10;
    const b=20;
    var c=30;
}

//console.log(a); can not access block scope variable outside the block
// console.log(b); can not access block scope variable outside the block
console.log(c); //This variable is declared using var keyword, so only this variable is accessible outside the scope but it gives many error in the real world programming when many developers in a single project.
// That's why var is not recommended in real world program 

// Function inside a function

function outer(){
    const name="Tina"

    function inner(){
        const age=23
        console.log(`${name} age is: ${age}`);
    }
    inner();
    //console.log(age); This gives an error because age declared in inner() function scope so that's why we can not access it outside the block
}

outer();

// Function Expression

console.log(add(6));
function add(num){
    return num+1;
}

//console.log(minus(5));
// we can initialize a variable with a function but we can not invoke it before initialization so it gives an error
const minus=function subtract(num) {
    return num-1;
}

