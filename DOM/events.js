const increment = document.querySelector('#increment');
const decrement = document.querySelector('#decrement');
const count = document.querySelector('#count')
const p = document.querySelector('p')

let counter = 0

increment.addEventListener('click',function(){
     counter++
      count.innerHTML = counter
      if(counter  === 5*5+5/5-5){
            p.innerHTML = `5*5+5/5-5 = ${counter}`
      }
      // if(counter ===10){
      //       p.innerHTML = `5*5+5/5-5 = 21` 
      // }else if (counter ===11){
      //       p.classList.add('hidden')
      // }else if(counter ===20){
      //       document.body.classList.add('bg-red-500')
      // }else if(counter ===21){
      //       document.body.classList.remove('bg-red-500')
      // }
})



decrement.addEventListener('click',function(){
      counter--
       count.innerHTML = counter
       if(counter ===9){
            p.classList.add('hidden')
       }
      
 })


