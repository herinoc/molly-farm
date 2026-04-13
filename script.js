// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Parallax Effect logic
const heroBg = document.querySelector('.hero-bg');
window.addEventListener('scroll', () => {
    let offset = window.scrollY;
    heroBg.style.transform = `translateY(${offset * 0.4}px)`;
});

// Scroll Animations using Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right, .zoom-in').forEach((el) => {
    observer.observe(el);
});
