// First generate a random color

const randomColor= function(){
    const hex="0123456789ABCDEF"
    let color="#"

    for(i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}

//console.log(randomColor());

// Now add a event listener to start the setInterval() on the buttton click
let startInterval
const changeColor=function(){
    if(!startInterval){
        startInterval=setInterval(start,1000)
    }
}
const start=function(){
    document.body.style.backgroundColor=randomColor();
 }
document.getElementById('start').addEventListener('click',changeColor)

//Now we have to stop the color change on clicking the stop buttton
const stopColor=function(){
    clearInterval(startInterval)
    startInterval=null
}

//select the button
document.getElementById('stop').addEventListener('click',stopColor)