document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.btn-prev');
    const nextBtn = document.querySelector('.btn-next');
    const dotsContainer = document.querySelector('.dots');
    let currentSlide = 0;
    let slideInterval;
    const slideIntervalTime = 5000; // 5 seconds

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    // Next slide function
    const nextSlide = () => {
        goToSlide((currentSlide + 1) % slides.length);
    };

    // Previous slide function
    const prevSlide = () => {
        goToSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    // Go to specific slide
    const goToSlide = (index) => {
        // Remove active class from current slide and dot
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        // Update current slide index
        currentSlide = index;
        
        // Add active class to new slide and dot
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        
        // Reset the auto-slide interval
        resetInterval();
    };

    // Auto slide
    const startSlideShow = () => {
        slideInterval = setInterval(nextSlide, slideIntervalTime);
    };

    // Reset interval timer
    const resetInterval = () => {
        clearInterval(slideInterval);
        startSlideShow();
    };

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Pause on hover
    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    slider.addEventListener('mouseleave', startSlideShow);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });

    // Start the slideshow
    startSlideShow();
});
