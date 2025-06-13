// ADD PORDUCTS
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 150, inStock: false },
    { id: 3, name: "The Great Gatsby", category: "Books", price: 15, inStock: true },
    { id: 4, name: "Coffee Maker", category: "Home Goods", price: 60, inStock: true },
    { id: 5, name: "To Kill a Mockingbird", category: "Books", price: 12, inStock: false },
    { id: 6, name: "Smart Watch", category: "Electronics", price: 250, inStock: true },
];

//EASY
// 1. Filter in-stock products
const inStockProducts = products.filter(product => product.inStock);
console.log("In-stock products:", inStockProducts);

// 2. Filter book products
const bookProducts = products.filter(products => products.category === "Books");
console.log("Book products:" , bookProducts);

//MEDUIM
// 1. Map product names
const productNames = products.map(product => product.name);
console.log("Product name:", productNames)

// 2. Map formatted product strings
const formattedProducts = products.map(product => `${product.name} - $${product.price}`);
console.log("Formatted products :", formattedProducts);

// Hard Tasks
// 1. Reduce to calculate total price
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log("Total price of all products:", totalPrice);

// 2. Chain filter and map for electronics in stock
const inStockElectronics = products
  .filter(product => product.category === "Electronics" && product.inStock)
  .map(product => product.name);
console.log("In-stock electronics:", inStockElectronics);