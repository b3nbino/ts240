interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const products: Product[] = [
  {
    // Let's just simply assume product id is same as the index of the product in the products array
    id: 0,
    name: "Sample Product",
    price: 49.99,
    description: "A sample product for demonstration",
  },
];

type UpdateableProductFields = Partial<Omit<Product, "id">>;

function updateProduct(
  productId: number,
  updatedValues: UpdateableProductFields
): void {
  let currProduct = products.filter(product => product.id === productId)[0];

  if(currProduct !== undefined) {
    products[productId] = {...currProduct, ...updatedValues};
  } else {
    console.log("Product not found.")
  }
}

updateProduct(0, {
  name: "Updated Product Name",
  price: 99.99,
});