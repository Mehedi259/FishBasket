// Product Data with Authentic BD Fish Images
const products = [
    {
        id: 1,
        name: "Deshi Rui Fish",
        weight: "Size: 1.5kg - 2.5kg",
        image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=800&q=80",
        badge: "Best Seller"
    },
    {
        id: 2,
        name: "Fresh River Ayre Fish",
        weight: "Size: 1kg - 2kg",
        image: "https://images.unsplash.com/photo-1511247012975-f37b12d3d0c3?auto=format&fit=crop&w=800&q=80",
        badge: "Fresh"
    },
    {
        id: 3,
        name: "Padma Hilsha (Ilish)",
        weight: "Size: 1kg - 1.2kg",
        image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=800&q=80",
        badge: "Premium"
    },
    {
        id: 4,
        name: "Fresh Sea Shrimp (Golda)",
        weight: "Size: Medium to Large",
        image: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=80",
        badge: "Popular"
    },
    {
        id: 5,
        name: "Deshi Koi Fish",
        weight: "Live Deshi Koi",
        image: "https://images.unsplash.com/photo-1580482594056-ed873d63b27b?auto=format&fit=crop&w=800&q=80",
        badge: ""
    },
    {
        id: 6,
        name: "Katol Fish",
        weight: "Size: 2kg - 4kg",
        image: "https://images.unsplash.com/photo-1534057308991-b3b3e4fd38ea?auto=format&fit=crop&w=800&q=80",
        badge: "Fresh"
    },
    {
        id: 7,
        name: "Mixed Small Fish",
        weight: "Fresh deshi small fish",
        image: "https://images.unsplash.com/photo-1627945037926-e13d9cf4bb46?auto=format&fit=crop&w=800&q=80",
        badge: ""
    },
    {
        id: 8,
        name: "Premium Sea Bass",
        weight: "Fresh Catch",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
        badge: "Ocean"
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

        const badgeHtml = product.badge ? `<div class="product-badge">${product.badge}</div>` : '';

        // Create card HTML
        const cardHTML = `
            <div class="product-card">
                ${badgeHtml}
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
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
