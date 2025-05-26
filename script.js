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

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        typeWriter(heroTitle, originalText, 50);
    }
});

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

// Load blogs when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadBlogs();
}); 