console.log("This is string tutorial...")
let a = "Saurabh"

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);

// console.log(a[7]);
// this line print the length of a using a.length function ka use karke..
console.log(a.length);
console.log(`${a}`);

let real_name = "Saurabh"
let his_friend = "Aakash"

// there are two types of print variable with string.
console.log("His name is " + real_name + ". His friend name is " + his_friend + ".");
// string interpolation ${real_name}
console.log(`His name is ${real_name}. His friend name is ${his_friend}.`) // This is called Template literal.

let b = "Aakash"

console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);
console.log(b.slice(0,5));
console.log(b.slice(1));

console.log(b.replace("sh","233"));
console.log(b.concat( a , " bhanu", " ram", " shyam"));

console.log(b);