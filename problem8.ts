{
  type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number | undefined;
  };

  const calculateTotalPrice = (products: Product[]) => {
    let total = 0;

    products.forEach((product: Product) => {
      const { name, price, quantity, discount = 0 } = product;
      if (
        typeof name === "string" &&
        typeof price === "number" &&
        typeof discount === "number" &&
        typeof quantity === "number"
      ) {
        const discountedPrice = price - (price * discount) / 100;
        total += discountedPrice * quantity;
      } else {
        throw new Error(`Invalid Data type`);
      }
    });

    return total;
  };

  const products = [
    { name: "Pen", price: 10, quantity: 2 },
    { name: "Notebook", price: 25, quantity: 3, discount: 10 },
    { name: "Bag", price: 50, quantity: 1, discount: 20 },
  ];

  console.log(calculateTotalPrice(products));
}
