// make program that calculate a factorial of any number...
let a = 8;
function factorial(number){
    let arr = Array.from(Array(number + 1).keys())
    let c = arr.slice(1,).reduce((a,b) => a*b) 
    return c
}
console.log(factorial(a))
