document.addEventListener('DOMContentLoaded', () => {
    // Code to toggle mobile menu or any other script related to the navbar
    console.log('DOM fully loaded and parsed');

    // Ensure the search input exists before adding the event listener
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim(); // Trim whitespace from the query
            if (query) { // Only fetch if the query is not empty
                fetchDataWithSpinner(query); // Fetch products with spinner
            }
        });
    }

    // Initial fetch to display some products
    fetchProducts();
});

function fetchProducts(query = '') {
    fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.products && data.products.length > 0) {
                displayProducts(data.products);
            } else {
                console.log('No products found');
                // Optionally, clear the container or show a "no products found" message
                const container = document.getElementById('cardContainer');
                if (container) {
                    container.innerHTML = '<p>No products found.</p>';
                }
            }
        })
        .catch(error => console.error("Failed to fetch products:", error));
}

function showLoadingSpinner() {
    const spinner = document.createElement('div');
    spinner.className = 'spinner';
    document.body.appendChild(spinner);
}

function removeLoadingSpinner() {
    const spinner = document.querySelector('.spinner');
    if (spinner) {
        document.body.removeChild(spinner);
    }
}

function fetchDataWithSpinner(query) {
    showLoadingSpinner();
    fetchProducts(query).finally(removeLoadingSpinner);
}

function displayProducts(products) {
    const container = document.getElementById('cardContainer');
    if (container) {
        container.innerHTML = ''; // Clear previous results

        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <p>Price: ${product.price}</p>
            `;
            container.appendChild(card);
        });
    }
}