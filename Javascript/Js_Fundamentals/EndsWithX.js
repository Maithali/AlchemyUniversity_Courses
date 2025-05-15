/*
 Your Goal: Complete Ends With X

Complete the endsWithX function by detecting if the last character in the string is a lower-case x or an upper-case X. Return true if the last character is either lower-case x or upper-case X, false otherwise.

    This is a tough one, but you can do it! If you get stuck remember you can use console.log to log any variables to the output.
*/

function endsWithX(string) {
  if (string[string.length - 1].toLowerCase() === "x") {
    return true;
  }
  return false;
}

module.exports = endsWithX;
