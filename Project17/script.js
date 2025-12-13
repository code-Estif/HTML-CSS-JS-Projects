const toggleBtn = document.getElementById('toggleBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function preventBodyScroll() {
    if (window.innerWidth <= 768) {
        if (sidebar.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    } else {
        document.body.style.overflow = 'auto';
    }
}

function toggleSidebar() {
    const isActive = sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    
    toggleBtn.setAttribute('aria-expanded', isActive);
    sidebar.setAttribute('aria-hidden', !isActive);
    overlay.setAttribute('aria-hidden', !isActive);
    
    if (isActive) {
        toggleBtn.classList.add('hide');
        preventBodyScroll();
        setTimeout(() => closeBtn.focus(), 100);
    } else {
        toggleBtn.classList.remove('hide');
        preventBodyScroll();
        toggleBtn.focus();
    }
}

toggleBtn.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
        toggleSidebar();
    }
});

