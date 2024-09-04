//If-else statements are used to execute code conditionally based on whether an expression evaluates to true or false.
function getScore(mark) {
    if (mark > 10) {
        return "Pass";
    } else if (mark < 10) {
        return "Fail"
    } else {
        return "Zero"
    }
}
  
console.log(getScore(12));
console.log(getScore(3));
console.log(getScore(0));