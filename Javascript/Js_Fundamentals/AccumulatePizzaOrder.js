/*
Given an array of pizza orders, return the total number of pizzas ordered.

The orders are an array of objects, each with pizzas key inside:

const orders = [
    { pizzas: 3 },
    { pizzas: 5 },
    { pizzas: 10 }
];
*/
function numberOfPizzas(orders) {
  let total = 0;
  for (let i = 0; i < orders.length; i++) {
    total += orders[i].pizzas;
  }
  return total;
}

module.exports = numberOfPizzas;
