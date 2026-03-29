// Initialize Lucide icons
lucide.createIcons();

// Image Data Mapping - Paths relative to Portfolio_Website location
const portfolioData = [
    // Esports Banner Category
    { category: "Esports Banner", src: "frontend/assets/Esports Banner/Banner_Promo.jpg", title: "Tournament Promo" },
    { category: "Esports Banner", src: "frontend/assets/Esports Banner/ROADMAP.jpg", title: "Season Roadmap" },
    { category: "Esports Banner", src: "frontend/assets/Esports Banner/SCHEDULE.jpg", title: "Match Schedule 1" },
    { category: "Esports Banner", src: "frontend/assets/Esports Banner/SCHEDULE_1.jpg", title: "Match Schedule 2" },
    { category: "Esports Banner", src: "frontend/assets/Esports Banner/banner.jpg", title: "Main Banner" },
    { category: "Esports Banner", src: "frontend/assets/Esports Banner/logo.jpg", title: "Team Logo" },
    { category: "Esports Banner", src: "frontend/assets/Esports Banner/prizepool.jpg", title: "Prizepool Banner" },
    { category: "Esports Banner", src: "frontend/assets/Esports Banner/slr banner.jpg", title: "SLR Banner" },

    // Social Media Banner Category
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/Banner_1.jpg", title: "Social Post 1" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/Car-Banner.jpg", title: "Automotive Banner" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/Christmas.jpg", title: "Christmas Special" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/Cup-Cake.jpg", title: "Food Post - Cupcake" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/Design-01.jpg", title: "Modern Design 01" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/Design-02.jpg", title: "Modern Design 02" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/Design-03.jpg", title: "Modern Design 03" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/Design-04.jpg", title: "Modern Design 04" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/Design-05.jpg", title: "Modern Design 05" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/Design-07.jpg", title: "Modern Design 07" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/Design-08.jpg", title: "Modern Design 08" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/FOOD-banner.jpg", title: "Restaurant Banner" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/Father_s-Day.jpg", title: "Father's Day Post" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/Labour's-day.png", title: "Labour's Day" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/PIZZA_1.jpg", title: "Pizza Ad" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/airpods.jpg", title: "Tech Accessory" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/burger.jpg", title: "Burger Promo" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/chicken wings.jpg", title: "Chicken Wings Ad" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/dashain.jpg", title: "Festive Post - Dashain" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/gai-jatra.jpg", title: "Cultural Post" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/garnier.jpg", title: "Beauty Product Ad" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/gold-ring.jpg", title: "Jewelry Ad" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/headphones_1.jpg", title: "Headphones Ad" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/nike.jpg", title: "Nike Sportswear" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/post.jpg", title: "Social Content" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/poster.jpg", title: "Event Poster" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/product Manipulation-01.jpg", title: "Product Manipulation" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/samosa.jpg", title: "Food Post - Samosa" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/sofa-poster-design.jpg", title: "Furniture Post" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/watch.jpg", title: "Luxury Watch" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/watch_1.jpg", title: "Smart Watch" },
    { category: "Social Media Banner", src: "frontend/assets/Social Media Banner/wattch.jpg", title: "Classic Watch" },

    // Thumbnail Category
    { category: "Thumbnail", src: "frontend/assets/Thumbnail/Thumbnail-ESU.jpg", title: "ESU Thumbnail" },
    { category: "Thumbnail", src: "frontend/assets/Thumbnail/Thumbnail.jpg", title: "Content Thumbnail" },
    { category: "Thumbnail", src: "frontend/assets/Thumbnail/Thumbnail_Final_Day_1.jpg", title: "Live Event Thumbnail" },

    // Web Projects Category
    {
        category: "Web Projects",
        src: "frontend/assets/Web Projects/Landing_Final.png",
        title: "College Event Management",
        description: "Official portal for campus event discovery and full system management.",
        projectId: "college-event-mgmt"
    },
    {
        category: "Web Projects",
        src: "frontend/assets/Web Projects/Todo_Home.png",
        title: "Smart To-Do List",
        description: "Minimal productivity app with task categorization and dark mode.",
        projectId: "todo-list"
    }
];

// Elements
const galleryContainer = document.getElementById('gallery');
const tabs = document.querySelectorAll('.tab');

// Populate Gallery
function populateGallery(category = 'all') {
    if (!galleryContainer) return;
    galleryContainer.innerHTML = '';

    const filteredContent = category === 'all'
        ? portfolioData
        : portfolioData.filter(item => item.category === category);

    filteredContent.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';

        // Encode URI spaces and special characters
        const safeSrc = encodeURI(item.src);

        galleryItem.innerHTML = `
            <img src="${safeSrc}" alt="${item.title}" loading="lazy">
            <div class="gallery-overlay">
                <h4 style="color: #f9d806; font-size: 1.1rem; font-weight: 700;">${item.title}</h4>
                <p style="font-size: 0.8rem; color: #fff; opacity: 0.7; margin-bottom: 5px;">${item.category}</p>
                ${item.description ? `<p style="font-size: 0.75rem; color: #fff; opacity: 0.9; font-style: italic;">${item.description}</p>` : ''}
                ${item.projectId ? `<p style="font-size: 0.7rem; color: #88b301; font-weight: 700; margin-top: 10px;">CLICK TO OPEN →</p>` : ''}
            </div>
        `;

        if (item.projectId) {
            galleryItem.style.cursor = "pointer";
            galleryItem.onclick = () => openProject(item.projectId);
        }

        galleryContainer.appendChild(galleryItem);
    });
}

// Tabs switching
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        populateGallery(tab.dataset.category);
    });
});

// Typewriter Effect logic
const typewriterElement = document.getElementById('typewriter');
const titles = ['Graphics Designer.', 'Front end developer.'];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 200;

function type() {
    if (!typewriterElement) return;
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
        typewriterElement.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 100;
    } else {
        typewriterElement.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 200;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
        isDeleting = true;
        typeSpeed = 3000; // Large pause at the end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// Project Data for Modal
const featuredProjects = {
    "college-event-mgmt": {
        title: "College Event Management",
        coverSrc: "frontend/assets/Web Projects/Landing_Final.png",
        description: "A comprehensive campus event platform designed to simplify event discovery and management. This full-stack application provides students with a seamless way to register for upcoming workshops and seminars, while giving administrators powerful tools to track registrations and manage event lifecycles. Built with modern web technologies, it features role-based authentication, real-time data updates, and a responsive glassmorphic UI.",
        screenshots: [
            "frontend/assets/Web Projects/Login_Final.png",
            "frontend/assets/Web Projects/Dashboard_Final.png",
            "frontend/assets/Web Projects/Landing_Final.png"
        ]
    },
    "todo-list": {
        title: "Smart To-Do List",
        coverSrc: "frontend/assets/Web Projects/Todo_Home.png",
        description: "A sleek and efficient task management application designed for focus and productivity. The app allows users to create, organize, and track their daily tasks with ease. It features a modern dark-themed interface, task categorization, and an intuitive user experience. Built focusing on clean code and interactive UI elements, it's the perfect tool for staying organized.",
        screenshots: [
            "frontend/assets/Web Projects/Todo_Login.png",
            "frontend/assets/Web Projects/Todo_Task.png",
            "frontend/assets/Web Projects/Todo_Home.png"
        ]
    }
};

// Modal Functions
const modal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.querySelector(".close-modal");

function openProject(projectId) {
    const project = featuredProjects[projectId];
    if (!project) return;

    modalBody.innerHTML = `
        <div class="modal-header-img">
            <img src="${project.coverSrc}" alt="${project.title} Cover">
        </div>
        <div class="modal-body-content">
            <div class="modal-title-row">
                <h2>${project.title}</h2>
            </div>
            <div class="modal-desc-text">
                ${project.description}
            </div>
            
            <h4 class="modal-section-label">System Previews</h4>
            <div class="modal-shot-grid">
                ${project.screenshots.map(src => `
                    <div class="modal-shot-item">
                        <img src="${src}" alt="Screenshot">
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scroll
}

if (closeBtn) {
    closeBtn.onclick = function () {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Global hook for the "Open" button
window.openProject = openProject;

// Initial Run
populateGallery();
type();

// CV Dropdown - close when clicking outside
document.addEventListener('click', function (e) {
    const cvDropdown = document.getElementById('cv-dropdown');
    const cvToggle = document.getElementById('cv-toggle');
    if (cvDropdown && cvToggle && !cvToggle.contains(e.target) && !cvDropdown.contains(e.target)) {
        cvDropdown.classList.remove('show');
    }
});

// Fetch and Apply Social Links
async function loadSocialLinks() {
    try {
        const response = await fetch('Social Links.txt');
        const text = await response.text();

        // Simple parser for the text file
        const links = {};
        const lines = text.split('\n');
        lines.forEach(line => {
            const index = line.indexOf(':');
            if (index !== -1) {
                const platform = line.substring(0, index).trim();
                const url = line.substring(index + 1).trim();
                if (platform && url) {
                    links[platform.toLowerCase()] = url;
                }
            }
        });

        // Mapping file platforms to our classes
        const platformMap = {
            'facebook': '.social-facebook',
            'instagram': '.social-instagram',
            'linkdln': '.social-linkedin', // Handles the typo "Linkdln" in text file
            'linkedin': '.social-linkedin',
            'github': '.social-github'
        };

        // Apply links to all matching elements
        Object.entries(platformMap).forEach(([platform, selector]) => {
            if (links[platform]) {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => {
                    el.href = links[platform];
                });
            }
        });

    } catch (error) {
        console.error('Error loading social links:', error);
    }
}

// Run social links loader
loadSocialLinks();

// --- EmailJS Contact Form Integration ---

(function () {
    // IMPORTANT: Replace these with your own EmailJS details
    // You can get these from your EmailJS dashboard: https://dashboard.emailjs.com/
    const PUBLIC_KEY = "WY3fDUUpfojnXZtMB"; // Your Public Key
    const SERVICE_ID = "service_vv4r8ut"; // Your Service ID
    const TEMPLATE_ID = "template_tejbbm9"; // Your Template ID

    // Initialize EmailJS
    emailjs.init(PUBLIC_KEY);

    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('contact-submit');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Basic Validation
            const name = document.getElementById('contact-name').value.trim();
            const email = document.getElementById('contact-email').value.trim();
            const message = document.getElementById('contact-message').value.trim();

            if (!name || !email || !message) {
                showStatus("Please fill in all fields.", "error");
                return;
            }

            // Email format validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showStatus("Please enter a valid email address.", "error");
                return;
            }

            // Change button state
            submitBtn.disabled = true;
            submitBtn.textContent = "Sending...";
            showStatus("Sending your message...", "info");

            // Send via EmailJS
            // We pass an object with the values if we want specific custom ones, 
            // or just 'this' to send the whole form. 
            // Since you have {{title}} in your subject, let's ensure it's sent:
            const templateParams = {
                name: name,
                email: email,
                message: message,
                title: "Portfolio Contact Message"
            };

            emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
                .then(() => {
                    showStatus("Message sent successfully! I'll get back to you soon.", "success");
                    contactForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.textContent = "Send Message";

                    // Clear success message after 5 seconds
                    setTimeout(() => {
                        formStatus.textContent = "";
                        formStatus.style.display = "none";
                    }, 5000);
                }, (error) => {
                    console.error('EmailJS Error:', error);
                    showStatus("Oops! Something went wrong. Please try again later.", "error");
                    submitBtn.disabled = false;
                    submitBtn.textContent = "Send Message";
                });
        });
    }

    // Helper to show status messages
    function showStatus(message, type) {
        if (!formStatus) return;

        formStatus.textContent = message;
        formStatus.style.display = "block";
        formStatus.style.padding = "10px";
        formStatus.style.marginBottom = "10px";

        if (type === "success") {
            formStatus.style.color = "#00ff00";
            formStatus.style.background = "rgba(0, 255, 0, 0.1)";
            formStatus.style.border = "1px solid rgba(0, 255, 0, 0.3)";
        } else if (type === "error") {
            formStatus.style.color = "#ff4d4d";
            formStatus.style.background = "rgba(255, 77, 77, 0.1)";
            formStatus.style.border = "1px solid rgba(255, 77, 77, 0.3)";
        } else {
            formStatus.style.color = "#f9d806";
            formStatus.style.background = "rgba(249, 216, 6, 0.1)";
            formStatus.style.border = "1px solid rgba(249, 216, 6, 0.3)";
        }
    }
})();
