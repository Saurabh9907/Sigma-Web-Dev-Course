console.log("write a grogram print the marks of student using the js object creation.")

const obj = {
    "Saurabh":"100",
    "Aakash":"101",
    "Rohit":"102"
}

for (const key in obj) {
    const element = obj[key]
    console.log(key, element)
}