//A function must be called or invoked for the function to perform.
//Parameters are the names listed in the function's definition.
//Arguments are the actual values passed to the function when it is invoked.
//Function hoisting is calling a function before it is declared.
build("mansion");

function build(house) {
    console.log("Let's construct a " + house + "!");
}

//Global scope is where a varibale is declared outside a function/block
let y = "the greatest";

function myCar() {     //Has no parameters
    console.log("This is " + y + " vehicle" );
    console.log(y);
}

myCar("GTRS3"); //Has only one arguement.
console.log(y);

//Function scope is here a variable is called withina function and printed inside the function.
function getCountry(name) {
    var z = "He is"
    console.log("My country is " + name);
    console.log(z + " from " + name + "!");
    console.log(z);
}

getCountry("Kenya");

//lexical scoped is where nested functions have access to variables declared in their outer scope function
function biggestPlanet(planet) {
    var x = 20;
    console.log('The biggest planet is ' + planet);
    console.log(x);

    function yaNdani() {
        console.log(x);
    }
    
    yaNdani();
}

biggestPlanet('Saturn'); //Arguement is Saturn.
biggestPlanet('Earth');  //Arguement is Earth.


//Block scoped variable is declared inside a block and printed inside it
if(true) {
    let x =50;
    console.log(x);
}

//A function expression is defining a function and assigning it to a variable. They are not hoisted.
let leave = function(name) {
    console.log("He is leaving " + name);
}

leave("Africa");

//The return statement is used to send a result back from a function to the place where it was called. 
//The multiply function returns the product of x and y, which is then stored in the marks variable.
function multiply(num1, num2) {
    return num1 * num2;
}

let marks = multiply(2, 5);
console.log(marks);

function add(a, b) {  // 'a' and 'b' are parameters
    return a + b;
}

let sum = add(5, 3);  // '5' and '3' are arguments
console.log(sum);     // Output: 8