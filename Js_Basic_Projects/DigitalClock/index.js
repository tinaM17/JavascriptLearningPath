const clock=document.getElementById('clock')

setInterval(()=>{
   const date=new Date()
   console.log(date.toLocaleTimeString());
   clock.innerHTML=`<span>${date.toLocaleTimeString()} ${date.getHours() >=12 ? 'pm':'am'}</span>`;
},1000)
