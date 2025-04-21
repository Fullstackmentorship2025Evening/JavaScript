"client"

// Arthematic
// Addition
// let x = 22;
// let y = 32;
// let add = x+y
// console.log(`wadarta xisaabtani oo ah ${x} + ${y} =  ${add}`)

// Substraction
// let a = 70
// let b = 50;
// let sub = a -b;
// console.log(`wadarta xisaabtani oo ah ${a} - ${b} =  ${sub}`)
// Multiplication
// let c = 5
// let d = 5
// let multi = c*d
// console.log(`wadarta xisaabtani oo ah ${c} x ${d} =  ${multi}`)
// Division
// let e = 12
// let f = 3
// let div = e/f
// console.log(`wadarta xisaabtani oo ah ${e} / ${f} =  ${div}`)
// Comparisons
// Greather then
// let num1 = 5
// let num2 = 4
// let Greather = num1 > num2;
// console.log(`the num1 ${num1} is a greather then num2 ${num2} = ${Greather}`);
// Greather then or equal
// let num01 = 5
// let num02 = 5
// let greatherOrEqual = num01 >= num02
// console.log(`the Greather or Equal ${num01} and ${num02} is = ${greatherOrEqual}`);

// ===
// let pass1 = 4466
// let pass2 = 4465
// let result2 = pass1 === pass2;
// console.log(result2);
// Equal ==
// let price1 = 10;
// let price2 = 11;
// let result3 = price1 == price2
// console.log(result3);

// Logic 

// And && 
let a = 5
let b = 6
let result = a>b && b>a;
console.log(result)

let c = 7;
let d = 8;
let result2 = c>d && d<c;
console.log(result2)

// OR ||
let x = 9;
let y = 3
let resul4 = x<y || x>y;
console.log(resul4);

// Not !
let {username,email,password} =req.body
if (!username || !email || !password){
      console.log('Fadlan Buuxi meelaha banan')
}
