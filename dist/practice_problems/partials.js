"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products = [
    {
        // Let's just simply assume product id is same as the index of the product in the products array
        id: 0,
        name: "Sample Product",
        price: 49.99,
        description: "A sample product for demonstration",
    },
];
function updateProduct(productId, updatedValues) {
    let product = products[productId];
    if (product) {
        products[productId] = Object.assign(Object.assign({}, product), updatedValues);
    }
    else {
        console.log("Product not found");
    }
}
updateProduct(0, {
    name: "Updated Product Name",
    price: 99.99,
});
