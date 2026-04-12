export const PAD = "clamp(52px, 12vw, 220px)"

export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500&family=Instrument+Serif:ital@0;1&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: #fff; color: #0a0a0a; font-family: 'Geist Mono', 'Courier New', monospace; font-size: 13px; font-weight: 400; line-height: 1.7; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
  ::selection { background: #0a0a0a; color: #fff; }
  @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
  @keyframes pulseGreen { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.6; transform:scale(0.85); } }
  @keyframes scrollLine {
    0% { transform: scaleY(0); transform-origin: top; }
    50% { transform: scaleY(1); transform-origin: top; }
    51% { transform-origin: bottom; }
    100% { transform: scaleY(0); transform-origin: bottom; }
  }
  .hero-link::after { content:''; position:absolute; bottom:8px; left:0; right:0; height:1px; background:#0a0a0a; transform:scaleX(0); transform-origin:left; transition:transform 0.3s ease; }
  .hero-link:hover::after { transform:scaleX(1); }
  .writing-row:hover > div:first-child > div:first-child { color: #666; transition: color 0.2s; }
  @media (max-width: 900px) {
    .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .exp-row { grid-template-columns: 1fr 1fr !important; }
    .exp-row > *:last-child { text-align: left !important; }
  }
  @media (max-width: 640px) {
    .exp-row { grid-template-columns: 1fr !important; gap: 10px !important; }
    .exp-row > *:last-child { text-align: left !important; }
    .projects-grid { grid-template-columns: 1fr !important; }
    .skills-grid { grid-template-columns: 1fr !important; }
    .writing-row { grid-template-columns: 1fr !important; }
    .writing-row > *:last-child { display: none; }
    .footer-shell {
      align-items: flex-start !important;
      gap: 22px !important;
      padding-top: 36px !important;
      padding-bottom: 36px !important;
    }
    .footer-meta {
      width: 100%;
      align-items: flex-start !important;
      text-align: left !important;
    }
    .footer-links {
      display: flex;
      flex-wrap: wrap;
      gap: 10px 20px;
      line-height: 1.7 !important;
    }
    .footer-link { display: inline-block !important; }
    .footer-note {
      max-width: 18rem;
      line-height: 1.6;
    }
  }
`
