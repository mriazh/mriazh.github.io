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

// Initialize tsParticles for Network Background with Mouse Attraction
if (window.tsParticles) {
    tsParticles.load("particles-bg", {
        fpsLimit: 60,
        particles: {
            number: {
                value: 60,
                density: { enable: true, value_area: 800 }
            },
            color: { value: "#00e5ff" },
            links: {
                enable: true,
                color: "#0077ff",
                distance: 150,
                opacity: 0.5,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                random: false,
                straight: false,
                outModes: { default: "bounce" }
            },
            size: {
                value: 3,
                random: true
            },
            opacity: {
                value: 0.7
            }
        },
        interactivity: {
            detectsOn: "window",
            events: {
                onHover: {
                    enable: true,
                    mode: ["grab", "attract"] // Draws lines to mouse and pulls them in!
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 250,
                    links: { opacity: 0.8 }
                },
                attract: {
                    distance: 250,
                    duration: 0.4,
                    factor: 3 // Controls how strongly they are pulled to the cursor
                }
            }
        },
        detectRetina: true,
        background: {
            color: "#0a0a0f"
        }
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
