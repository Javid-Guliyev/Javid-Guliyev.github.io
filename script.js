// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.timeline-item, .education-card, .skill-category, .stat');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Enhanced typing animation for hero subtitle
function typeWriter(element, texts, speed = 100) {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            element.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = speed;
        
        if (isDeleting) {
            typeSpeed /= 2;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500; // Pause before next text
        }
        
        setTimeout(type, typeSpeed);
    }
    
    type();
}

// Initialize enhanced animations when page loads
window.addEventListener('load', () => {
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const texts = [
            'Data Scientist',
            'AI Engineer',
            'Machine Learning Engineer',
            'Computer Vision Specialist'
        ];
        typeWriter(typingElement, texts, 100);
    }
    
    // Animate hero elements on load
    animateHeroElements();
});

// Animate hero elements with staggered delays
function animateHeroElements() {
    const elements = [
        { selector: '.greeting', delay: 200 },
        { selector: '.hero-title', delay: 400 },
        { selector: '.role-container', delay: 600 },
        { selector: '.hero-description', delay: 800 },
        { selector: '.hero-highlights', delay: 1000 },
        { selector: '.hero-actions', delay: 1200 },
        { selector: '.social-links', delay: 1400 },
        { selector: '.scroll-indicator', delay: 1600 }
    ];
    
    elements.forEach(({ selector, delay }) => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, delay);
        }
    });
    
    // Animate profile image
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.style.opacity = '0';
        profileImage.style.transform = 'scale(0.8)';
        profileImage.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            profileImage.style.opacity = '1';
            profileImage.style.transform = 'scale(1)';
        }, 300);
    }
}

// Skill tags hover effect
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Contact form animation (if you add a form later)
function animateContactItems() {
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Initialize contact animation when contact section is visible
const contactSection = document.querySelector('#contact');
if (contactSection) {
    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateContactItems();
                contactObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    contactObserver.observe(contactSection);
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Parallax effect for hero section (disabled to prevent layout issues)
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const hero = document.querySelector('.hero');
//     if (hero) {
//         hero.style.transform = `translateY(${scrolled * 0.5}px)`;
//     }
// });

// Add smooth reveal animation for timeline items
function revealTimelineItems() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('reveal');
        }, index * 200);
    });
}

// Stats counter animation
function animateStats() {
    const stats = document.querySelectorAll('.stat h3');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
        }, 30);
    });
}

// Initialize stats animation when about section is visible
const aboutSection = document.querySelector('#about');
if (aboutSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(aboutSection);
}

// Add CSS for additional animations
const additionalStyles = `
    .loaded {
        opacity: 1;
    }
    
    .timeline-item.reveal {
        opacity: 1;
        transform: translateX(0);
    }
    
    .timeline-item {
        opacity: 0;
        transform: translateX(-50px);
        transition: all 0.6s ease;
    }
    
    .contact-item {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.4s ease;
    }
    
    .nav-link.active {
        color: #2563eb;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Smooth page transitions
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #2563eb, #fbbf24);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress
createScrollProgress();

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
    // Navbar background change
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}, 16);

window.addEventListener('scroll', throttledScrollHandler);

// Blog functionality
async function loadBlogs() {
    try {
        const response = await fetch('assets/data/blogs.json');
        const data = await response.json();
        
        if (data.blogs && data.blogs.length > 0) {
            displayBlogs(data.blogs);
            // Show blog navigation item
            const blogNavItem = document.querySelector('a[href="#blog"]').parentElement;
            blogNavItem.style.display = 'block';
        } else {
            // Hide blog section and navigation if no blogs
            const blogSection = document.querySelector('#blog');
            const blogNavItem = document.querySelector('a[href="#blog"]').parentElement;
            if (blogSection) blogSection.style.display = 'none';
            if (blogNavItem) blogNavItem.style.display = 'none';
        }
    } catch (error) {
        console.log('No blog data found or error loading blogs:', error);
        // Hide blog section and navigation if error
        const blogSection = document.querySelector('#blog');
        const blogNavItem = document.querySelector('a[href="#blog"]').parentElement;
        if (blogSection) blogSection.style.display = 'none';
        if (blogNavItem) blogNavItem.style.display = 'none';
    }
}

function displayBlogs(blogs) {
    const blogContainer = document.getElementById('blog-container');
    if (!blogContainer) return;

    blogContainer.innerHTML = '';

    blogs.forEach(blog => {
        const blogCard = createBlogCard(blog);
        blogContainer.appendChild(blogCard);
    });
}

function createBlogCard(blog) {
    const card = document.createElement('div');
    card.className = `blog-card ${blog.featured ? 'featured' : ''}`;
    
    const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    card.innerHTML = `
        ${blog.featured ? '<div class="featured-badge">Featured</div>' : ''}
        <div class="blog-image">
            <i class="fas fa-blog"></i>
        </div>
        <div class="blog-content">
            <div class="blog-meta">
                <span class="blog-date">${formattedDate}</span>
                <span class="blog-read-time">${blog.readTime}</span>
            </div>
            <h3 class="blog-title">${blog.title}</h3>
            <p class="blog-excerpt">${blog.excerpt}</p>
            <div class="blog-tags">
                ${blog.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
            </div>
            <a href="#" class="blog-read-more" onclick="openBlogModal(${blog.id})">Read More</a>
        </div>
    `;

    return card;
}

function openBlogModal(blogId) {
    // This function will be implemented when you want to show full blog content
    // For now, it's a placeholder
    console.log('Opening blog with ID:', blogId);
    // You can implement a modal or navigate to a separate blog page here
}

// 3D Particle Waves Background
class ParticleWavesBackground {
    constructor() {
        this.canvas = document.getElementById('particle-waves-canvas');
        this.hero = document.querySelector('.hero');
        this.interactiveBg = document.querySelector('.interactive-bg');
        this.shapes = document.querySelectorAll('.shape');
        
        // Three.js variables
        this.camera = null;
        this.scene = null;
        this.renderer = null;
        this.particles = null;
        this.count = 0;
        this.mouseX = 0;
        this.mouseY = 0;
        this.windowHalfX = window.innerWidth / 2;
        this.windowHalfY = window.innerHeight / 2;
        
        // Configuration
        this.SEPARATION = 60;
        this.AMOUNTX = 120;
        this.AMOUNTY = 120;
        
        this.init();
    }

    async init() {
        // Check if device supports 3D effects
        if (this.isMobile() || !this.supportsWebGL()) {
            this.initFallback();
            return;
        }

        try {
            // Import Three.js
            const THREE = await import('three');
            this.THREE = THREE;
            
            this.initThreeJS();
            this.bindEvents();
            this.animate();
        } catch (error) {
            console.warn('Failed to load 3D background, using fallback:', error);
            this.initFallback();
        }
    }

    isMobile() {
        return window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    supportsWebGL() {
        try {
            const canvas = document.createElement('canvas');
            return !!(window.WebGLRenderingContext && canvas.getContext('webgl'));
        } catch (e) {
            return false;
        }
    }

    initThreeJS() {
        const THREE = this.THREE;
        
        // Create camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 50000);
        const distance = 1500;
        const angle = Math.PI / 6; // 30 degrees
        this.camera.position.x = Math.sin(angle) * distance;
        this.camera.position.y = 400;
        this.camera.position.z = Math.cos(angle) * distance;

        // Create scene
        this.scene = new THREE.Scene();

        // Create particles
        this.createParticles();

        // Create renderer
        this.renderer = new THREE.WebGLRenderer({ 
            canvas: this.canvas,
            antialias: true,
            alpha: true 
        });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x000000, 0);
    }

    createParticles() {
        const THREE = this.THREE;
        const numParticles = this.AMOUNTX * this.AMOUNTY;
        const positions = new Float32Array(numParticles * 3);
        const scales = new Float32Array(numParticles);

        let i = 0, j = 0;

        for (let ix = 0; ix < this.AMOUNTX; ix++) {
            for (let iy = 0; iy < this.AMOUNTY; iy++) {
                positions[i] = ix * this.SEPARATION - ((this.AMOUNTX * this.SEPARATION) / 2);
                positions[i + 1] = 0;
                positions[i + 2] = iy * this.SEPARATION - ((this.AMOUNTY * this.SEPARATION) / 2);

                scales[j] = 1;

                i += 3;
                j++;
            }
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

        const material = new THREE.ShaderMaterial({
            uniforms: {
                color: { value: new THREE.Color(0x3b82f6) },
            },
            vertexShader: document.getElementById('vertexshader').textContent,
            fragmentShader: document.getElementById('fragmentshader').textContent,
            transparent: true
        });

        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }

    bindEvents() {
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX - this.windowHalfX;
            this.mouseY = e.clientY - this.windowHalfY;
            this.updateInteractiveElements(e);
        });

        window.addEventListener('resize', () => {
            this.onWindowResize();
        });

        document.addEventListener('mouseleave', () => {
            this.resetInteractiveElements();
        });
    }

    updateInteractiveElements(e) {
        // Update gradient background
        if (this.interactiveBg) {
            const rect = this.hero.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            this.interactiveBg.style.background = `radial-gradient(circle at ${x}% ${y}%, 
                rgba(59, 130, 246, 0.25) 0%, 
                rgba(147, 51, 234, 0.15) 25%, 
                rgba(16, 185, 129, 0.08) 50%, 
                transparent 70%)`;
        }

        // Update floating shapes
        this.shapes.forEach((shape) => {
            const rect = shape.getBoundingClientRect();
            const shapeCenterX = rect.left + rect.width / 2;
            const shapeCenterY = rect.top + rect.height / 2;
            
            const distance = Math.sqrt(
                Math.pow(e.clientX - shapeCenterX, 2) + 
                Math.pow(e.clientY - shapeCenterY, 2)
            );
            
            const maxDistance = 200;
            const influence = Math.max(0, 1 - distance / maxDistance);
            
            const moveX = (e.clientX - shapeCenterX) * influence * 0.05;
            const moveY = (e.clientY - shapeCenterY) * influence * 0.05;
            const scale = 1 + influence * 0.2;
            const opacity = 0.6 + influence * 0.3;
            
            shape.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale})`;
            shape.style.opacity = opacity;
        });
    }

    resetInteractiveElements() {
        if (this.interactiveBg) {
            this.interactiveBg.style.background = `radial-gradient(circle at 50% 50%, 
                rgba(59, 130, 246, 0.15) 0%, 
                rgba(147, 51, 234, 0.1) 25%, 
                rgba(16, 185, 129, 0.05) 50%, 
                transparent 70%)`;
        }

        this.shapes.forEach(shape => {
            shape.style.transform = 'translate(0px, 0px) scale(1)';
            shape.style.opacity = '0.6';
        });
    }

    onWindowResize() {
        this.windowHalfX = window.innerWidth / 2;
        this.windowHalfY = window.innerHeight / 2;

        if (this.camera && this.renderer) {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        }
    }

    animate() {
        if (!this.renderer) return;
        
        this.render();
        requestAnimationFrame(() => this.animate());
    }

    render() {
        // Update camera position based on mouse
        this.camera.position.x += (-this.mouseX * 2 - this.camera.position.x) * 0.05;
        
        const elevationRange = 300;
        const baseHeight = 400;
        const targetY = baseHeight + (this.mouseY / this.windowHalfY) * elevationRange;
        this.camera.position.y += (targetY - this.camera.position.y) * 0.05;
        
        this.camera.lookAt(this.scene.position);

        // Update particle positions and scales
        const positions = this.particles.geometry.attributes.position.array;
        const scales = this.particles.geometry.attributes.scale.array;

        let i = 0, j = 0;

        for (let ix = 0; ix < this.AMOUNTX; ix++) {
            for (let iy = 0; iy < this.AMOUNTY; iy++) {
                positions[i + 1] = (Math.sin((ix + this.count) * 0.08) * 80) +
                                  (Math.sin((iy + this.count) * 0.12) * 60);

                scales[j] = (Math.sin((ix + this.count) * 0.08) + 1) * 8 +
                           (Math.sin((iy + this.count) * 0.12) + 1) * 8;

                i += 3;
                j++;
            }
        }

        this.particles.geometry.attributes.position.needsUpdate = true;
        this.particles.geometry.attributes.scale.needsUpdate = true;

        this.renderer.render(this.scene, this.camera);
        this.count += 0.08;
    }

    initFallback() {
        // Hide the canvas and show simple background effects
        if (this.canvas) {
            this.canvas.style.display = 'none';
        }
        
        // Initialize simple interactive background
        this.bindEvents();
    }
}

// Initialize particle waves background
let particleWavesBackground;

// Load blogs when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadBlogs();
    
    // Initialize particle waves background after a short delay
    setTimeout(() => {
        particleWavesBackground = new ParticleWavesBackground();
    }, 500);
}); 