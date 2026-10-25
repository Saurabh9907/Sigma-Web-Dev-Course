//  Array initializing lookes like as...
let arr = [1,2,3,4,5,6,7,8]
//indexing 0,1,2,3,4,5,6,7
console.log(arr);

console.log(arr, typeof arr); // print array data type.

arr[0] = 234;

console.log(arr[0]);
console.log(arr[3]);
console.log(arr[6]);
console.log(arr[7]);

console.log(arr.toString()) // for the print a array in the form of string.
console.log(arr.join(" and ")) // for the space sapreated of the array elements.

console.log(arr.pop()) // for the pop at the last element of the arrary.
console.log(arr.push("saurabh")) // for the push at teh last element of the arrary.
console.log(arr)

console.log(arr.shift())  // for pop at the first element of the array.
console.log(arr.unshift("prajapati")) // for push at the first element of the array.
console.log(arr)

console.log(delete arr[0]) // for delete element fo the array.
console.log(arr) 
console.log(arr[0])

let g = "WORLD"
// console.log(g.from())
let p = [1,2,3,4]
let q = [5,6,7,8]
let r = [9,10,11,12]
console.log(p.concat(q,r));
let m = [6,8,3,6,2,9,1]
// let f = sort(m)
// console.log(m.sort())
console.log(m.splice(1,2,5,5)) // array se element nikalne or dalne ka kaam karti hai.
console.log(r.slice(1,3))  // array ke ander se given position se element ko retrive karti hai.
console.log(p.reverse()) // for reverse
