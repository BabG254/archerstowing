// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
});

// Add scroll-based navbar background
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Service modal functionality
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function() {
        // Service detail modal logic here
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Blog functionality
const blogPosts = {
    nairobi: [
        {
            title: "24/7 Towing Services in Nairobi",
            excerpt: "Learn about our round-the-clock towing services in Nairobi...",
            image: "images/blog/nairobi-1.jpg"
        }
        // Add more posts
    ],
    mombasa: [
        // Mombasa posts
    ],
    kisumu: [
        // Kisumu posts
    ]
};

function filterBlogPosts(city) {
    const blogGrid = document.getElementById('blogGrid');
    const posts = blogPosts[city] || [];
    
    blogGrid.innerHTML = posts.map(post => `
        <div class="col-lg-4 col-md-6">
            <div class="blog-card">
                <img src="${post.image}" alt="${post.title}">
                <div class="blog-content">
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                    <a href="#" class="read-more">Read More</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize blog with Nairobi posts
document.addEventListener('DOMContentLoaded', () => {
    filterBlogPosts('nairobi');
});

// Chat functionality
const aiChatButton = document.getElementById('aiChatButton');
const chatModal = document.getElementById('chatModal');
const closeChat = document.getElementById('closeChat');
const userInput = document.getElementById('userInput');
const sendMessage = document.getElementById('sendMessage');
const chatBody = document.getElementById('chatBody');

// Initial welcome message
const welcomeMessage = `Hello! 👋 I'm your AutoAid Assistant. How can I help you today?
You can ask me about:
• Towing services
• Pricing
• Service areas
• Emergency assistance`;

// Open chat with welcome message
aiChatButton.addEventListener('click', () => {
    chatModal.style.display = 'flex';
    if (chatBody.innerHTML === '') {
        chatBody.innerHTML = `<div class="bot-message">${welcomeMessage}</div>`;
    }
});

closeChat.addEventListener('click', () => {
    chatModal.style.display = 'none';
});

// Prevent chat modal from closing when clicking inside
chatModal.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Send message functionality
function sendUserMessage() {
    const message = userInput.value.trim();
    if (message) {
        // Add user message
        chatBody.innerHTML += `<div class="user-message">${message}</div>`;
        userInput.value = '';

        // Generate bot response
        const response = generateResponse(message.toLowerCase());
        setTimeout(() => {
            chatBody.innerHTML += `<div class="bot-message">${response}</div>`;
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 500);
    }
}

// Handle send button click and Enter key
sendMessage.addEventListener('click', sendUserMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendUserMessage();
    }
});

// Simple response generation
function generateResponse(message) {
    if (message.includes('price') || message.includes('cost') || message.includes('charge')) {
        return `Our towing charges vary by distance and vehicle type:
        • 0-10 KM: KSH 5,000 - 5,500
        • 10-20 KM: KSH 6,000 - 6,500
        • 20-30 KM: KSH 8,000 - 9,000
        Would you like specific pricing for your vehicle type?`;
    }
    
    if (message.includes('location') || message.includes('area') || message.includes('where')) {
        return `We operate in major Kenyan cities including:
        • Nairobi
        • Mombasa
        • Kisumu
        • Thika
        • Muranga
        And surrounding areas. Where do you need assistance?`;
    }
    
    if (message.includes('emergency') || message.includes('help') || message.includes('stuck')) {
        return `For immediate assistance, please call us at:
        📞 +254 700 070 028
        Or click the emergency call button above.
        We're available 24/7!`;
    }
    
    if (message.includes('contact') || message.includes('reach')) {
        return `You can reach us through:
        📞 Phone: +254 700 070 028
        📧 Email: info@autoaidtowing.com
        📍 Location: Ground Floor Suite 3, June Heights, Agwings Kodhek`;
    }
    
    if (message.includes('payment') || message.includes('mpesa') || message.includes('pay')) {
        return `We accept M-PESA payments:
        • Till Number: 924106
        • Paybill: 716539
        Payment is required before service completion.`;
    }

    return `Thank you for your message. How can I assist you with our towing services? You can ask about:
    • Pricing
    • Service areas
    • Emergency assistance
    • Payment methods`;
}

// Back to Top functionality
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});