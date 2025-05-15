// Multiple Variables
/*  Your Goal: Create two equal variables

    Create two variables a and b with the same value in each. Similar to the example above, you can first declare a and then set b equal to a.
 */

/*
    TEST CASE
    const assert = require('assert');
const {a,b} = require('../index');

it('a and b should be equal', () => {
    assert.equal(a,b);
});

*/
const a = 14;
const b = a;

module.exports = { a, b };
