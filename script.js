// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }

                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Advanced Scroll Reveal Animation
    // This adds the 'visible' class to elements with 'animate-fade-in-up' when they scroll into view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all animated elements
    const animatedElements = document.querySelectorAll('.animate-fade-in-up');
    animatedElements.forEach(el => {
        // Pause animation initially via CSS or JS, then run it when visible
        // However, our CSS currently runs it immediately. 
        // To make it truly "scroll reveal", we can modify the style slightly or just let it play.
        // For a simpler "advanced" feel without rewriting all CSS, we'll leave the CSS auto-play 
        // for top-of-page elements, but for elements further down, this observer helps if we set initial opacity to 0 in CSS.
        // Given our current CSS, animations play on load. 
        // To strictly enforce scroll reveal, we'd need to set animation-play-state: paused; initially.
        
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });

    // Form Validation (Bootstrap 5 Custom Style)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            if (!contactForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                // Form is valid
                event.preventDefault(); // Prevent actual submission for demo
                
                // Show success message (Simulated)
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
                
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-check me-2"></i>Message Sent!';
                    submitBtn.classList.remove('btn-primary');
                    submitBtn.classList.add('btn-success');
                    
                    contactForm.reset();
                    contactForm.classList.remove('was-validated');
                    
                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                        submitBtn.classList.remove('btn-success');
                        submitBtn.classList.add('btn-primary');
                    }, 3000);
                }, 1500);
            }

            contactForm.classList.add('was-validated');
        }, false);
    }
});
