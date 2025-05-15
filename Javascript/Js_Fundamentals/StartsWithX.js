/*
 Your Goal: Complete the Function

    Complete the startsWithX function to determine if the first character of the string argument is the lower-case x.
    If the first character is x return true. If not, return false.

console.log( startsWithX("x") ); // true
console.log( startsWithX("zyx") );  // false

    Let's examine some
    */
function startsWithX(string) {
  if (string.charAt(0) === "x") {
    //stirng[0]==="x"
    return true;
  }
  return false;
}

module.exports = startsWithX;
