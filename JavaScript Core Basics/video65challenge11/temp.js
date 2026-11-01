// let a = [1,2,3,4,5,6]

// const red = (e,f)=>{
//     return(e*f)
// }
// console.log(a.reduce(red))

// let p = prompt("Enter any number to calculate factorial.")


let p = 4;
function fun(number){
    let f = 1;
    for (let index = 1; index <= number; index++) {
        f = f * index;
        
    }
    return f
}

console.log(fun(p))