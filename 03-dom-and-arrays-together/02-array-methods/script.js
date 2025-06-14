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

//HARD Tasks
//1. CLearing any exisiting content

const productLists = document.getElementById('product-list');
productLists.innerHTML = '';

//2 . Iterate over entire array and rest processes

products.forEach(product =>{
    //3. Create li element
    const li = document.createElement('li');

    //4. Create and append h3 & p
    const h3 = document.createElement('h3');
    h3.textContent = product.name;
    li.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = `$${product.price}`;
    li.appendChild(p);

    //5. Conditionally adding a class
    if(!product.inStock){
        li.classList.add('out-of-stock')
    }
    // Add category class

    const categoryClass = `category-${product.category.toLocaleLowerCase().replace(' ', '-')}`;
    li.classList.add(categoryClass);

    //6. Append to the list
    productLists.appendChild(li);
});

    //7.BONUS
    const totalVal = products
        .filter(product => product.inStock)
        .reduce((sum, product) => sum + product.price, 0);

    // Total Display element
    const totaDiv = document.createElement('div');
    totaDiv.className = 'total-value';
    totalDiv.textContent = `Total value In Stock is $${totalVal}`;

    //Inserting after the product list
    productLists.parentNode.insertBefore(totalDiv, productLists.nextSibling);