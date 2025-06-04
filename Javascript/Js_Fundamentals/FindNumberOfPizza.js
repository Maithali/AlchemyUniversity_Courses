/*
Find the number of pizzas in an order object.

The object will look like this:

const order = {
    pizzas: 3,
    extraCheese: true,
    deliveryInstructions: "Round the back, please!",
};
*/
function numberOfPizzas(order) {
  console.log(order.pizzas);
  return order.pizzas;
}

module.exports = numberOfPizzas;