import calculatePizzaPrice from './calculatePizzaPrice';

export default function calculateOrderTotal(order, pizzas) {
  return order.reduce((runningTotal, singleOrder) => {
    const pizza = pizzas.find((za) => za.id === singleOrder.id);
    console.log(pizza.price);
    return runningTotal + calculatePizzaPrice(pizza.price, singleOrder.size);
  }, 0);
}
