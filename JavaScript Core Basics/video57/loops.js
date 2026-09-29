console.log("hello world")

/*
for (let i=0; i<10; i++){   // for loop consists of 3 parts: initialization, condition, and increment/decrement 
    console.log(i+1);  // prints numbers from 1 to 10   
}

const Obj = {
    name:"Saurabh",
    id : "23",
    age : "21"
}
 
for (let key in Obj){    // for in loop is used to iterate over the properties of an object.
    const element=Obj[key];
    console.log(key,element ); // prints key and value of object
}

for (let letter of "Saurabh"){
    console.log(letter);  // for of loop is used to iterate over iterable objects like strings, arrays, etc.
    // prints each letter of the string "Saurabh"

}
*/

let a=2;
while(a<6){
    console.log(a);  // while loop is used to execute a block of code as long as the condition is true.
    a++; // increments a by 1
}
console.log("while loop ended") // prints "while loop ended" after the while loop ends 


let i = 0;
do {
    console.log(i);
    i++;  // do while loop is similar to while loop but it executes the block of code at least once before checking the condition.
} while(i<8); // prints numbers from 0 to 7

console.log("do while loop ended") // prints "do while loop ended" after the do while loop ends.








for(let key of "prajapati"){
    console.log(key);
}