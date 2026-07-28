/* ===========================================================
   YouTube AI Launchpad — landing page behavior + content data
   =========================================================== */

// ---------- ICONS (inline SVG strings, stroke style, signal-green) ----------
const icon = {
  question: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  scissors: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 9a3 3 0 100-6 3 3 0 000 6zm0 0v12m12-12a3 3 0 100-6 3 3 0 000 6zm0 0L6 21m12-12L9 18"/></svg>`,
  compass: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 100-18 9 9 0 000 18zm3-13l-4 2-2 4 4-2 2-4z"/></svg>`,
  trendDown: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"/></svg>`,
  cash: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm3-5a1 1 0 100-2 1 1 0 000 2z"/></svg>`,
  check: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>`,
  database: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3zm0 0v10c0 1.66 3.58 3 8 3s8-1.34 8-3V7m-16 5c0 1.66 3.58 3 8 3s8-1.34 8-3"/></svg>`,
  doc: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,
  list: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17h6m-6-4h6m-6-4h6M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>`,
  image: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M14 8h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
  toolbox: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m-2 0h12a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2z"/></svg>`,
  users: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-2.13a4 4 0 100-8 4 4 0 000 8zm6 2a4 4 0 10-3.87-5"/></svg>`,
  mic: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"/></svg>`,
};

// ---------- DATA ----------
const problems = [
  { icon: icon.compass, title: "Don't Know Where to Start", body: "Too many tools, too many opinions, no clear sequence to follow." },
  { icon: icon.scissors, title: "No Editing Skills", body: "Assume they need Premiere Pro and years of practice to publish." },
  { icon: icon.question, title: "Can't Find Profitable Niches", body: "Pick topics by gut feeling instead of demand and payout data." },
  { icon: icon.trendDown, title: "Low Video Views", body: "Upload consistently but the algorithm never picks it up." },
  { icon: icon.cash, title: "No Monetization Strategy", body: "Hit watch-hour requirements with no plan to convert views to income." },
];

const solutionBenefits = [
  "A repeatable system, not a one-off tutorial",
  "Built entirely around phone-based, faceless workflows",
  "AI tools mapped to each production step",
  "Goes from zero to your first monetized upload",
];

const dashboardModules = [
  "01 · Fundamentals — complete",
  "02 · Channel Setup — complete",
  "03 · AI Script Writing — in progress",
  "04 · AI Voice Generation — locked",
  "05 · Video Creation — locked",
];

const modules = [
  { n: "01", title: "YouTube Fundamentals", lessons: 6, mins: 48 },
  { n: "02", title: "Channel Setup", lessons: 5, mins: 35 },
  { n: "03", title: "AI Script Writing", lessons: 8, mins: 64 },
  { n: "04", title: "AI Voice Generation", lessons: 6, mins: 42 },
  { n: "05", title: "Video Creation", lessons: 9, mins: 71 },
  { n: "06", title: "Thumbnail Design", lessons: 5, mins: 33 },
  { n: "07", title: "SEO & Ranking", lessons: 7, mins: 56 },
  { n: "08", title: "Monetization", lessons: 8, mins: 60 },
  { n: "09", title: "Scaling Channels", mins: 45, lessons: 6 },
  { n: "10", title: "Automation Systems", lessons: 8, mins: 67 },
];

const bonuses = [
  { icon: icon.database, title: "Niche Database", value: "$197", body: "200+ pre-researched, validated faceless niches with payout data." },
  { icon: icon.doc, title: "Script Templates", value: "$147", body: "Proven hook-retention-CTA frameworks for 5 video formats." },
  { icon: icon.list, title: "SEO Checklists", value: "$97", body: "Step-by-step ranking checklist for every upload." },
  { icon: icon.image, title: "Thumbnail Templates", value: "$127", body: "Editable, high-CTR templates across top niches." },
  { icon: icon.toolbox, title: "AI Tool Vault", value: "$247", body: "Curated stack of every AI tool used in the course, with setup guides." },
  { icon: icon.users, title: "Community Access", value: "$197", body: "Private group of creators building in public alongside you." },
  { icon: icon.mic, title: "Live Coaching Sessions", value: "$235", body: "Monthly live calls to review channels and troubleshoot growth." },
];

const testimonials = [
  { name: "Chidinma O.", role: "Started Month 1", quote: "Hit my first $400 month before I finished Module 8. The script templates alone paid for the course.", stat: "+18.4K subs" },
  { name: "Tunde A.", role: "Side Hustler", quote: "I record nothing, show my face nowhere, and my second channel outgrew my first in six weeks.", stat: "+9.1K subs" },
  { name: "Grace N.", role: "Full-time Creator", quote: "The automation module turned this from a daily chore into something that runs while I sleep.", stat: "$2,840 / mo" },
];

const outcomes = [
  { icon: icon.cash, title: "Monetized Channel", body: "A channel structured to hit and sustain monetization requirements." },
  { icon: icon.doc, title: "Consistent Content Creation", body: "A pipeline that removes the guesswork from what to post next." },
  { icon: icon.toolbox, title: "AI-Powered Workflow", body: "Scripting, voice, and editing handled by tools, not by you manually." },
  { icon: icon.database, title: "Multiple Income Streams", body: "Ad revenue, affiliate offers, and sponsorships layered on one system." },
  { icon: icon.compass, title: "Location Freedom", body: "Run and manage channels from anywhere, on just your phone." },
  { icon: icon.trendDown, title: "Scalable Online Business", body: "A model built to add new channels without adding new hours." },
];

const audiences = ["Students", "Beginners", "Side Hustlers", "Content Creators", "Freelancers", "Entrepreneurs"];

const faqs = [
  { q: "Do I need experience?", a: "No. The course starts from zero and assumes no prior YouTube, editing, or AI tool experience." },
  { q: "Do I need a laptop?", a: "No. Every module is built around phone-only workflows — that's the entire premise of the system." },
  { q: "How long before results?", a: "Most students publish their first video in week one and reach monetization eligibility within 60–90 days of consistent uploads." },
  { q: "Can I do this part-time?", a: "Yes. The system is designed around batching and automation so it fits around a job or studies." },
  { q: "Is it beginner-friendly?", a: "Yes — modules are sequential, with no assumed prior knowledge at any step." },
  { q: "What tools are required?", a: "Just a smartphone and the free or low-cost AI tools listed in the AI Tool Vault bonus." },
];

const valueStack = [
  ["YouTube AI Launchpad — 10 Modules", "$497"],
  ["Niche Database", "$197"],
  ["Script Templates", "$147"],
  ["SEO Checklists", "$97"],
  ["Thumbnail Templates", "$127"],
  ["AI Tool Vault", "$247"],
  ["Community Access", "$197"],
  ["Live Coaching Sessions", "$235"],
];

// ---------- RENDER HELPERS ----------
const cardBase = "rounded-xl border border-edge bg-card p-5 hover:border-signal/40 transition-colors reveal";

function renderProblems() {
  const el = document.getElementById('problem-grid');
  el.innerHTML = problems.map((p, i) => `
    <div class="${cardBase} reveal-delay-${(i % 4) + 1}">
      <div class="w-9 h-9 rounded-lg bg-signal/10 border border-signal/25 flex items-center justify-center text-signal mb-4">${p.icon}</div>
      <h3 class="font-display font-semibold text-sm mb-1.5">${p.title}</h3>
      <p class="text-mute text-sm leading-relaxed">${p.body}</p>
    </div>
  `).join('');
}

function renderSolutionBenefits() {
  const el = document.getElementById('solution-benefits');
  el.innerHTML = solutionBenefits.map(b => `
    <li class="flex items-start gap-3">
      <span class="mt-0.5 w-5 h-5 rounded-full bg-signal/15 border border-signal/30 flex items-center justify-center text-signal shrink-0">${icon.check}</span>
      <span class="text-ink/90">${b}</span>
    </li>
  `).join('');
}

function renderDashboardPreview() {
  const el = document.getElementById('dashboard-preview');
  el.innerHTML = dashboardModules.map(m => {
    const done = m.includes('complete');
    const active = m.includes('progress');
    const dot = done ? 'bg-signal' : active ? 'bg-signal/60 blink' : 'bg-edge';
    return `
      <div class="flex items-center justify-between rounded-md border border-edge px-3.5 py-2.5">
        <span class="font-mono text-xs text-ink/90">${m.split(' — ')[0]}</span>
        <div class="flex items-center gap-2">
          <span class="font-mono text-[10px] text-mute">${m.split(' — ')[1]}</span>
          <span class="w-1.5 h-1.5 rounded-full ${dot}"></span>
        </div>
      </div>
    `;
  }).join('');
}

function renderModules() {
  const el = document.getElementById('modules-grid');
  el.innerHTML = modules.map((m, i) => `
    <div class="${cardBase} reveal-delay-${(i % 3) + 1} flex flex-col">
      <span class="font-mono text-xs text-signal">${m.n}</span>
      <h3 class="font-display font-semibold text-base mt-2 mb-3">${m.title}</h3>
      <div class="mt-auto flex items-center gap-3 text-xs text-mute font-mono pt-3 border-t border-edge">
        <span>${m.lessons} lessons</span>
        <span class="w-1 h-1 rounded-full bg-edge"></span>
        <span>${m.mins} min</span>
      </div>
    </div>
  `).join('');
}

function renderBonuses() {
  const el = document.getElementById('bonus-grid');
  el.innerHTML = bonuses.map((b, i) => `
    <div class="${cardBase} reveal-delay-${(i % 3) + 1}">
      <div class="flex items-start justify-between mb-4">
        <div class="w-9 h-9 rounded-lg bg-signal/10 border border-signal/25 flex items-center justify-center text-signal">${b.icon}</div>
        <span class="font-mono text-xs text-signal border border-signal/30 rounded-full px-2.5 py-1">${b.value}</span>
      </div>
      <h3 class="font-display font-semibold text-sm mb-1.5">${b.title}</h3>
      <p class="text-mute text-sm leading-relaxed">${b.body}</p>
    </div>
  `).join('');
}

function renderTestimonials() {
  const el = document.getElementById('testimonial-grid');
  el.innerHTML = testimonials.map((t, i) => `
    <div class="${cardBase} reveal-delay-${(i % 3) + 1}">
      <p class="text-ink/90 text-sm leading-relaxed mb-5">"${t.quote}"</p>
      <div class="flex items-center justify-between border-t border-edge pt-4">
        <div>
          <p class="font-semibold text-sm">${t.name}</p>
          <p class="text-xs text-mute">${t.role}</p>
        </div>
        <span class="font-mono text-xs text-signal">${t.stat}</span>
      </div>
    </div>
  `).join('');
}

function renderOutcomes() {
  const el = document.getElementById('outcome-grid');
  el.innerHTML = outcomes.map((o, i) => `
    <div class="${cardBase} reveal-delay-${(i % 3) + 1}">
      <div class="w-9 h-9 rounded-lg bg-signal/10 border border-signal/25 flex items-center justify-center text-signal mb-4">${o.icon}</div>
      <h3 class="font-display font-semibold text-sm mb-1.5">${o.title}</h3>
      <p class="text-mute text-sm leading-relaxed">${o.body}</p>
    </div>
  `).join('');
}

function renderAudience() {
  const el = document.getElementById('audience-grid');
  el.innerHTML = audiences.map((a, i) => `
    <div class="rounded-xl border border-edge bg-card p-4 text-center hover:border-signal/40 transition-colors reveal reveal-delay-${(i % 4) + 1}">
      <p class="font-display font-medium text-sm">${a}</p>
    </div>
  `).join('');
}

function renderFAQ() {
  const el = document.getElementById('faq-list');
  el.innerHTML = faqs.map((f, i) => `
    <div class="accordion-item rounded-xl border border-edge bg-card overflow-hidden reveal reveal-delay-${(i % 4) + 1}">
      <button class="accordion-trigger w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus-ring" aria-expanded="false">
        <span class="font-medium text-sm sm:text-base">${f.q}</span>
        <span class="chevron text-signal text-xl leading-none shrink-0">+</span>
      </button>
      <div class="accordion-content px-5">
        <p class="text-mute text-sm leading-relaxed pb-4">${f.a}</p>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.accordion-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
      });
      if (!wasOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function renderValueStack() {
  const el = document.getElementById('value-stack');
  el.innerHTML = valueStack.map(([label, price]) => `
    <div class="flex items-center justify-between">
      <span class="text-mute">${label}</span>
      <span class="text-ink/90">${price}</span>
    </div>
  `).join('');
}

// ---------- SCROLL REVEAL ----------
function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  targets.forEach(t => io.observe(t));
}

// ---------- HERO COUNTERS ----------
function animateCount(el, target, formatter, duration = 1400) {
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.floor(eased * target);
    el.textContent = formatter(value);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function initHeroCounters() {
  const subsEl = document.getElementById('stat-subs');
  const hoursEl = document.getElementById('stat-hours');
  const revEl = document.getElementById('stat-rev');
  if (!subsEl) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(subsEl, 18420, v => v.toLocaleString());
        animateCount(hoursEl, 6280, v => v.toLocaleString());
        animateCount(revEl, 4180, v => `$${v.toLocaleString()}`);
        io.disconnect();
      }
    });
  }, { threshold: 0.3 });
  io.observe(subsEl);
}

// ---------- STICKY MOBILE CTA (hide once pricing section is reached) ----------
function initStickyCta() {
  const sticky = document.getElementById('sticky-cta');
  const pricing = document.getElementById('pricing');
  if (!sticky || !pricing) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      sticky.style.transform = entry.isIntersecting ? 'translateY(100%)' : 'translateY(0)';
    });
  }, { threshold: 0.15 });
  io.observe(pricing);
  sticky.style.transition = 'transform .3s ease';
}

// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', () => {
  renderProblems();
  renderSolutionBenefits();
  renderDashboardPreview();
  renderModules();
  renderBonuses();
  renderTestimonials();
  renderOutcomes();
  renderAudience();
  renderFAQ();
  renderValueStack();
  initScrollReveal();
  initHeroCounters();
  initStickyCta();
});