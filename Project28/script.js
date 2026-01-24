document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const planName = this.closest('.pricing-card').querySelector('.plan-name').textContent;
        alert(`Thank you for your interest in the ${planName}! We'll contact you shortly.`);
    });
});