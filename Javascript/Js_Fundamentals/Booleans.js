/*
 Your Goal: Create two boolean variables

Create two boolean variables a and b. Store true in one and false in the other.
*/
/* TEST CASE
const assert = require('assert');
const {a,b} = require('../index');

it('a should be boolean', () => {
    assert.equal(typeof a, 'boolean');
});

it('b should be boolean', () => {
    assert.equal(typeof b, 'boolean');
});

it('a should not equal b', () => {
    assert.notEqual(a,b);
});

*/
const a = true;
const b = false;
module.exports = { a, b };
