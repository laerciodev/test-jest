import Cart from "./Cart";

describe("Cart", () => {
  let cart;
  let product;

  beforeEach(() => {
    cart = new Cart();
  });

  fit("should return 0 when getTotal() is executed in a newly created instance", () => {
    const cart = new Cart();
    expect(cart.getTotal()).toEqual(0);
  });

  it("should multiply quantity and price and receive the total amount", () => {
    const item = {
      product: {
        title: "Adidas running shoes - men",
        price: 35388, // 353.88 | R$ 353,88
      },
      quantity: 2, // 707.76
    };

    cart.add(item);

    expect(cart.getTotal()).toEqual(70776);
  });

  it("should ensure no more than on product exists at a time", () => {
    add.product({
      product,
      quantity: 2,
    });

    add.product({
      product,
      quantity: 1,
    });
  });
});
