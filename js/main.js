// ---------- Skills (edit this list to change the chips) ----------
const skills = [
  { n: 'MATLAB',           i: 'fa-solid fa-chart-line',   c: '#e8590c' },
  { n: 'Simulink',         i: 'fa-solid fa-diagram-project', c: '#2563eb' },
  { n: 'AutoCAD Electrical', i: 'fa-solid fa-compass-drafting', c: '#dc2626' },
  { n: 'Proteus',          i: 'fa-solid fa-microchip',    c: '#0d9488' },
  { n: 'Multisim',         i: 'fa-solid fa-wave-square',  c: '#7c3aed' },
  { n: 'Arduino',          i: 'fa-solid fa-circle-nodes', c: '#0891b2' },
  { n: 'Solar PV Systems', i: 'fa-solid fa-solar-panel',  c: '#ca8a04' },
  { n: 'Power Electronics',i: 'fa-solid fa-bolt',         c: '#f59e0b' },
  { n: 'PLC & Automation', i: 'fa-solid fa-gears',        c: '#475569' },
  { n: 'Control Systems',  i: 'fa-solid fa-sliders',      c: '#4f46e5' },
  { n: 'Electrical Wiring',i: 'fa-solid fa-plug',         c: '#16a34a' },
  { n: 'Python',           i: 'fa-brands fa-python',      c: '#3776ab' },
  { n: 'C++',              i: 'fa-solid fa-code',         c: '#00599c' },
  { n: 'C#',               i: 'fa-solid fa-hashtag',      c: '#6d28d9' },
  { n: 'Oscilloscope & DMM', i: 'fa-solid fa-gauge-high', c: '#be185d' },
  { n: 'MS Office',        i: 'fa-brands fa-microsoft',   c: '#d97706' }
];
document.getElementById('chips').innerHTML = skills
  .map(s => `<div class="chip" style="--c:${s.c}"><i class="${s.i}"></i>${s.n}</div>`).join('');

// ---------- Mobile menu ----------
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  menu.classList.toggle('open');
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  burger.classList.remove('open');
  menu.classList.remove('open');
}));

// ---------- Header, back-to-top, active link ----------
const header = document.getElementById('header');
const toTop = document.getElementById('toTop');
const links = [...menu.querySelectorAll('a:not(.btn)')];
const sections = links.map(l => document.querySelector(l.getAttribute('href')));

function onScroll() {
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 30);
  toTop.classList.toggle('show', y > 500);
  let current = 0;
  sections.forEach((s, i) => { if (s && s.getBoundingClientRect().top <= 140) current = i; });
  links.forEach((l, i) => l.classList.toggle('active', i === current));
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ---------- Reveal on scroll ----------
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ---------- Contact form (opens the visitor's email app) ----------
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('cName').value.trim();
  const email = document.getElementById('cEmail').value.trim();
  const msg = document.getElementById('cMsg').value.trim();
  const body = encodeURIComponent(`${msg}\n\n— ${name} (${email})`);
  window.location.href = `mailto:redayislam55797@gmail.com?subject=${encodeURIComponent('Portfolio message from ' + name)}&body=${body}`;
  document.getElementById('formNote').textContent = 'Opening your email app…';
  e.target.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
