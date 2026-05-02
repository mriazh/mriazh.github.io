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

// Optional: Dynamic background effect based on mouse movement
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    const bg = document.getElementById('particles-bg');
    bg.style.background = `
        radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(0, 229, 255, 0.15) 0%, transparent 30%),
        radial-gradient(circle at ${(1-x) * 100}% ${(1-y) * 100}%, rgba(0, 119, 255, 0.1) 0%, transparent 25%)
    `;
});
