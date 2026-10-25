let p = [2,6,3,7]

// for (let index = 0; index < p.length; index++) {
//     const element = p[index];
//     console.log(element)
// }

// p.forEach((value, index, p) => {
//     console.log(value, index, p)
// });

// let a = { 
//     "a":"1",
//     "b":"2",
//     "c":"3"
// }

// only use for objects...

// for (const key in a) {
//     if (Object.prototype.hasOwnProperty.call(a, key)) {
//         const element = a[key];
//         console.log( key,element)
//     }
// }

// use for array

for (const element of p) {
    console.log(element)
}