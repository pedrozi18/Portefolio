// ==================== 
// Load Content from content.js
// ==================== 
function loadPortfolioContent() {
    // Load personal info
    document.querySelector('.gradient-text').textContent = portfolioContent.personal.name;
    document.querySelector('.hero-description').textContent = portfolioContent.personal.description;
    document.querySelector('.profile-img').src = portfolioContent.personal.profileImage;
    document.querySelector('.profile-img').alt = portfolioContent.personal.name;
    
    // Update CV download
    const cvLink = document.querySelector('a[download]');
    cvLink.href = portfolioContent.personal.cvFile;
    cvLink.download = portfolioContent.personal.cvDownloadName;
    
    // Load social links
    document.querySelector('.social-links a[aria-label="LinkedIn"]').href = portfolioContent.social.linkedin;
    
    // Load about section
    const aboutText = document.querySelector('.about-text');
    aboutText.innerHTML = portfolioContent.about.paragraphs.map(p => `<p>${p}</p>`).join('');
    
    // Load skills
    loadSkills();
    
    // Load video
    loadVideo();
    
    // Load contact info
    loadContactInfo();
    
    // Update footer
    document.querySelector('.footer-content p').textContent = `© ${portfolioContent.footer.year} ${portfolioContent.footer.text}`;
    
    // Start typing effect with content from content.js
    startTypingEffect();
}

function loadSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    skillsGrid.innerHTML = '';
    
    portfolioContent.skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card glass';
        skillCard.innerHTML = `
            <div class="skill-icon">
                <i class="${skill.icon}"></i>
            </div>
            <h3>${skill.name}</h3>
            <div class="skill-bar">
                <div class="skill-progress" style="width: ${skill.level}%"></div>
            </div>
            <span class="skill-percentage">${skill.level}%</span>
        `;
        skillsGrid.appendChild(skillCard);
    });
}

function loadVideo() {
    const videoPlaceholder = document.getElementById('videoPlaceholder');
    const videoWrapper = document.querySelector('.video-wrapper');
    
    if (portfolioContent.featuredVideo.videoFile) {
        // Create HTML5 video element if video file is provided
        const video = document.createElement('video');
        video.controls = true;
        video.className = 'featured-video';
        
        // Add poster image if provided
        if (portfolioContent.featuredVideo.posterImage) {
            video.poster = portfolioContent.featuredVideo.posterImage;
        }
        
        // Add source element
        const source = document.createElement('source');
        source.src = portfolioContent.featuredVideo.videoFile;
        source.type = `video/${portfolioContent.featuredVideo.videoFile.split('.').pop()}`;
        
        video.appendChild(source);
        
        // Add fallback text
        video.innerHTML += 'Your browser does not support the video tag.';
        
        // Replace placeholder with video
        videoWrapper.innerHTML = '';
        videoWrapper.appendChild(video);
    }
    // If no video file, the placeholder remains visible
}

function loadContactInfo() {
    const contactSubtitle = document.querySelector('.contact-subtitle');
    if (contactSubtitle) {
        contactSubtitle.textContent = portfolioContent.contact.subtitle;
    }
    
    const contactInfoItems = document.querySelectorAll('.contact-info-item');
    if (contactInfoItems.length >= 3) {
        contactInfoItems[0].querySelector('p').textContent = portfolioContent.contact.email;
        contactInfoItems[1].querySelector('p').textContent = portfolioContent.contact.location;
        contactInfoItems[2].querySelector('p').textContent = portfolioContent.contact.phone;
    }
}

// ==================== 
// Typing Effect
// ==================== 
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 200;

function startTypingEffect() {
    typeEffect();
}

function typeEffect() {
    const typingElement = document.getElementById('typingText');
    const currentText = portfolioContent.typingTexts[textIndex];
    
    if (!isDeleting) {
        // Typing
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentText.length) {
            // Pause at end of text
            isDeleting = true;
            typingDelay = 2000;
        } else {
            typingDelay = 100;
        }
    } else {
        // Deleting
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % portfolioContent.typingTexts.length;
            typingDelay = 500;
        } else {
            typingDelay = 50;
        }
    }
    
    setTimeout(typeEffect, typingDelay);
}

// ==================== 
// Mobile Navigation Toggle
// ==================== 
function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ==================== 
// Navbar Scroll Effect
// ==================== 
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ==================== 
// Active Navigation Link
// ==================== 
function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ==================== 
// Smooth Scroll for Navigation Links
// ==================== 
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip empty hash
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================== 
// Intersection Observer for Animations
// ==================== 
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .contact-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// ==================== 
// Contact Form Handling
// ==================== 
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For this demo, we'll just show an alert
            alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
            
            // Reset form
            form.reset();
        });
    }
}

// ==================== 
// Skill Bars Animation
// ==================== 
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0';
                
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
                
                observer.unobserve(bar);
            }
        });
    }, observerOptions);
    
    skillBars.forEach(bar => observer.observe(bar));
}

// ==================== 
// Project Card Tilt Effect (Optional Enhancement)
// ==================== 
function initProjectCardEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease-out';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
        });
    });
}

// ==================== 
// Loading Animation
// ==================== 
function initPageLoad() {
    // Fade in page content
    document.body.style.opacity = '0';
    
    window.addEventListener('load', () => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    });
}

// ==================== 
// Parallax Effect for Hero Section
// ==================== 
function initParallax() {
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const heroImage = document.querySelector('.hero-image');
            
            if (heroImage && scrolled < window.innerHeight) {
                heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        });
    }
}

// ==================== 
// Initialize All Functions
// ==================== 
document.addEventListener('DOMContentLoaded', () => {
    // Load portfolio content first
    loadPortfolioContent();
    
    // Initialize navigation
    initMobileNav();
    initNavbarScroll();
    initActiveNavLink();
    initSmoothScroll();
    
    // Initialize animations
    initScrollAnimations();
    initSkillBars();
    initProjectCardEffects();
    
    // Initialize form
    initContactForm();
    
    // Initialize effects
    initPageLoad();
    initParallax();
    
    console.log('Portfolio website initialized successfully! 🚀');
});

// ==================== 
// Cursor Trail Effect (Optional Enhancement)
// ==================== 
function initCursorEffect() {
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid var(--neon-blue);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: 0.15s ease-out;
        display: none;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.display = 'block';
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Hide cursor on mobile
    if (window.innerWidth <= 768) {
        cursor.style.display = 'none';
    }
}

// Uncomment to enable cursor effect
// initCursorEffect();

// ==================== 
// Handle Window Resize
// ==================== 
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Close mobile menu on resize
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        
        if (window.innerWidth > 768) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }, 250);
});

// ==================== 
// Prevent animations on page load
// ==================== 
window.addEventListener('load', () => {
    document.body.classList.remove('preload');
});
