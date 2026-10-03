console.log("Faulty calculator")
// that perform worang task of 10% persentage.
/* like
+== - 
* == +
- == /
/ == **
*/

let random = Math.random();
console.log(random)


let a = prompt("Enter first number")
let c = prompt("Enter opertion. ")
let b = prompt("Enter second number")

const obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if (random > 0.1 ){
    console.log(`the result is ${a} ${c} ${b}`);
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}