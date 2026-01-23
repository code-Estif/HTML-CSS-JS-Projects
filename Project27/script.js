document.addEventListener('DOMContentLoaded', function() {
            const sidebar = document.querySelector('.sidebar');
            const toggleBtn = document.querySelector('.toggle-btn');
            const mobileToggle = document.querySelector('.mobile-toggle');
            const overlay = document.querySelector('.overlay');
            
            toggleBtn.addEventListener('click', function() {
                sidebar.classList.toggle('collapsed');
            });
            mobileToggle.addEventListener('click', function() {
                sidebar.classList.add('active');
                overlay.classList.add('active');
            });
            
            overlay.addEventListener('click', function() {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
            });
            
            const menuItems = document.querySelectorAll('.menu-item');
            menuItems.forEach(item => {
                item.addEventListener('click', function() {
                    menuItems.forEach(i => i.classList.remove('active'));
                    this.classList.add('active');
                    
                    if (window.innerWidth <= 768) {
                        sidebar.classList.remove('active');
                        overlay.classList.remove('active');
                    }
                });
            });
            
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    sidebar.classList.remove('active');
                    overlay.classList.remove('active');
                    sidebar.classList.remove('collapsed');
                }
            });
        });