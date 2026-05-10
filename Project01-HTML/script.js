// JavaScript Interaktif untuk Portofolio
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    
    // 1. Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '12px 28px';
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
        } else {
            header.style.padding = '16px 28px';
            header.style.boxShadow = 'none';
        }
    });

    // 2. Reveal Elements on Scroll
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    document.querySelectorAll('.content-card, .card, .photo').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";
        observer.observe(el);
    });

    // 3. Form Handling (Khusus Contact Page)
    const contactFormBtn = document.querySelector('button[type="submit"]');
    if (contactFormBtn) {
        contactFormBtn.addEventListener('click', (e) => {
            const inputs = document.querySelectorAll('input, textarea');
            let allFilled = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) allFilled = false;
            });

            if (allFilled) {
                e.preventDefault();
                contactFormBtn.innerHTML = '<span>Sending...</span>';
                contactFormBtn.style.opacity = '0.7';
                
                setTimeout(() => {
                    alert('Halo Akbar! Pesan simulasi berhasil dikirim.');
                    contactFormBtn.innerHTML = 'Send Message';
                    contactFormBtn.style.opacity = '1';
                    inputs.forEach(i => i.value = '');
                }, 2000);
            }
        });
    }
});
