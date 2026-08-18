// Product Data with Authentic BD Fish Images
const products = [
    {
        id: 1,
        name: "Deshi Rui Fish (Large)",
        weight: "Size: 1.5kg - 2.5kg",
        image: "https://fishmart.com.bd/wp-content/uploads/2026/01/large_kata_rui-150x150.jpg",
        badge: "Best Seller"
    },
    {
        id: 2,
        name: "Fresh River Ayre Fish",
        weight: "Size: 1kg - 2kg",
        image: "https://fishmart.com.bd/wp-content/uploads/2026/01/Ayre-Fish-1.5kg-720tk-per-kg-1-150x150.jpg",
        badge: "Fresh"
    },
    {
        id: 3,
        name: "Premium River Big Fish",
        weight: "Fresh from the Padma river",
        image: "https://fishmart.com.bd/wp-content/uploads/2026/02/river-big-fish.webp",
        badge: "Local"
    },
    {
        id: 4,
        name: "Fresh Sea Shrimp (Golda)",
        weight: "Size: Medium to Large",
        image: "https://fishmart.com.bd/wp-content/uploads/2026/02/shrimp.webp",
        badge: "Popular"
    },
    {
        id: 5,
        name: "Deshi Koi Fish",
        weight: "Live Deshi Koi",
        image: "https://fishmart.com.bd/wp-content/uploads/2026/01/Deshi-koi-1kg-750tk-copy-2-150x150.jpg",
        badge: ""
    },
    {
        id: 6,
        name: "Katol Fish",
        weight: "Size: 2kg - 4kg",
        image: "https://fishmart.com.bd/wp-content/uploads/2026/01/Katol-800800-1-1-150x150.webp",
        badge: "Fresh"
    },
    {
        id: 7,
        name: "Mixed Small Fish",
        weight: "Fresh deshi small fish",
        image: "https://fishmart.com.bd/wp-content/uploads/2026/02/small-fish.webp",
        badge: ""
    },
    {
        id: 8,
        name: "Premium Padma Hilsha (Ilish)",
        weight: "Size: 1kg - 1.2kg",
        image: "https://fishmart.com.bd/wp-content/uploads/2026/01/271a88_eb0a79cfa1c04a5aa9459f10f9a0c50a-150x150.jpg",
        badge: "Premium"
    }
];

// Configuration
const whatsappNumber = "8801600000000"; // Placeholder BD number

// Function to render products
function renderProducts() {
    const grid = document.getElementById('products-grid');
    
    products.forEach(product => {
        // Create the WhatsApp message
        const message = encodeURIComponent(`Hello FishBasket, I would like to order "${product.name}" (${product.weight}). Could you let me know the price and delivery details?`);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

        // Replace small thumbnail URLs with larger ones if possible for better quality
        let imgUrl = product.image.replace('-150x150', '');

        const badgeHtml = product.badge ? `<div class="product-badge">${product.badge}</div>` : '';

        // Create card HTML
        const cardHTML = `
            <div class="product-card">
                ${badgeHtml}
                <img src="${imgUrl}" alt="${product.name}" class="product-image" loading="lazy">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-weight">${product.weight}</p>
                    <a href="${whatsappUrl}" target="_blank" class="btn btn-whatsapp">
                        <i class="fa-brands fa-whatsapp"></i> Order on WhatsApp
                    </a>
                </div>
            </div>
        `;
        
        grid.innerHTML += cardHTML;
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
