"use strict";
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
    let currProduct = products.filter(product => product.id === productId)[0];
    if (currProduct !== undefined) {
        products[productId] = Object.assign(Object.assign({}, currProduct), updatedValues);
    }
    else {
        console.log("Product not found.");
    }
}
updateProduct(0, {
    name: "Updated Product Name",
    price: 99.99,
});
