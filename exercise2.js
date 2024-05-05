//function celsiusToFahrenheit(celsius) {
  //  fahrenheit = (celsius * 9/5) + 32 ;
    //return fahrenheit ;  
//}

//function fahreinheitToCelsius(fahreinheit){
    //celsius = (fahrenheit - 32) *5/9 ;
    //return celsius ;
//}
//console.log(celsiusToFahrenheit(60)) ;
//console.log(fahreinheitToCelsius(140)) ;

//let number = 7 ;
//if(number %2 == 0){
   // console.log("The number is even")
//}
//else {
  //  console.log("The number is odd")
//}

//const number = 10 // modulo -> sisa bagi // n % 2 = 0 (even number)

//const result = number % 2 //0

//console.log(result == 0 ? "even number" : "odd number")

//function isPrime(n) {
    //if(n < 2)
    //return `${n} is not a prime`

    //for (let i = 2 ; i < n ; i++) {

     //if(n % i === 0){
       //return `${n} is not a prime number`  
    //}
//}
  //  return `${n} is a prime number`
//}

//console.log(isPrime(6));

let number = 7
let pembagi = 0 // 2
for(let i = 1; i <= number; i++) { // 1, 2, 3, 4, 5, 6, 7
if (number % i === 0) {
    pembagi++
}
}
console.log(pembagi == 2 ? "prime number" : "not prime")


function sum (a,b,c,d,e) {
    return a + b + c + d + e ;
}

function sum (a,b,c) {
    return a + b + c ;
}
console.log(sum(1,2,3))

//let n = 5
//let result = 0
//for (let i = 1; i <= n; i++){
   // result += i // result = result + i // 1
//}
//console.log(result)


function sum(a,b,c,d,e,f){
    return a * b * c * d * e * f ;
}
console.log(6*5*4*3*2*1)

//let n = 6 
//let result = 1
//for (let i = n ; i > 0 ; i--) {
  //  result *= i
//}
//console.log(result)

// 0 1 1 2 3 5 8 13 21 34

let n = 15 // 610
let a = 0
let b = 1
let nextNumber = 0

for (let i = 1; i < n; i++){
    nextNumber = a + b
    a = b
    b = nextNumber
}

console.log(b)