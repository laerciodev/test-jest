import find from "lodash/find";

export default class Cart {
  items = [];

  add(item) {
    this.items.push(item);
  }

  getTotal() {
    return this.items.reduce(
      (acc, { quantity, product: { price } }) => acc + quantity * price,
      0
    );
  }
}
