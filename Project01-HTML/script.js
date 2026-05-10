document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const html = document.documentElement;

    // 1. Deteksi otomatis tema warna asal (Ungu atau Biru)
    if (window.location.pathname.includes('gallery.html') || 
        window.location.pathname.includes('blog.html') || 
        window.location.pathname.includes('contact.html')) {
        body.classList.add('blue-theme');
    }

    // 2. Logika Dark/Light Mode
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
        if(themeToggle) themeToggle.textContent = savedTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeToggle.textContent = newTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
        });
    }

    // 3. Scroll Reveal Animation
    const reveal = () => {
        const items = document.querySelectorAll('.card, .content-card, .photo, .hero');
        items.forEach(item => {
            const speed = 0.15;
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                item.classList.add('active');
                item.classList.add('reveal');
            }
        });
    };

    window.addEventListener('scroll', reveal);
    reveal();
});
