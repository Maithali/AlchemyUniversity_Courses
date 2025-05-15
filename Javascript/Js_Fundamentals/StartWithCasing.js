/*
 Your Goal: Handle x and X

Let's update our startsWithX function to return true for an upper-case X as well as a lower-case x.

Some examples!

console.log( startsWithX("Xylophones") ); // true
console.log( startsWithX("x") ); // true
console.log( startsWithX("spaceX") ); // false
*/

function startsWithX(string) {
  if (string.charAt(0).toLowerCase() === "x") {
    return true;
  }
  return false;
}

module.exports = startsWithX;
