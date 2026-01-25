document.addEventListener('DOMContentLoaded', function() {
            const sliderContainer = document.querySelector('.slider-container');
            const testimonials = document.querySelectorAll('.testimonial');
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            const dots = document.querySelectorAll('.dot');
            
            let currentIndex = 0;
            const totalTestimonials = testimonials.length;
            
            // Function to update slider position
            function updateSlider() {
                sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
                
                // Update active dot
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentIndex);
                });
            }
            
            // Next button click event
            nextBtn.addEventListener('click', function() {
                currentIndex = (currentIndex + 1) % totalTestimonials;
                updateSlider();
            });
            
            // Previous button click event
            prevBtn.addEventListener('click', function() {
                currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
                updateSlider();
            });
            
            // Dot click events
            dots.forEach(dot => {
                dot.addEventListener('click', function() {
                    currentIndex = parseInt(this.getAttribute('data-index'));
                    updateSlider();
                });
            });
            
            // Auto slide every 5 seconds
            setInterval(function() {
                currentIndex = (currentIndex + 1) % totalTestimonials;
                updateSlider();
            }, 5000);
        });