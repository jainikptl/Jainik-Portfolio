        // ============================================
        // CORE FUNCTIONALITY
        // ============================================

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
  
        // Project description toggle
        function toggleDescription(id) {
            const preview = document.getElementById(`desc-preview-${id}`);
            const full = document.getElementById(`desc-full-${id}`);
            const button = document.querySelector(`[onclick="toggleDescription(${id})"]`);
            
            if (full.hidden) {
                preview.style.display = 'none';
                full.hidden = false;
                button.textContent = 'Read Less';
            } else {
                preview.style.display = 'block';
                full.hidden = true;
                button.textContent = 'Read More';
            }
        }
  
        // Form submission handler
        function handleFormSubmit(event) {
            event.preventDefault();
            
            const formData = new FormData(event.target);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // You can replace this with your actual form submission logic
            alert(`Thank you ${name}! Your message has been sent. I'll get back to you soon.`);
            
            // Reset form
            event.target.reset();
        }
  
        // ============================================
        // SCROLL ANIMATIONS
        // ============================================
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
  
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, observerOptions);
  
        // Observe all sections for scroll animations
        document.querySelectorAll('.section').forEach(section => {
            section.classList.add('animate-on-scroll');
            observer.observe(section);
        });
  
        // ============================================
        // GRID OVERLAY TOGGLE
        // ============================================
        
        let gridVisible = true;
        document.addEventListener('keydown', (e) => {
            if (e.key === 'g' || e.key === 'G') {
                const grid = document.getElementById('gridOverlay');
                gridVisible = !gridVisible;
                grid.style.display = gridVisible ? 'block' : 'none';
            }
        });
  
        // ============================================
        // MAGNET EFFECT FOR BUTTONS
        // ============================================
        
        document.querySelectorAll('.magnet').forEach(magnet => {
            magnet.addEventListener('mousemove', (e) => {
                const rect = magnet.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                magnet.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            
            magnet.addEventListener('mouseleave', () => {
                magnet.style.transform = 'translate(0px, 0px)';
            });
        });
  
        // ============================================
        // TYPING EFFECT FOR HERO TEXT
        // ============================================
        
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
  
        // Initialize typing effect on load
        window.addEventListener('load', () => {
            const greeting = document.querySelector('.greet-item');
            if (greeting) {
                const originalText = greeting.textContent;
                typeWriter(greeting, originalText, 50);
            }
        });
  
        // ============================================
        // PARALLAX SCROLL EFFECTS
        // ============================================
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            // Parallax effect for geometric overlays
            document.querySelectorAll('.geo-overlay').forEach((overlay, index) => {
                const speed = 0.5 + (index * 0.1);
                overlay.style.transform = `translateY(${scrolled * speed}px)`;
            });
            
            // Parallax effect for skill badges
            document.querySelectorAll('.skill-badge').forEach((badge, index) => {
                const speed = 0.3 + (index * 0.1);
                badge.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
  
        // ============================================
        // THEME VARIATIONS (Easter Egg)
        // ============================================
        
        let themeIndex = 0;
        const themes = [
            { primary: '#00ff41', accent: '#ff006b' },
            { primary: '#ff006b', accent: '#0066ff' },
            { primary: '#0066ff', accent: '#ffff00' },
            { primary: '#ffff00', accent: '#00ff41' }
        ];
  
        document.addEventListener('keydown', (e) => {
            if (e.key === 't' || e.key === 'T') {
                themeIndex = (themeIndex + 1) % themes.length;
                const theme = themes[themeIndex];
                document.documentElement.style.setProperty('--electric', theme.primary);
                document.documentElement.style.setProperty('--accent-pink', theme.accent);
            }
        });
  
        // ============================================
        // GLITCH EFFECT ON HOVER
        // ============================================
        
        document.querySelectorAll('.hero-name .name-line').forEach(line => {
            line.addEventListener('mouseenter', () => {
                line.classList.add('glitch');
                line.setAttribute('data-text', line.textContent);
            });
            
            line.addEventListener('mouseleave', () => {
                line.classList.remove('glitch');
            });
        });
  
        // ============================================
        // PERFORMANCE OPTIMIZATIONS
        // ============================================
        
        // Lazy load images
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
  
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
  
        // Throttle scroll events
        let ticking = false;
        function updateScrollEffects() {
            // Your scroll-based animations here
            ticking = false;
        }
  
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        });
  
        console.log('🚀 Brutal Portfolio loaded successfully!');
        console.log('💡 Press "G" to toggle grid overlay');
        console.log('🎨 Press "T" to cycle through theme variations');