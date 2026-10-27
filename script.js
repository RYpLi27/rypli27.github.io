const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const mainView = $('#main-view'), projView = $('#project-view');

/* ---------- Highlights carousel ---------- */
const car = $('#carousel');
car.innerHTML = PROJECTS.map(p => `
  <article class="slide" style="background-image:url('${esc(p.image)}')">
    <div class="cap"><small>${esc(p.category)}</small><h3>${esc(p.title)}</h3><p>${esc(p.short)}</p></div>
    <div class="progress"></div>
  </article>`).join('');
const slides = [...car.children];
let cur = 0, timer;

function layout() {
  const n = slides.length;
  slides.forEach((s, i) => {
    let d = ((i - cur) % n + n) % n; if (d > n / 2) d -= n;
    s.className = 'slide ' + (Math.abs(d) <= 1 ? 'pos-' + d : 'hide');
    const bar = s.querySelector('.progress');
    bar.classList.remove('run'); void bar.offsetWidth;
    if (d === 0) bar.classList.add('run');
  });
}
function go(i) { cur = (i + slides.length) % slides.length; layout(); restart(); }
function restart() { clearInterval(timer); timer = setInterval(() => go(cur + 1), 6000); }
slides.forEach((s, i) => s.addEventListener('click', () => {
  if (i === cur) location.hash = '#project/' + PROJECTS[i].id; else go(i);
}));
car.addEventListener('mouseenter', () => clearInterval(timer));
car.addEventListener('mouseleave', restart);
layout(); restart();

/* ---------- Projects grid ---------- */
$('#project-grid').innerHTML = PROJECTS.map(p => `
  <a class="card" href="#project/${esc(p.id)}">
    <img src="${esc(p.image)}" alt="" loading="lazy">
    <div><small>${esc(p.category)}</small><h3>${esc(p.title)}</h3></div>
  </a>`).join('');

/* ---------- Project detail page ---------- */
const chips = a => a.map(t => `<li>${esc(t)}</li>`).join('');
function renderProject(p) {
  projView.innerHTML = `
    <section class="pd-hero" style="background-image:url('${esc(p.image)}')"><div class="pd-in">
      <a class="back" href="#highlights">← Back to projects</a>
      <small>${esc(p.category)}</small><h1>${esc(p.title)}</h1><p>${esc(p.summary)}</p>
      ${p.download ? `<a class="btn" href="${esc(p.download)}" target="_blank" rel="noopener">Download Build</a>` : ''}
    </div></section>
    ${p.overview ? `<section class="pd-sec"><h2>Project Overview</h2><p>${esc(p.overview)}</p>
      <div class="tags"><b>Programs &amp; tools</b><ul class="chips" style="margin:0">${chips(p.tools)}</ul></div></section>` : ''}
    ${p.role ? `<section class="pd-sec"><h2>My Role</h2><p>${esc(p.role)}</p>
      <div class="tags"><b>Responsibilities</b><ul class="chips" style="margin:0">${chips(p.responsibilities)}</ul></div></section>` : ''}
    ${p.gallery.length ? `<section class="pd-sec"><h2>Gallery</h2><div class="gallery">${
      p.gallery.map(src => `<img src="${esc(src)}" alt="" loading="lazy">`).join('')}</div></section>` : ''}
    ${p.versions.length ? `<section class="pd-sec"><div class="timeline">${
      p.versions.map(v => `<div class="ver"><span>${esc(v.label)}</span><img src="${esc(v.image)}" alt=""></div>`).join('')}</div></section>` : ''}`;
  projView.querySelectorAll('.gallery img').forEach(img => img.addEventListener('click', () => {
    const lb = document.createElement('div'); lb.className = 'lightbox';
    lb.innerHTML = `<img src="${img.src}" alt="">`; lb.onclick = () => lb.remove(); document.body.append(lb);
  }));
}

/* ---------- Routing ---------- */
function route() {
  const h = location.hash.slice(1), m = h.match(/^project\/(.+)$/);
  const p = m && PROJECTS.find(x => x.id === m[1]);
  if (p) { renderProject(p); mainView.hidden = true; projView.hidden = false; window.scrollTo(0, 0); }
  else { projView.hidden = true; mainView.hidden = false; const t = h && document.getElementById(h); if (t) t.scrollIntoView(); }
}
window.addEventListener('hashchange', route);
route();
