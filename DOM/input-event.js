const formController = document.getElementById("form-controller");
const inputController = document.getElementById("input-controller");
const lists = document.getElementById("lists");


formController.addEventListener('click',(e)=>{
      e.preventDefault()
      if(inputController.value === ""){
            return
      }else{
            inputController.value
            let p = document.createElement("p")
            p.innerHTML = inputController.value
            lists.appendChild(p)
            p.classList.add("text-green-600")
      inputController.value = ""
      }
})