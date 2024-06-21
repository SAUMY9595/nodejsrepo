const request = fetch("https://dummyjson.com/products");

request.then((result) => {
    const convertData = result.json();
    convertData.then((data) => {
        console.log(data);
        renderUI(data.products);
        setupSearch(data.products);
    });
}).catch((error) => {
    alert(error);
});

const root = document.getElementById('root');

const renderUI = (products) => {
    root.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = "product-card";
        card.innerHTML = `
            <h3>${product.title}</h3>
            <p>${product.price}</p>`;
        root.appendChild(card);
    });
};

const setupSearch = (products) => {
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', (event) => {
        const searchQuery = event.target.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(searchQuery)
        );
        renderUI(filteredProducts);
    });
};