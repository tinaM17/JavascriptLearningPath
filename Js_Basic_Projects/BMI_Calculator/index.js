const form=document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    //console.log(height);
    const weight=parseInt(document.querySelector('#weight').value)
    //console.log(weight);
    const result=document.querySelector('.result')
    if(height===null || height<=0 || isNaN(height)){
        result.innerHTML="<span>Please enter a valid Height</span>"
    }
    else if(weight===null || weight<=0 || isNaN(weight)){
        result.innerHTML="<span>Please enter a valid Weight</span>"
    }
    else {
        const bmi=(weight/((height*height)/10000)).toFixed(1)
        result.innerHTML=`<span>BMI:-${bmi}</span>`
        if(bmi<=18.4){
           // result.appendChild(document.createTextNode("You are underwight"))
          const span=document.createElement('span')
          span.innerHTML= "You are underwight"
          span.style.backgroundColor='rgba(255, 255, 0, 0.687)'
          result.append(span)
        
        }
        else if(bmi>=18.5 && bmi<=24.9){
            //result.appendChild(document.createTextNode("You have a normal bmi"))  
            const span=document.createElement('span')
          span.innerHTML= "You have a normal bmi"
          span.style.backgroundColor='rgb(5, 157, 5)'
          result.append(span)
        }
        else if(bmi>=25.0 && bmi<=39.9){
           // result.appendChild(document.createTextNode("You are overweight"))  
            const span=document.createElement('span')
          span.innerHTML= "You are overweight"
          span.style.backgroundColor='orange'
          result.append(span)
        }
        else {
          //  result.appendChild(document.createTextNode("You are obese!!! Please lose weight!!!"))   
          const span=document.createElement('span')
          span.innerHTML= "You are obese!!! Please lose weight!!!"
          span.style.backgroundColor='rgb(198, 47, 47)'
          result.append(span)
        }
    
    }
})