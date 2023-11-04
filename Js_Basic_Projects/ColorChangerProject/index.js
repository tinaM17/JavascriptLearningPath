
const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')
buttons.forEach((button)=>{
  button.addEventListener('click',(e)=>{
     // console.log(e.target)
      body.style.backgroundColor=`${e.target.id}`
      body.style.color='black'
      if(e.target.id==='black'){
        body.style.color="#ffff";
      }
  })
})