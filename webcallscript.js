// Initialize everything when the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Function to close all dropdowns
    function closeAllDropdowns() {
        const dropdowns = document.querySelectorAll('.dropdown-content, .navbar-collapse');
        dropdowns.forEach(dropdown => {
            if (dropdown.classList.contains('show') || dropdown.classList.contains('in')) {
                dropdown.classList.remove('show', 'in');
            }
        });
        // Hide the overlay
        const overlay = document.getElementById('dropdown-overlay');
        if (overlay) {
            overlay.style.display = 'none';
        }
    }

    // Close dropdowns when clicking anywhere on the document
    document.addEventListener('click', function(e) {
        // Check if the click was not on the dropdown button or its children
        if (!e.target.closest('.dropbtn') && !e.target.closest('.dropdown-content')) {
            closeAllDropdowns();
        }
    });

    // Harvey dropdown functionality
    const dropbtn = document.querySelector('.dropbtn');
    if (dropbtn) {
        dropbtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const dropdown = document.getElementById('myDropdown');
            const isOpen = dropdown.classList.contains('show');
            
            // Close all dropdowns first
            closeAllDropdowns();
            
            // Then open this one if it wasn't open
            if (!isOpen) {
                dropdown.classList.add('show');
                // Show the overlay
                const overlay = document.getElementById('dropdown-overlay');
                if (overlay) {
                    overlay.style.display = 'block';
                }
            }
        });
    }

    // Hamburger menu functionality
    const navbarToggle = document.querySelector('.navbar-toggle');
    if (navbarToggle) {
        navbarToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const navbarCollapse = document.getElementById('bs-example-navbar-collapse-1');
            const isOpen = navbarCollapse.classList.contains('in');
            
            // Close all dropdowns first
            closeAllDropdowns();
            
            // Then open this one if it wasn't open
            if (!isOpen) {
                navbarCollapse.classList.add('in');
            }
        });
    }

    // Close dropdowns when clicking the overlay
    const overlay = document.getElementById('dropdown-overlay');
    if (overlay) {
        overlay.addEventListener('click', function() {
            closeAllDropdowns();
        });
    }

    // Add touch event support for mobile
    window.addEventListener('touchstart', function(event) {
        if (!event.target.matches('.dropbtn') && 
            !event.target.matches('.dropbtn *') && 
            !event.target.matches('.navbar-toggle') && 
            !event.target.matches('.navbar-toggle *')) {
            closeAllDropdowns();
        }
    });

    // Handle iframe clicks
    const iframe = document.getElementById('barista-iframe');
    if (iframe) {
        iframe.addEventListener('load', function() {
            try {
                iframe.contentWindow.document.addEventListener('click', function() {
                    closeAllDropdowns();
                });
            } catch (e) {
                // Cross-origin iframe, use postMessage
                window.addEventListener('message', function(event) {
                    if (event.data === 'iframe-clicked') {
                        closeAllDropdowns();
                    }
                });
            }
        });
    }

    // Form validation and submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            let isValid = true;
            
            if (!name.value.trim()) {
                name.classList.add('is-invalid');
                isValid = false;
            } else {
                name.classList.remove('is-invalid');
            }
            
            if (!email.value.trim() || !isValidEmail(email.value)) {
                email.classList.add('is-invalid');
                isValid = false;
            } else {
                email.classList.remove('is-invalid');
            }
            
            if (!subject.value.trim()) {
                subject.classList.add('is-invalid');
                isValid = false;
            } else {
                subject.classList.remove('is-invalid');
            }
            
            if (!message.value.trim()) {
                message.classList.add('is-invalid');
                isValid = false;
            } else {
                message.classList.remove('is-invalid');
            }
            
            if (isValid) {
                // Here you would typically send the form data to a server
                console.log('Form submitted successfully');
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            }
        });
    }

    // Helper function to validate email
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Call support button functionality
    const callSupportBtn = document.getElementById('callSupportBtn');
    if (callSupportBtn) {
        callSupportBtn.addEventListener('click', function() {
            // Here you would typically implement the call functionality
            console.log('Call support button clicked');
            alert('Calling support...');
        });
    }
}); 