/*
function smallerNumber(num1, num2) {
    if(num1 < num2){
       return num1;
    }else {
        return num2;
    }
}

module.exports = smallerNumber;
*/
const fakeName = require("./fakeName");

const message = `
    Hello, ${fakeName}! You left a package at the office today.
    You can pick up tomorrow at 10am, ${fakeName}. 
    If not I will drop it off this weekend.
    Goodbye ${fakeName}!
`;

module.exports = message;
