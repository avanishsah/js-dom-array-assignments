const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 150, inStock: false },
    { id: 3, name: "The Great Gatsby", category: "Books", price: 15, inStock: true },
    { id: 4, name: "Coffee Maker", category: "Home Goods", price: 60, inStock: true },
    { id: 5, name: "To Kill a Mockingbird", category: "Books", price: 12, inStock: false },
    { id: 6, name: "Smart Watch", category: "Electronics", price: 250, inStock: true },
];

//EASY TASK
const productList = document.getElementById('product-list');

// 1. Map to array of <li> strings
const productItem = products.map(product => `<li>${product.name}</li>`)

// 2. Set innerHTML
productList.innerHTML = productItem.join('');

//Medium Task
function renderInStockProducts(){
    //1. Filter in-stock products
    const inStockProducts = products.filter(product => product.inStock);

    //2. Create list item strings
    const productItems = inStockProducts.map(product => `
        <li class="product-item">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
        </li>    
    `);

    //3. Render to DOM
    productList.innerHTML = productItems.join('');

}
