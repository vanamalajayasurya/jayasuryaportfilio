window.addEventListener("pageshow", function () {

    const loader = document.getElementById("page-loader");

    // Always reset loader when page comes back
    loader.classList.remove("active");

    // Remove old event listeners (important fix)
    document.querySelectorAll('.project-link').forEach(link => {
        link.replaceWith(link.cloneNode(true));
    });

    // Re-select fresh links
    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            loader.classList.add('active');

            const url = this.href;

            requestAnimationFrame(() => {
                setTimeout(() => {
                    window.location.href = url;
                }, 1300); // slight increase for visibility
            });
        });
    });


    // ============== ADVANCED CURSOR ANIMATION ==============
class CursorAnimator {
    constructor() {
        this.cursor = document.querySelector('.cursor');
        this.x = 0;
        this.y = 0;
        this.mouseX = 0;
        this.mouseY = 0;
        this.isActive = false;
        this.trails = [];
        this.maxTrails = 12;
        this.isOnClickable = false;

        this.init();
    }

    init() {
        // Track mouse movement
        document.addEventListener('mousemove', (e) => this.onMouseMove(e));
        document.addEventListener('mousedown', () => this.onMouseDown());
        document.addEventListener('mouseup', () => this.onMouseUp());

        // Detect clickable elements
        this.addClickableDetection();

        // Start animation loop
        this.animate();
    }

    onMouseMove(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;

        // Create trail effect
        this.createTrail();

        // Detect if hovering clickable element
        const element = document.elementFromPoint(e.clientX, e.clientY);
        this.isOnClickable = this.isClickable(element);
    }

    onMouseDown() {
        this.cursor.classList.add('active');
        this.isActive = true;
    }

    onMouseUp() {
        this.cursor.classList.remove('active');
        this.isActive = false;
    }

    createTrail() {
        // Create particle trails with some randomness
        if (Math.random() > 0.7) {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.left = this.mouseX + 'px';
            trail.style.top = this.mouseY + 'px';
            
            // Random offset for natural feel
            const offsetX = (Math.random() - 0.5) * 20;
            const offsetY = (Math.random() - 0.5) * 20;
            
            trail.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            document.body.appendChild(trail);

            this.trails.push({ el: trail, life: 100 });

            // Remove old trails
            if (this.trails.length > this.maxTrails) {
                const oldTrail = this.trails.shift();
                oldTrail.el.remove();
            }
        }

        // Fade out trails
        this.trails.forEach((trail, index) => {
            trail.life -= 5;
            trail.el.style.opacity = trail.life / 100;

            if (trail.life <= 0) {
                trail.el.remove();
                this.trails.splice(index, 1);
            }
        });
    }

    isClickable(element) {
        if (!element) return false;
        
        const clickableSelectors = ['a', 'button', '.btn', '.nav-link', '.project-card', 
                                   '.tech-card', '.contact-card', '.info-card', '.timeline-content',
                                   'input', 'textarea', 'select'];
        
        return clickableSelectors.some(selector => 
            element.matches(selector) || element.closest(selector)
        );
    }

    addClickableDetection() {
        // Add visual feedback when hovering clickable elements
        document.addEventListener('mouseover', (e) => {
            if (this.isClickable(e.target)) {
                this.cursor.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.8), inset 0 0 15px rgba(0, 212, 255, 0.5), 0 0 50px rgba(79, 157, 255, 0.6)';
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (this.isClickable(e.target)) {
                this.cursor.style.boxShadow = '0 0 15px rgba(0, 212, 255, 0.5), inset 0 0 10px rgba(0, 212, 255, 0.3)';
            }
        });
    }

    animate() {
        // Smooth easing for cursor
        this.x += (this.mouseX - this.x) * 0.25;
        this.y += (this.mouseY - this.y) * 0.25;

        // Update cursor position
        this.cursor.style.left = this.x + 'px';
        this.cursor.style.top = this.y + 'px';

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize cursor when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new CursorAnimator();
    });
} else {
    new CursorAnimator();
}

window.addEventListener("pageshow", function () {

    const loader = document.getElementById("page-loader");

    // Always reset loader when page comes back
    loader.classList.remove("active");

    // Remove old event listeners (important fix)
    document.querySelectorAll('.project-link').forEach(link => {
        link.replaceWith(link.cloneNode(true));
    });

    // Re-select fresh links
    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            loader.classList.add('active');

            const url = this.href;

            requestAnimationFrame(() => {
                setTimeout(() => {
                    window.location.href = url;
                }, 1300); // slight increase for visibility
            });
        });
    });

});

});