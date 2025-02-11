// Task 1
let products = [
    {name: "Laptop", price: 1200, category: "Electronics" },
    {name: "Phone", price: 800, category: "Electronics" },
    {name: "Desk Chair", price: 150, category: "Furniture" },
    {name: "Notebook", price: 1200, category: "Stationery" },
    {name: "Headphones", price: 1200, category: "Electronics" },
];

function getProductByCategory(product, category) {
    return products.filter(product => product.category ===category);
}

console.log(getProductByCategory(products, "Electronics"));


//Task 2
function applyDiscount(products, discountRate) {
    return products.map (product => ({
        ...product,
        price: product.price - (product.price * discountRate)
    }))
}

console.log(applyDiscount(products, 0.1));