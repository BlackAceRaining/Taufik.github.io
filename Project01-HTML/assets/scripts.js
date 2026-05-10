const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const storedTheme = localStorage.getItem('portfolio-theme') || 'dark';
const revealElements = document.querySelectorAll('.reveal');
const page = document.body.dataset.page;

function setTheme(mode) {
  root.dataset.theme = mode;
  if (themeToggle) {
    themeToggle.textContent = mode === 'light' ? '☀️' : '🌙';
  }
}

if (themeToggle) {
  setTheme(storedTheme);
  themeToggle.addEventListener('click', () => {
    const nextMode = root.dataset.theme === 'light' ? 'dark' : 'light';
    setTheme(nextMode);
    localStorage.setItem('portfolio-theme', nextMode);
  });
}

if (revealElements.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });
  revealElements.forEach((element) => observer.observe(element));
}

function createPhotoModal() {
  const modal = document.createElement('div');
  modal.className = 'photo-modal';
  modal.innerHTML = `
    <button class="close-modal" aria-label="Close image">×</button>
    <div class="modal-card">
      <img src="" alt="">
      <div class="caption"></div>
    </div>
  `;
  document.body.append(modal);
  const closeButton = modal.querySelector('.close-modal');
  closeButton.addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('open');
    }
  });
  return modal;
}

if (page === 'gallery') {
  const photos = document.querySelectorAll('.photo');
  const modal = createPhotoModal();
  photos.forEach((photo) => {
    const image = photo.querySelector('img');
    const title = photo.querySelector('.photo-title')?.textContent || image.alt;
    photo.addEventListener('click', () => {
      const modalImg = modal.querySelector('img');
      const caption = modal.querySelector('.caption');
      modalImg.src = image.src;
      modalImg.alt = image.alt;
      caption.textContent = title;
      modal.classList.add('open');
    });
  });
}

if (page === 'contact') {
  const form = document.querySelector('#contact-form');
  const status = document.querySelector('.form-status');

  if (form && status) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = form.querySelector('#name');
      const email = form.querySelector('#email');
      const message = form.querySelector('#message');
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());

      if (!name.value.trim() || !emailValid || !message.value.trim()) {
        status.textContent = 'Silakan lengkapi data dengan benar sebelum mengirim pesan.';
        status.style.color = '#fb7185';
        return;
      }

      status.textContent = 'Terima kasih! Pesan Anda sudah siap dikirim.';
      status.style.color = '#34d399';
      form.reset();
    });
  }
}

const navLinks = document.querySelectorAll('nav a');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
navLinks.forEach((link) => {
  const href = link.getAttribute('href');
  if (href === currentPage) {
    link.classList.add('active');
  }
});

const heroSection = document.querySelector('.hero, .gallery-hero, .blog-hero, .contact-hero');
if (heroSection) {
  heroSection.classList.add('reveal');
}
const cards = document.querySelectorAll('.card, .content-card, .photo, .contact-container');
cards.forEach((item) => item.classList.add('reveal'));
