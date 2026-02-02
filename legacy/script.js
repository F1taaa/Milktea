document.addEventListener('DOMContentLoaded', () => {
    /**
     * Mobile Navigation Toggle
     */
    const nav = document.querySelector('.nav');
    const navToggle = createNavToggle();
    nav.parentNode.insertBefore(navToggle, nav);
    navToggle.addEventListener('click', () => toggleNavigation(nav, navToggle));

    /**
     * Cart Functionality
     */
    const cartIcon = document.querySelector('.cart-icon');
    const cartCountElement = document.getElementById('cart-count');
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    updateCart();

    /**
     * Featured Items - Add to Cart
     */
    document.querySelectorAll('.featured-item .btn-outline').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const item = btn.closest('.featured-item');
            addToCart(item);
            showAddToCartNotification(item);
        });
    });

    /**
     * Scroll Progress Indicator
     */
    const progressBar = createScrollProgressBar();
    document.body.appendChild(progressBar);
    window.addEventListener('scroll', () => updateScrollProgress(progressBar));

    /**
     * Intersection Observer for Animations
     */
    const observer = createIntersectionObserver();
    document.querySelectorAll('.hero-content, .featured-item, .about-content, .contact-container')
        .forEach(el => observer.observe(el));

    /**
     * Contact Form Handling
     */
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => handleFormSubmit(e, contactForm));
    }

    /**
     * Modal Handling
     */
    handleModal();

    /**
     * Back to Top Button
     */
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    /**
     * Helper Functions
     */

    function createNavToggle() {
        const toggle = document.createElement('button');
        toggle.className = 'nav-toggle';
        toggle.innerHTML = '<span></span><span></span><span></span>';
        return toggle;
    }

    function toggleNavigation(nav, navToggle) {
        nav.classList.toggle('active');
        navToggle.classList.toggle('open');
    }

    function addToCart(item) {
        cartItems.push({
            name: item.querySelector('h3').textContent,
            price: parseFloat(item.querySelector('.price')?.textContent) || 0,
            id: Date.now()
        });
        updateCart();
    }

    function updateCart() {
        cartCountElement.textContent = cartItems.length;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    function showAddToCartNotification(item) {
        const notification = document.createElement('div');
        notification.className = 'add-to-cart-notification';
        notification.textContent = 'Added to cart!';
        item.appendChild(notification);
        setTimeout(() => notification.remove(), 2000);
    }

    function createScrollProgressBar() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        return progressBar;
    }

    function updateScrollProgress(progressBar) {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
        progressBar.style.width = `${scrolled}%`;
    }

    function createIntersectionObserver() {
        return new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
    }

    async function handleFormSubmit(e, form) {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            form.reset();
            showNotification('Message sent successfully!', 'success');
        } catch (error) {
            showNotification('Failed to send message. Please try again.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }
    }

    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
    }

    function handleModal() {
        const modal = document.getElementById('quickViewModal');
        const closeModal = document.querySelector('.modal-close');

        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', () => {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
});
