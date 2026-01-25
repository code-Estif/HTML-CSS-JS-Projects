const toggle = document.getElementById('dark-mode-toggle');
        const body = document.body;

        // Check for saved theme preference or respect OS preference
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        const currentTheme = localStorage.getItem('theme');
        
        if (currentTheme === 'light' || (!currentTheme && !prefersDarkScheme.matches)) {
            body.classList.add('light-mode');
            toggle.checked = true;
        }

        toggle.addEventListener('change', function() {
            if (this.checked) {
                body.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
            } else {
                body.classList.remove('light-mode');
                localStorage.setItem('theme', 'dark');
            }
        });