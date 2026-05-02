// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for Fade-In Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once it's visible
        }
    });
}, observerOptions);

// Select all elements with the fade-in class
document.querySelectorAll('.fade-in').forEach((element) => {
    observer.observe(element);
});

// Initialize Vanta.js 3D Network Background
if (window.VANTA) {
    VANTA.NET({
        el: "#particles-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x00e5ff,
        backgroundColor: 0x0a0a0f,
        points: 12.00,
        maxDistance: 22.00,
        spacing: 18.00
    });
}

// Initialize Typed.js for the tagline
if (window.Typed) {
    new Typed('#typed-tagline', {
        strings: [
            'Automating the boring stuff.',
            'Focusing on what matters.',
            'Managing airport network infrastructure.',
            'Python & Network Enthusiast.'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true
    });
}
