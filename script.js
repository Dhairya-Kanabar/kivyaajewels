// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeMobileMenu();
    initializeSearch();
    initializeScrollEffects();
    initializeAnimations();
    initializeVideoPlayer();
    initializeTestimonials();
    initializeContactForm();
    initializeLanguageSelector();
    initializeThemeToggle();
    initializeScrollToTop();
    initializeParallax();
    initializeCounters();
    initializeImageGallery();
    initializeBackToTop();
    loadProducts();
    initializeSmoothScrolling();
    initializeModalToggles();
    handleLogoClick();
});

// Mobile Menu Functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    const headerRight = document.querySelector('.header-right'); 
    const body = document.body;

    // Check if essential elements exist (mobile button and main nav)
    if (!mobileMenuBtn || !mainNav || !headerRight) { 
        console.log('Mobile menu elements not found:', {
            mobileMenuBtn: !!mobileMenuBtn,
            mainNav: !!mainNav,
            headerRight: !!headerRight 
        });
        return;
    }

    console.log('Mobile menu elements found. Adding event listener.'); // Log when elements are found

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', (e) => {
        console.log('Hamburger icon clicked!'); // Log when the click event fires
        e.preventDefault();
        e.stopPropagation();
        
        // Log initial state
        console.log('Initial state:', {
            buttonClasses: mobileMenuBtn.className,
            navClasses: mainNav.className,
            bodyClasses: body.className
        });
        
        // Explicitly add/remove classes based on current state
        const isMenuOpen = mainNav.classList.contains('active');

        if (isMenuOpen) {
            // Close the menu
            console.log('Closing menu...');
            mobileMenuBtn.classList.remove('active');
            mainNav.classList.remove('active');
            body.classList.remove('mobile-menu-open');
        } else {
            // Open the menu
            console.log('Opening menu...');
            mobileMenuBtn.classList.add('active');
            mainNav.classList.add('active');
            body.classList.add('mobile-menu-open');
        }

        // Log final state
        console.log('Final state:', {
            buttonClasses: mobileMenuBtn.className,
            navClasses: mainNav.className,
            bodyClasses: body.className
        });

        // Log state for debugging
        console.log('Mobile menu state after toggle:', {
            buttonActive: mobileMenuBtn.classList.contains('active'),
            navActive: mainNav.classList.contains('active'),
            bodyMenuOpen: body.classList.contains('mobile-menu-open')
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuBtn.contains(e.target) && 
            mainNav.classList.contains('active') && 
            !mainNav.contains(e.target)) {
            console.log('Clicked outside menu, closing.');
            mobileMenuBtn.classList.remove('active');
            mainNav.classList.remove('active');
            body.classList.remove('mobile-menu-open');
        }
    });

    // Close mobile menu when clicking on a nav link
    const navLinks = mainNav.querySelectorAll('.nav-button');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log('Nav link clicked, closing menu.');
            mobileMenuBtn.classList.remove('active');
            mainNav.classList.remove('active');
            body.classList.remove('mobile-menu-open');
        });
    });

    // Close mobile menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && mainNav.classList.contains('active')) {
            console.log('Window resized, closing menu.');
            mobileMenuBtn.classList.remove('active');
            mainNav.classList.remove('active');
            body.classList.remove('mobile-menu-open');
        }
    });
}

// Search Functionality
function initializeSearch() {
    const searchBox = document.querySelector('.search-box');
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');
    const searchIcon = document.querySelector('.search-icon');
    const closeIcon = document.querySelector('.close-icon');

    if (!searchBox || !searchInput || !searchResults || !searchIcon || !closeIcon) {
        console.log('Search elements not found:', {
            searchBox: !!searchBox,
            searchInput: !!searchInput,
            searchResults: !!searchResults,
            searchIcon: !!searchIcon,
            closeIcon: !!closeIcon
        });
        return;
    }

    // Toggle search box
    searchIcon.addEventListener('click', () => {
        searchBox.classList.add('active');
        searchInput.focus();
    });

    closeIcon.addEventListener('click', () => {
        searchBox.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
    });

    // Handle search input
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim();

        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }

        searchTimeout = setTimeout(() => {
            // Simulate search results
            const results = [
                { title: 'Result 1', url: '#' },
                { title: 'Result 2', url: '#' },
                { title: 'Result 3', url: '#' }
            ];

            searchResults.innerHTML = results.map(result => `
                <a href="${result.url}" class="search-result-item">
                    <i class="fas fa-search"></i>
                    <span>${result.title}</span>
                </a>
            `).join('');
        }, 300);
    });

    // Close search when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchBox.contains(e.target) && searchBox.classList.contains('active')) {
            searchBox.classList.remove('active');
            searchInput.value = '';
            searchResults.innerHTML = '';
        }
    });
}

// Scroll Effects
function initializeScrollEffects() {
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });
}

// Animations
function initializeAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Video Player
function initializeVideoPlayer() {
    const videoPlayer = document.querySelector('.video-player');
    const playButton = document.querySelector('.play-button');
    const video = document.querySelector('.video-player video');

    if (!videoPlayer || !playButton || !video) return;

    playButton.addEventListener('click', () => {
        videoPlayer.classList.add('playing');
        video.play();
    });

    video.addEventListener('ended', () => {
        videoPlayer.classList.remove('playing');
    });
}

// Testimonials
function initializeTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    }

    // Auto-rotate testimonials
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }, 5000);
}

// Contact Form
function initializeContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Message sent successfully!');
                form.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            alert('Error sending message. Please try again.');
            console.error('Contact form error:', error);
        }
    });
}

// Language Selector
function initializeLanguageSelector() {
    const languageSelector = document.querySelector('.language-selector');
    if (!languageSelector) return;

    languageSelector.addEventListener('change', (e) => {
        const language = e.target.value;
        // Implement language change logic
        console.log('Language changed to:', language);
    });
}

// Theme Toggle
function initializeThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (!themeToggle) return;

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// Scroll to Top
function initializeScrollToTop() {
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (!scrollTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Parallax Effect
function initializeParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(window.pageYOffset * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Counters
function initializeCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target);
                const duration = 2000; // 2 seconds
                const step = target / (duration / 16); // 60fps
                let current = 0;

                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };

                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5
    });

    counters.forEach(counter => observer.observe(counter));
}

// Image Gallery
function initializeImageGallery() {
    const gallery = document.querySelector('.image-gallery');
    if (!gallery) return;

    const images = gallery.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            // Implement lightbox or modal view
            console.log('Image clicked:', img.src);
        });
    });
}

// Back to Top Button
function initializeBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Product Loading Function
function loadProducts() {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) return;

    // Product data using images from the images/ directory
    const products = [
        {
            name: 'Product 1',
            image: 'images/1.jpeg',
            category: 'earrings'
        },
        {
            name: 'Product 2',
            image: 'images/2.jpeg',
            category: 'necklaces'
        },
        {
            name: 'Product 3',
            image: 'images/3.jpeg',
            category: 'rings'
        },
        {
            name: 'Product 4',
            image: 'images/4.jpeg',
            category: 'bracelets'
        },
        {
            name: 'Product 5',
            image: 'images/5.jpeg',
            category: 'earrings'
        },
        {
            name: 'Product 6',
            image: 'images/6.jpeg',
            category: 'necklaces'
        },
        {
            name: 'Product 7',
            image: 'images/7.jpeg',
            category: 'rings'
        },
        {
            name: 'Product 8',
            image: 'images/8.jpeg',
            category: 'bracelets'
        },
        {
            name: 'Product 9',
            image: 'images/9.jpeg',
            category: 'earrings'
        },
        {
            name: 'Product 10',
            image: 'images/10.jpeg',
            category: 'necklaces'
        }
    ];

    // Clear existing products
    productsGrid.innerHTML = '';

    // Add products to the grid
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });

    // Removed wishlist functionality
}

// Smooth Scrolling for Navigation Links
function initializeSmoothScrolling() {
    // Select all nav buttons in header and footer that have a data-target attribute
    const navButtons = document.querySelectorAll('.nav-button[data-target], .footer-nav-button[data-target]');

    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor link behavior
            const targetId = button.dataset.target; // Get the target section ID from data-target
            const targetSection = document.getElementById(targetId); // Find the target section element

            if (targetSection) {
                // Scroll to the target section smoothly
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Modal Toggle Functionality
function initializeModalToggles() {
    const modalToggles = document.querySelectorAll('[data-modal-target]');
    const modals = document.querySelectorAll('.modal');

    // Function to open a modal
    function openModal(modal) {
        if (modal == null) return;
        modal.style.display = 'block'; // Or use class to manage display/visibility
        // Add a slight delay for fade-in animation
        setTimeout(() => {
            const modalContent = modal.querySelector('.modal-content');
             if(modalContent) modalContent.classList.add('fade-in');
        }, 10);

    }

    // Function to close a modal
    function closeModal(modal) {
        if (modal == null) return;
         const modalContent = modal.querySelector('.modal-content');
         if(modalContent) modalContent.classList.remove('fade-in');
        // Add a slight delay for display: none after fade-out
        setTimeout(() => {
             modal.style.display = 'none'; // Or use class
        }, 300); // Match this duration with your CSS transition duration
    }

    // Add event listeners to modal toggle buttons
    modalToggles.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const modalSelector = button.dataset.modalTarget; // Get the target modal selector
            const modal = document.querySelector(modalSelector); // Find the target modal element
            openModal(modal);
        });
    });

    // Add event listeners to close buttons
    const closeButtons = document.querySelectorAll('.modal .close');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal'); // Find the parent modal
            closeModal(modal);
        });
    });

    // Close modal when clicking outside modal content
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            const modalContent = modal.querySelector('.modal-content');
            if (modalContent && !modalContent.contains(e.target) && e.target !== modalContent) {
                closeModal(modal);
            }
        });
    });

}

// Function to handle logo click for reloading
function handleLogoClick() {
    const logo = document.querySelector('.header .logo');
    if (logo) {
        console.log('Logo element found. Adding click listener.');
        logo.addEventListener('click', function(event) {
            console.log('Logo clicked. Reloading page.');
            // Prevent default link behavior to ensure JS handles reload
            event.preventDefault();
            // Reload the current page
            window.location.reload();
        });
    } else {
        console.log('Logo element not found.');
    }
}