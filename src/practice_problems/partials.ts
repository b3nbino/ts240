export {}

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
  let product = products[productId];

  if(product) {
    products[productId] = { ...product, ...updatedValues };
  } else {
    console.log("Product not found");
  }
}

updateProduct(0, {
  name: "Updated Product Name",
  price: 99.99,
});