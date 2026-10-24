// make a program that generate a unique name of the business.

let rand = Math.random()
let first , second , thired;

/* Adjectives:
Crazy 
Amazing
Fire

Shop name:
Engine
Foods 
Garments

Another words:
Bros
Limited
Hub
*/

if (rand < .33){
    first = "Crazy"
}
else if (rand < .66 && rand >= .33){
    first= "Amazing"
}
else {
    first="Fire"
}

rand = Math.random()

if (rand < .33){
    second = "Engine"
}
else if (rand < .66 && rand >= .33){
    second= "Foods"
}
else {
    second="Garments"
}

rand = Math.random()

if (rand < .33){
    thired = "Bros"
}
else if (rand < .66 && rand >= .33){
    thired= "Limited"
}
else {
    thired="Hub"
}

console.log(`${first} ${second} ${thired}`)