// Dates
//IN JS 'Date' is an Object


let myDate = new Date();


console.log(myDate.toString()); //Ye Date object ko a readable string format mein convert karta hai, jisme date, time aur local timezone information hoti hai.
console.log(myDate.toDateString());//this method show only date in string form
console.log(myDate.toISOString());//This JavaScript statement(Method) converts a Date object into an ISO 8601 formatted string and prints it to the console.
console.log(myDate.toJSON());//Date object ko JSON-compatible string mein convert karta hai.
console.log(myDate.toLocaleDateString());//Ye Date object ko local language/region ke date format mein convert karta hai.
console.log(myDate.toLocaleString());//Ye Date object ko local date aur time format mein convert karta hai.
console.log(myDate.toLocaleTimeString());//Ye Date object se sirf time extract karke local time format mein display karta hai.
console.log(myDate.toTimeString());//Ye Date object se time ko human-readable string format mein return karta hai.
console.log(myDate.toUTCString());//Ye Date object ko UTC (Coordinated Universal Time) format mein convert karke string return karta hai.



//Specific Date

let myCreatedDate = new Date(2026, 0, 23)
console.log(myCreatedDate.toDateString());



let myCreatedDates = new Date(2026, 0, 23, 7, 57)
console.log(myCreatedDates.toLocaleString());

let myCreateDate = new Date("2026-01-15")
console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());




newDate.toLocaleString('default', {
    weekday: "long"
}) 