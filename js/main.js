// Product Data
const products = [
    {
        id: 1,
        name: "Fresh Atlantic Salmon",
        description: "Premium quality, sustainably farmed Atlantic Salmon. Rich in Omega-3 and perfect for grilling, baking, or sashimi.",
        image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        name: "Dutch Herring (Hollandse Nieuwe)",
        description: "Traditional delicacy from the Netherlands. Mildly salted, raw herring served in the classic Dutch style.",
        image: "https://images.unsplash.com/photo-1627945037926-e13d9cf4bb46?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 3,
        name: "Premium White Cod",
        description: "Flaky, tender, and mild-flavored North Sea Cod. Ideal for classic fish and chips or pan-seared dishes.",
        image: "https://images.unsplash.com/photo-1511247012975-f37b12d3d0c3?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 4,
        name: "Fresh Sea Bass",
        description: "Delicate, sweet flavor with a firm texture. Responsibly sourced and delivered at peak freshness.",
        image: "https://images.unsplash.com/photo-1580482594056-ed873d63b27b?auto=format&fit=crop&w=800&q=80",
    }
];

// Configuration
const whatsappNumber = "31600000000"; // Placeholder Netherlands number

// Function to render products
function renderProducts() {
    const grid = document.getElementById('products-grid');
    
    products.forEach(product => {
        // Create the WhatsApp message
        const message = encodeURIComponent(`Hello FishBasket, I am interested in buying the "${product.name}". Could you provide me with more details?`);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

        // Create card HTML
        const cardHTML = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-desc">${product.description}</p>
                    <a href="${whatsappUrl}" target="_blank" class="btn btn-whatsapp">
                        <i class="fa-brands fa-whatsapp"></i> Inquire to Buy
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
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
