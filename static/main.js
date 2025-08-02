// Main JS for JobLynk
// Add any global interactivity here

document.addEventListener('DOMContentLoaded', function() {
    // Example: highlight active nav link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (window.location.pathname.endsWith(link.getAttribute('href'))) {
            link.style.textDecoration = 'underline';
        }
    });
});
