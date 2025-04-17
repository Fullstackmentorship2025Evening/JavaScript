function greatMessage(message){
      return `waad salaamantihin ${message}`;
}
console.log(greatMessage("Ardayda Sharafta"))

function add(){
      console.log(2+2)
}
add()




// Arrow FAT Arrow
let students = [
      "Cabdiramaan",
      "Cabdiis",
      "Sumaya",
      "Ahmed",
      "Raxma",
      "Saafi",
      "Bahja",
      "Khaalid",
      "Cabdilaahi"
]
const getStudents = ()=>{
     for(let i=5; i<=students.length; i++){
              console.log(students[i])
     }    
}
console.log(getStudents())