// helloWorld function 
// const helloWorld = function() {
//     return "Hello, World!";
// }

// function sayHello(input) {
//     if (input === "Alex") {
//         return "Hello, Alex!"
//     }else if (input === "Pat") {
//         return "Hello, Pat!"
//     } else {
//         return "Hello, Jane!"
//     }
// }

function sayHello(input) {
    if (typeof input === "string") {return "Hello, " + input + "!"
    } else if (typeof input === "boolean") {
        return "Hello, World!"
    } else {
        return "Hello, World!"
    }
}

