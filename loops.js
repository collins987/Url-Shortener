//A for loop is used when you know in advance how many times you want to execute a statement or block of statements.

//for (initialization; condition; increment) {
    // Code to be executed
//}

for (let i = 1; i <25; i++) {  // counts student1 to student24.
    console.log("Student" + i);
}

for (let i = 0; i <=5; i++) {
    console.log("Car " + i);
}

//to display odd numbers between 1 & 5.
for (let i = 5; i >= 1; i--){
    if (i % 2 !== 0) console.log("Odd number " + i);
}
//A while loop executes a block of code as long as a specified condition is true. It’s useful when the number of iterations is not known in advance.

//while (condition) {
    // Code to be executed
//}

let i = 5;  //starting number is 5.
while(i < 20) {  //loops from 5 to 19.(condition)
    console.log(i);
    i++;  //increment.
}