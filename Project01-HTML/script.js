document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');

    // 1. Logika Pemilih Tema (Dark/Light)
    const currentTheme = localStorage.getItem('theme') || 'dark'; // Default ke dark
    html.setAttribute('data-theme', currentTheme);
    if(themeToggle) themeToggle.textContent = currentTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const theme = html.getAttribute('data-theme');
            const newTheme = theme === 'dark' ? 'light' : 'dark';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeToggle.textContent = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
        });
    }

    // 2. Animasi Fade In/Out Otomatis
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .content-card, .photo, .hero, .btn').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});
