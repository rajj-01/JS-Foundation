//Stack (Primitive) & Heap (Non-Primitive)


let myName = "Raj";


let anoName = myName
anoName = "Rajj";

console.log(myName);
console.log(anoName);


let user1 = {
    email: "user@google.com",
    upi: "user@axis"
}

let user2 = user1;

user2.email = "rk7148@gmail.com"


console.log(user1.email);
console.log(user2.email);


