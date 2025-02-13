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


//Task 3
let sales = [250, 400, 150, 900, 1200];
function calculateTotalRevenue(sales) {
    return sales.reduce ((total, sale)=>total+sale,0)
}
console.log('Total Rev. 2024: $${calculateTotalRevenue(sales)}')


//Task 4
let employee = { name: "John Doe", salary: 50000, position: "Manager"}:

function updateSalary(employee, percentageIncrease) {
    return employee.salary = employee.salary * percentageIncrease;
}
console.log


//Task 5
function findOrder(orders, orderId) {
    return orders.find(order => order.id === orderId);
}
let orders = [
    { id: 101, customer: "Alice", total: 300 },
    { id: 102, customer: "Bob", total: 450 },
    { id: 103, customer: "Charlie", total: 200 }
];
console.log(findOrder(orders, 102));


//Task 6
let inventory = {
    items: [],
    addItem(name, quantity) {
        this.items.push({ name, quantity });
    }
};
inventory.addItem("Monitor", 5);
inventory.addItem("Keyboard", 10);
console.log(inventory.items);


//Task 7
function findEmployee(employees, name) {
    return employees.find(employee => employee.name === name);
}
let employees = [
    { name: "Alice", position: "Developer", salary: 70000 },
    { name: "Bob", position: "Designer", salary: 60000 },
    { name: "Charlie", position: "Manager", salary: 90000 }
];
console.log(findEmployee(employees, "Charlie"));


//Task 8
function mergeOrders(orders1, orders2) {
    return [...orders1, ...orders2];
}
let orders1 = [
    { id: 1, customer: "Alice" },
    { id: 2, customer: "Bob" }
];
let orders2 = [
    { id: 3, customer: "Charlie" },
    { id: 4, customer: "David" }
];
console.log(mergeOrders(orders1, orders2));

