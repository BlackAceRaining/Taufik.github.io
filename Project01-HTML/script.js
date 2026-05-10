document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // 1. Deteksi Halaman untuk Menjaga Warna Tema Asli
    // Jika halaman selain index, gunakan tema biru gelap
    if (window.location.pathname.includes('gallery.html') || 
        window.location.pathname.includes('blog.html') || 
        window.location.pathname.includes('contact.html')) {
        body.style.backgroundColor = "#07132c";
    } else {
        body.style.backgroundColor = "#2d1b4e";
    }

    // 2. Fungsi Scroll Reveal (Elemen Muncul Perlahan)
    const revealElements = () => {
        const items = document.querySelectorAll('.card, .content-card, .photo, .hero');
        items.forEach(item => {
            item.classList.add('reveal'); // Tambahkan class animasi
            const rect = item.getBoundingClientRect();
            const isVisible = rect.top < (window.innerHeight - 100);
            
            if (isVisible) {
                item.classList.add('active');
            }
        });
    };

    // Jalankan saat scroll dan saat pertama kali halaman dibuka
    window.addEventListener('scroll', revealElements);
    revealElements();

    // 3. Feedback Tombol (Opsional)
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mousedown', () => {
            button.style.transform = "translateY(-2px) scale(0.95)";
        });
        button.addEventListener('mouseup', () => {
            button.style.transform = "translateY(-10px) scale(1)";
        });
    });
});
