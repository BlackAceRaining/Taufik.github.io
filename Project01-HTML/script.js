/* ROOT VARIABLES UNTUK DARK & LIGHT MODE */
:root {
    /* Mode Terang (Default) */
    --primary: #8b5cf6;
    --bg-body: #f8fafc;
    --bg-header: #ffffff;
    --bg-card: #ffffff;
    --text-main: #1e293b;
    --text-muted: #64748b;
    --border-color: #e2e8f0;
}

[data-theme="dark"] {
    /* Mode Gelap */
    --bg-body: #07132c;
    --bg-header: #081737;
    --bg-card: #0f1b3d;
    --text-main: #e2e8f0;
    --text-muted: #94a3b8;
    --border-color: #1c2b5a;
}

/* GLOBAL STYLES */
* { box-sizing: border-box; margin: 0; padding: 0; transition: background-color 0.4s ease, color 0.4s ease; }

body {
    background-color: var(--bg-body);
    color: var(--text-main);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    overflow-x: hidden;
}

header {
    background: var(--bg-header);
    border-bottom: 2px solid var(--primary);
    padding: 16px 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 100;
    backdrop-filter: blur(10px);
}

/* NAVIGASI & THEME TOGGLE */
nav ul { list-style: none; display: flex; gap: 16px; align-items: center; }
nav a { text-decoration: none; color: var(--text-main); font-weight: 600; position: relative; }

#theme-toggle {
    background: var(--primary);
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.8rem;
    transition: transform 0.2s;
}

#theme-toggle:hover { transform: scale(1.1); }

/* FITUR BUBBLE POP-UP PADA TOMBOL */
.btn {
    position: relative;
    display: inline-block;
    padding: 10px 16px;
    border-radius: 8px;
    border: 2px solid var(--primary);
    color: #fff !important;
    background: var(--primary);
    text-decoration: none;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s;
}

/* Bubble Element */
.btn::after {
    content: "Klik Disini! ✨"; 
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(0);
    background: var(--text-main);
    color: var(--bg-body);
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 11px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.btn:hover::after {
    opacity: 1;
    bottom: 130%; /* Meluncur ke atas */
    transform: translateX(-50%) translateY(-10px);
}

/* ANIMASI MUNCUL SAAT SCROLL */
.reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out;
}

.reveal.active {
    opacity: 1;
    transform: translateY(0);
}

/* STYLE KARTU AGAR SESUAI TEMA */
.content-card, .card, .photo {
    background: var(--bg-card) !important;
    border: 1px solid var(--border-color) !important;
    color: var(--text-main) !important;
}
