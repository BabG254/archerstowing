document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init();

    // Search functionality
    const searchForm = document.querySelector('.search-form');
    const searchInput = searchForm.querySelector('input');

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = searchInput.value.toLowerCase();
        // Add your search logic here
        console.log('Searching for:', searchTerm);
    });

    // Lazy loading for blog images
    const blogImages = document.querySelectorAll('.post-image img');
    const imageOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px 50px 0px'
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('fade-in');
                observer.unobserve(img);
            }
        });
    }, imageOptions);

    blogImages.forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });
});

// Add smooth scrolling for category links
document.querySelectorAll('.category-list a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop - 100;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});