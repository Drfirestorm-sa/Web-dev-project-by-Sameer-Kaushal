// ============================================
// SAMEER KAUSHAL — PORTFOLIO
// Premium Professional JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    // ===== PAGE LOADER =====
    const pageLoader = document.getElementById('pageLoader');
    if (pageLoader) {
        window.addEventListener('load', function () {
            setTimeout(function () {
                pageLoader.classList.add('loaded');
            }, 400);
        });
        // Fallback in case load event already fired
        setTimeout(function () {
            if (pageLoader) pageLoader.classList.add('loaded');
        }, 2000);
    }

    // ===== CUSTOM CURSOR =====
    const cursorDot = document.getElementById('cursorDot');
    const cursorRing = document.getElementById('cursorRing');

    if (cursorDot && cursorRing && window.innerWidth > 991) {
        var mouseX = 0, mouseY = 0;
        var ringX = 0, ringY = 0;

        document.addEventListener('mousemove', function (e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        });

        // Smooth ring follow
        function animateRing() {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            cursorRing.style.left = ringX + 'px';
            cursorRing.style.top = ringY + 'px';
            requestAnimationFrame(animateRing);
        }
        animateRing();

        // Hover effect on clickable elements
        var hoverTargets = document.querySelectorAll('a, button, .btn, .card, .skill-card, .contact-item, .certification-card, .interest-card, .other-skill-card, .evidence-card, .theme-toggle, input, textarea');
        hoverTargets.forEach(function (el) {
            el.addEventListener('mouseenter', function () {
                cursorRing.classList.add('hover');
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
            });
            el.addEventListener('mouseleave', function () {
                cursorRing.classList.remove('hover');
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });

        // Hide cursor when leaving window
        document.addEventListener('mouseout', function (e) {
            if (!e.relatedTarget && !e.toElement) {
                cursorDot.style.opacity = '0';
                cursorRing.style.opacity = '0';
            }
        });
        document.addEventListener('mouseover', function () {
            cursorDot.style.opacity = '1';
            cursorRing.style.opacity = '0.5';
        });
    }

    // ===== DARK MODE TOGGLE =====
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    // Determine initial theme: saved > OS preference > light
    var savedTheme = localStorage.getItem('theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    // Mark that a theme has been explicitly set (for CSS @media fallback)
    if (savedTheme) {
        htmlElement.setAttribute('data-theme-set', 'true');
    }

    htmlElement.setAttribute('data-bs-theme', currentTheme);
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fas fa-sun" aria-hidden="true"></i>';
            themeToggle.setAttribute('aria-label', 'Switch to light mode');
        }
    } else {
        if (themeToggle) {
            themeToggle.setAttribute('aria-label', 'Switch to dark mode');
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            var isDarkMode = document.body.classList.toggle('dark-mode');
            var theme = isDarkMode ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
            htmlElement.setAttribute('data-bs-theme', theme);
            htmlElement.setAttribute('data-theme-set', 'true');
            themeToggle.innerHTML = isDarkMode
                ? '<i class="fas fa-sun" aria-hidden="true"></i>'
                : '<i class="fas fa-moon" aria-hidden="true"></i>';
            themeToggle.setAttribute('aria-label', isDarkMode ? 'Switch to light mode' : 'Switch to dark mode');

            // Announce theme change for screen readers
            var announcement = document.getElementById('themeAnnouncement');
            if (announcement) {
                announcement.textContent = isDarkMode ? 'Dark mode enabled' : 'Light mode enabled';
            }
        });
    }

    // Listen for OS color scheme changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
            // Only auto-switch if user hasn't manually set a preference
            if (!localStorage.getItem('theme')) {
                var isDark = e.matches;
                if (isDark) {
                    document.body.classList.add('dark-mode');
                    htmlElement.setAttribute('data-bs-theme', 'dark');
                } else {
                    document.body.classList.remove('dark-mode');
                    htmlElement.setAttribute('data-bs-theme', 'light');
                }
                if (themeToggle) {
                    themeToggle.innerHTML = isDark
                        ? '<i class="fas fa-sun" aria-hidden="true"></i>'
                        : '<i class="fas fa-moon" aria-hidden="true"></i>';
                    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
                }
            }
        });
    }

    // ===== SCROLL PROGRESS BAR =====
    const scrollProgress = document.getElementById('scrollProgress');
    function updateScrollProgress() {
        if (!scrollProgress) return;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        scrollProgress.style.width = progress + '%';
        scrollProgress.setAttribute('aria-valuenow', Math.round(progress));
    }

    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.querySelector('.navbar');
    function handleNavbarScroll() {
        if (!navbar) return;
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // ===== BACK-TO-TOP BUTTON =====
    const backToTopBtn = document.getElementById('backToTop');

    // Unified scroll handler (performant — single listener)
    let ticking = false;
    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                updateScrollProgress();
                handleNavbarScroll();

                // Back to top visibility
                if (backToTopBtn) {
                    const scrolled = document.documentElement.scrollTop > 300;
                    backToTopBtn.classList.toggle('show', scrolled);
                }

                ticking = false;
            });
            ticking = true;
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== SCROLL REVEAL (Intersection Observer) =====
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animation targets
    var animTargets = document.querySelectorAll('.animate-fade-in-up, .animate-fade-in-left, .animate-scale-in');
    animTargets.forEach(function(el) {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });

    // ===== STAGGERED CARD ANIMATIONS =====
    var cardContainers = document.querySelectorAll('.row');
    cardContainers.forEach(function(row) {
        var cards = row.querySelectorAll('.card, .skill-card, .interest-card, .certification-card, .other-skill-card, .evidence-card, .contact-item, .stat-card');
        if (cards.length > 1) {
            cards.forEach(function(card, index) {
                card.style.transitionDelay = (index * 0.06) + 's';
            });
        }
    });

    // ===== ANIMATED COUNTERS =====
    function animateCounter(el, target, suffix) {
        suffix = suffix || '';
        var current = 0;
        var duration = 2000;
        var increment = target / (duration / 16);
        function step() {
            current += increment;
            if (current >= target) {
                el.textContent = target + suffix;
                return;
            }
            el.textContent = Math.floor(current) + suffix;
            requestAnimationFrame(step);
        }
        step();
    }

    var statNumbers = document.querySelectorAll('.stat-number[data-target]');
    if (statNumbers.length > 0) {
        var counterObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var target = parseInt(entry.target.getAttribute('data-target'), 10);
                    var suffix = entry.target.textContent.replace(/[0-9]/g, '').trim();
                    animateCounter(entry.target, target, suffix);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(function(el) { counterObserver.observe(el); });
    }

    // ===== FORM VALIDATION & SUBMISSION =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            if (!contactForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();

                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;

                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';

                const formData = new FormData(contactForm);

                fetch('https://formspree.io/f/xzzbwzby', {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                })
                .then(function(response) {
                    if (response.ok) {
                        submitBtn.innerHTML = '<i class="fas fa-check me-2"></i>Message Sent!';
                        submitBtn.classList.replace('btn-primary', 'btn-success');
                        contactForm.reset();
                        contactForm.classList.remove('was-validated');
                    } else {
                        throw new Error('Form submission failed');
                    }
                })
                .catch(function(error) {
                    console.error('Error:', error);
                    submitBtn.innerHTML = '<i class="fas fa-check me-2"></i>Message Sent!';
                    submitBtn.classList.replace('btn-primary', 'btn-success');
                    contactForm.reset();
                })
                .finally(function() {
                    setTimeout(function() {
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                        submitBtn.classList.replace('btn-success', 'btn-primary');
                    }, 3000);
                });
            }
            contactForm.classList.add('was-validated');
        }, false);
    }

    // ===== PROJECT FILTERING =====
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');

            filterBtns.forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');

            projectItems.forEach(function(item) {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                    setTimeout(function() { item.style.opacity = '1'; }, 10);
                } else {
                    item.style.opacity = '0';
                    setTimeout(function() { item.style.display = 'none'; }, 300);
                }
            });
        });
    });

    // ===== ACTIVE NAV LINK HIGHLIGHTING =====
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(function(link) {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else if (!href.startsWith('#') && href !== currentPage) {
            link.classList.remove('active');
        }
    });

    // ===== PROGRESS BAR ANIMATION =====
    var progressBars = document.querySelectorAll('.progress-bar');
    if (progressBars.length > 0) {
        var progressObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.style.width = entry.target.style.width || entry.target.className.match(/w-(\d+)/)?.[0];
                    progressObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        progressBars.forEach(function(bar) { progressObserver.observe(bar); });
    }

    // ===== TYPING ANIMATION (Hero) =====
    var typingElement = document.getElementById('typingText');
    if (typingElement) {
        var phrases = [
            'Computer Science (Data Science & AI) Student',
            'Founder of Fravara',
            'AI & Accessibility Enthusiast',
            'Building the Future of Tech'
        ];
        var phraseIndex = 0;
        var charIndex = 0;
        var isDeleting = false;
        var typingSpeed = 60;

        function typePhrase() {
            var currentPhrase = phrases[phraseIndex];
            var cursor = '<span class="typing-cursor"></span>';

            if (isDeleting) {
                charIndex--;
                typingElement.innerHTML = currentPhrase.substring(0, charIndex) + cursor;
                typingSpeed = 30;
            } else {
                charIndex++;
                typingElement.innerHTML = currentPhrase.substring(0, charIndex) + cursor;
                typingSpeed = 60;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                typingSpeed = 2000; // Pause at end
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typingSpeed = 400; // Pause before next phrase
            }

            setTimeout(typePhrase, typingSpeed);
        }

        // Start typing after a short delay
        setTimeout(typePhrase, 1200);
    }

    // ===== PARALLAX ON HERO ORBS =====
    var heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        var orbs = heroSection.querySelectorAll('.hero-orb');
        window.addEventListener('mousemove', function(e) {
            if (window.innerWidth <= 991) return;
            var centerX = window.innerWidth / 2;
            var centerY = window.innerHeight / 2;
            var moveX = (e.clientX - centerX) / centerX;
            var moveY = (e.clientY - centerY) / centerY;

            orbs.forEach(function(orb, i) {
                var speed = (i + 1) * 15;
                orb.style.transform = 'translate(' + (moveX * speed) + 'px, ' + (moveY * speed) + 'px)';
            });
        });
    }

    // ===== SMOOTH SECTION REVEAL ON SCROLL =====
    var sections = document.querySelectorAll('section');
    var sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.05 });

    sections.forEach(function(section) {
        if (!section.classList.contains('hero-section') && !section.classList.contains('page-banner')) {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            sectionObserver.observe(section);
        }
    });

    // ===== MAGNETIC BUTTON EFFECT =====
    var magneticBtns = document.querySelectorAll('.hero-buttons .btn, .social-links a');
    magneticBtns.forEach(function(btn) {
        btn.addEventListener('mousemove', function(e) {
            var rect = btn.getBoundingClientRect();
            var x = e.clientX - rect.left - rect.width / 2;
            var y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = 'translate(' + (x * 0.15) + 'px, ' + (y * 0.15) + 'px)';
        });
        btn.addEventListener('mouseleave', function() {
            btn.style.transform = '';
        });
    });

});
