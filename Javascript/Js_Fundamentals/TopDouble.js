/*
 Your Goal: Complete the Top Double

    Using whichever loop you'd like, complete the top double function to find the largest double for the value that is below the top.

    This one is a bit tricky! You might double the value before realizing it is larger than top. You'll need to go back and return the value before that value that exceeds the top.
*/
function topDouble(value, top) {
  while (value * 2 <= top) {
    value *= 2;
  }

  return value;
}

module.exports = topDouble;