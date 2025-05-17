/*
 Your Goal: Add Transaction

Your goal is to implement the addTransaction function, which adds transactions to the mempool.

    Take the transaction sent to the function and push it on top of the mempool array.
*/
const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  // TODO: add transaction to mempool
  mempool.push(transaction);
}

function mine() {
  // TODO: mine a block
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
};
