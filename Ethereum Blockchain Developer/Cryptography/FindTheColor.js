/*
 Your Goal: Find the Color

Given a SHA256 hash, find the color input that would generate that hash. You can assume that all the hashes be generated only from colors provided in the COLORS array.

    To take the hash of a color, first use utf8ToBytes to translate the string to bytes. Then, use sha256 to hash it.
    When you want to compare two hashes, first use toHex to turn each hash from a Uint8Array to a string of hexadecimal characters.

So comparing two hashes would look like this:

const a = "apple";
const b = "banana";

const aBytes = utf8ToBytes(a);
const bBytes = utf8ToBytes(b);

const aHash = sha256(aBytes);
const bHash = sha256(bBytes);

console.log(toHex(aHash) === toHex(aHash)); // true
console.log(toHex(aHash) === toHex(bHash)); // false

    Wondering what utf8 stands for? The UTF-8 standard translates all the possible keyboard characters you can think of into bytes. This is an agreed upon standard to ensure we all get the same bit values representing the letters and words we see on the screen. Learn more about utf8 here.
*/
const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ["red", "green", "blue", "yellow", "pink", "orange"];

// given a hash, return the color that created the hash'
function findColor(hash) {
  return COLORS.find((x) => toHex(sha256(utf8ToBytes(x))) === toHex(hash));
}

module.exports = findColor;