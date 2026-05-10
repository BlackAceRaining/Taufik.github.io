document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // 1. Sinkronisasi Warna Tema Berdasarkan Halaman
    const updatePageTheme = () => {
        const path = window.location.pathname;
        if (path.includes('gallery.html') || path.includes('blog.html') || path.includes('contact.html')) {
            body.style.backgroundColor = "#07132c";
        } else {
            body.style.backgroundColor = "#2d1b4e";
        }
    };

    // 2. Logika Fade In & Fade Out saat Scroll
    const handleScrollAnimation = () => {
        const observerOptions = {
            threshold: 0.1, // Muncul jika 10% elemen terlihat
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Efek Fade In
                    entry.target.classList.add('active');
                } else {
                    // Efek Fade Out (Opsional: hapus baris ini jika ingin muncul sekali saja)
                    entry.target.classList.remove('active');
                }
            });
        }, observerOptions);

        // Targetkan semua elemen penting
        const elementsToAnimate = document.querySelectorAll('.card, .content-card, .photo, .hero, .hero-img, h1, h2');
        elementsToAnimate.forEach(el => {
            el.classList.add('reveal');
            observer.observe(el);
        });
    };

    updatePageTheme();
    handleScrollAnimation();
});
