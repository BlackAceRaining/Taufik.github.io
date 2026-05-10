document.addEventListener('DOMContentLoaded', () => {
    // --- 1. FITUR DARK/LIGHT MODE ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.documentElement;
    
    // Cek penyimpanan lokal
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    updateToggleText(savedTheme);

    if(themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateToggleText(newTheme);
        });
    }

    function updateToggleText(theme) {
        if(themeToggle) {
            themeToggle.textContent = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
        }
    }

    // --- 2. FITUR SCROLL REVEAL (Animasi Muncul) ---
    const revealElements = () => {
        const elements = document.querySelectorAll('.content-card, .card, .photo, .hero');
        elements.forEach(el => {
            el.classList.add('reveal'); // Tambahkan class reveal otomatis
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealElements);
    revealElements(); // Jalankan sekali saat load

    // --- 3. DYNAMIC BUBBLE TEXT (Opsional) ---
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', () => {
            if (button.textContent.includes('Gallery')) {
                button.setAttribute('data-bubble', 'Lihat Foto! 📸');
            }
        });
    });
});
