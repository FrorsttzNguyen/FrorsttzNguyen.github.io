/* ============================================================
 *  NPH Portfolio — data-driven, EN only, vanilla JS
 *  Edit content here. No build step. No images (CSS covers).
 * ============================================================ */

/* ----- Experience timeline ----- */
const TIMELINE = [
  { date: "Nov 2025 – Jan 2026", role: "AI Engineer", org: "SCC Vietnam", desc: "Agentic AI backend (FastAPI + LangGraph) for Jira workflows; Azure AI Search RAG <200ms; Presidio PII redaction; React HITL dashboard." },
  { date: "Apr – Jun 2025", role: "Fullstack Developer Trainee", org: "Grab Holdings", desc: "ReactJS user-facing features, FastAPI services, AI chatbot with RAG + function-calling." },
  { date: "2022 – 2026", role: "B.Eng. Computer Engineering", org: "VNU HCM — University of Science", desc: "GPA 3.2/4.0 · Thesis: Transformers in Vietnamese Sign Language Translation." },
];

/* ----- Research ----- */
const RESEARCH = [
  {
    tag: "Thesis · Publication",
    title: "Transformers in Vietnamese Sign Language Translation",
    body: "Applied and retrained Transformer-based SLT pipelines (SLRT, ALLSVD, ASLLVD) and explored semantic-segmentation conditioning (MergeSemanticSAM) for the Vietnamese sign-language domain. Focus on data scarcity, evaluation honesty, and reproducibility.",
    meta: ["B.Eng. Thesis · 2026", "VNU HCM", "DOI on CV"],
    repos: [
      ["vietnamese-sign-language-translator", "https://github.com/FrorsttzNguyen/vietnamese-sign-language-translator"],
      ["Vietnamese-Sign-Language-HV8", "https://github.com/FrorsttzNguyen/Vietnamese-Sign-Language-HV8"],
      ["SL_summary", "https://github.com/FrorsttzNguyen/SL_summary"],
      ["Retraining_SLRT_with_ALLSVD", "https://github.com/FrorsttzNguyen/Retraining_SLRT_with_ALLSVD"],
    ],
  },
];

/* ----- Projects (cover = CSS monogram, no images) ----- */
const PROJECTS = [
  {
    kind: "dev", mono: "SM", star: true,
    title: "Service Marketplace",
    tag: "Java · Spring Boot",
    desc: "Multi-vendor service booking platform — the flagship. Deliberate learning vehicle for OOP, DB design, and system design: Stripe payments, Redis caching, concurrency on booking slots, Dockerized, full architecture docs + ADRs.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Stripe", "Docker"],
    repo: "https://github.com/FrorsttzNguyen/service-marketplace", demo: null,
  },
  {
    kind: "research", mono: "SLT",
    title: "Vietnamese Sign Language Translation",
    tag: "Research · PyTorch",
    desc: "Transformer SLT pipeline retraining + semantic-segmentation conditioning for the Vietnamese domain. The research backbone behind the thesis and publication.",
    stack: ["PyTorch", "Transformers", "SLRT", "Semantic Segmentation"],
    repo: "https://github.com/FrorsttzNguyen/vietnamese-sign-language-translator", demo: null,
  },
  {
    kind: "dev", mono: "AI",
    title: "Agentic AI for ITSM",
    tag: "Production · SCC",
    desc: "Multi-agent system (LangGraph) orchestrating ITSM workflows: a triage agent classifies, a resolver agent drafts actions via tool-calling, a safety agent masks PII (Presidio) and guards hallucinations, with a human-in-the-loop React gate. Azure AI Search hybrid retrieval feeds context at <200ms. The work that proves my Agentic skill — shipped at SCC Vietnam.",
    stack: ["LangGraph", "Multi-agent", "Tool-calling", "FastAPI", "Azure AI Search", "Presidio"],
    repo: null, demo: null, foot: "Production — code private (SCC work)",
  },
  {
    kind: "dev", mono: "RC",
    title: "Rental Recommendation Chatbot",
    tag: "Production · Grab",
    desc: "AI chatbot with function-calling and RAG over live API data to recommend rentals. Tailored LLM responses per business use-case; shipped fullstack features at Grab.",
    stack: ["React", "FastAPI", "RAG", "Function-calling"],
    repo: null, demo: null, foot: "Production — code private (Grab work)",
  },
  {
    kind: "dev", mono: "MT",
    title: "Milk Tea Manager",
    tag: "JavaScript · side project",
    desc: "Inventory + order management for a milk-tea store. A practical CRUD app with real operational constraints — the kind of small JS project that shows you ship end-to-end.",
    stack: ["JavaScript", "Node.js", "HTML/CSS"],
    repo: "https://github.com/FrorsttzNguyen/milk-tea-manager", demo: null,
  },
  {
    kind: "dev", mono: "AD", planned: true, badge: "In progress",
    title: "AgentDesk",
    tag: "In progress · LangGraph",
    desc: "AI-side capstone — a chatbot control plane that drives agentic automation. Fullstack (React + FastAPI) + automation (real tool execution, not just chat) + agentic (LangGraph multi-agent: Planner → Executor → Guard with HITL) + chatbot-controlled. A public project that re-demonstrates the agentic skills from private work, with public data. Phase 0 runnable slice done: live GitHub PR tool + chat plumbing.",
    stack: ["LangGraph", "Multi-agent", "FastAPI", "React", "GitHub API", "Tool-calling"],
    repo: null, demo: null, foot: "In progress — phase 0 runnable slice (live GitHub tool + chat plumbing)",
  },
  {
    kind: "dev", mono: "BAR",
    title: "Barca",
    tag: "iOS · in progress",
    desc: "Native iOS app (private until App Store launch). Mobile product end-to-end — design, backend, shipping. Listed here once it's public; not oversold before then.",
    stack: ["iOS", "Swift", "Backend"],
    repo: null, demo: null, foot: "Private until App Store launch",
  },
];

/* ----- Learning track (Engineer Pro) ----- */
const LEARNING = [
  { n: "01", status: "active", name: "Intro — Python, Java", tag: "now", map: "Java syntax → read project code" },
  { n: "02", status: "todo", name: "OOP + Database Design", map: "domain value objects · Flyway schema" },
  { n: "03", status: "todo", name: "DSA Level 1", map: "algorithmic thinking" },
  { n: "04", status: "todo", name: "Backend Java with Spring", tag: "1:1", map: "layered arch · REST · JPA · Security" },
  { n: "05", status: "todo", name: "DSA Level 2", map: "Big-Tech interview prep" },
  { n: "06", status: "todo", name: "System Design — Big Tech", map: "Redis cache · rate-limit · DB scaling" },
  { n: "07", status: "todo", name: "System Design — Level 2", map: "distributed systems, advanced" },
];

/* ----- Skills (tiered) ----- */
const SKILLS = [
  { tier: "strong", title: "Daily tools", label: "Strong", items: [["Python", "5+ yrs"], ["FastAPI", ""], ["PyTorch / Transformers", ""], ["LangChain / LangGraph", ""], ["RAG & Agentic patterns", ""], ["React", "TypeScript"]] },
  { tier: "familiar", title: "Working knowledge", label: "Familiar", items: [["Java", "learning →"], ["Spring Boot", "learning →"], ["PostgreSQL", "Redis"], ["Azure AI (Foundry/Search/Cosmos)", ""], ["Docker", "REST design"], ["Next.js / Angular", ""]] },
  { tier: "learning", title: "Actively studying", label: "Currently learning", items: [["Engineer Pro track — Spring + System Design", ""], ["Stripe payments & concurrency", ""], ["C4 diagrams & ADRs", ""], ["DSA for Big-Tech interviews", ""]] },
];

/* ============================================================
 *  Render
 * ============================================================ */
function el(tag, cls, html) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
}

function renderTimeline() {
  const root = document.getElementById("timeline");
  TIMELINE.forEach(t => {
    const item = el("div", "tl-item reveal");
    const right = el("div");
    right.append(el("div","tl-item__role",t.role), el("div","tl-item__org",t.org), el("div","tl-item__desc",t.desc));
    item.append(el("div","tl-item__date",t.date), right);
    root.appendChild(item);
  });
}

function renderResearch() {
  const root = document.getElementById("researchGrid");
  RESEARCH.forEach(r => {
    const card = el("div", "research__card reveal");
    card.append(
      el("div","research__tag", r.tag),
      el("h3", null, r.title),
      el("p", null, r.body),
      el("div","research__meta", r.meta.map(m => `<span>${m}</span>`).join("")),
    );
    if (r.repos && r.repos.length) {
      const wrap = el("div","research__repos");
      r.repos.forEach(([label, href]) => {
        const a = el("a", null, label); a.href = href; a.target="_blank"; a.rel="noopener";
        wrap.appendChild(a);
      });
      card.appendChild(wrap);
    }
    root.appendChild(card);
  });
}

function renderProjects(filter = "all") {
  const root = document.getElementById("projectsGrid");
  root.innerHTML = "";
  PROJECTS.filter(p => filter === "all" || p.kind === filter).forEach(p => {
    const card = el("div", `project reveal is-${p.kind}${p.planned ? " is-planned" : ""}`);
    const cover = el("div", "project__cover");
    cover.appendChild(el("span", "project__mono", p.mono));
    if (p.star) cover.appendChild(el("span", "project__star", "★ Flagship"));
    if (p.planned) cover.appendChild(el("span", "project__planned", p.badge || "Planned"));
    card.appendChild(cover);

    const body = el("div", "project__body");
    const head = el("div", "project__head");
    head.append(el("div","project__title", p.title), el("span","project__tag", p.tag));
    body.append(head, el("p","project__desc", p.desc));

    const stack = el("div", "project__stack");
    p.stack.forEach(s => stack.appendChild(el("span", null, s)));
    body.appendChild(stack);

    const foot = el("div", "project__foot");
    if (p.repo) { const a = el("a", null, "↗ Code"); a.href = p.repo; a.target="_blank"; a.rel="noopener"; foot.appendChild(a); }
    else if (p.foot) { foot.appendChild(el("span","muted", p.foot)); }
    else { foot.appendChild(el("span","muted","private")); }
    if (p.demo) { const a = el("a", null, "↗ Demo"); a.href = p.demo; a.target="_blank"; a.rel="noopener"; foot.appendChild(a); }
    body.appendChild(foot);
    card.appendChild(body);
    root.appendChild(card);
  });
  observeReveal();
}

function renderLearning() {
  const root = document.getElementById("learningTrack");
  LEARNING.forEach(l => {
    const item = el("div", "lr-item reveal");
    item.append(
      el("span","lr-idx", l.n),
      el("span", `lr-status lr-status--${l.status}`),
      (() => { const name = el("div","lr-name", l.name + (l.tag ? ` <span class="lr-tag">${l.tag}</span>` : "")); return name; })(),
      el("div","lr-map", l.map),
    );
    root.appendChild(item);
  });
}

function renderSkills() {
  const root = document.getElementById("skillsGrid");
  SKILLS.forEach(s => {
    const card = el("div", "skill-card reveal");
    card.appendChild(el("div", `skill-card__tier skill-card__tier--${s.tier}`, s.label));
    card.appendChild(el("h3", null, s.title));
    const ul = el("ul");
    s.items.forEach(([a, b]) => ul.appendChild(el("li", null, `<b>${a}</b>${b ? " · " + b : ""}`)));
    card.appendChild(ul);
    root.appendChild(card);
  });
}

/* ============================================================
 *  Palette toggle (blaugrana ↔ terminal) — square swatch button
 * ============================================================ */
function applyPalette(name) {
  document.documentElement.setAttribute("data-theme", name);
}
document.getElementById("themeBtn").addEventListener("click", () => {
  const cur = document.documentElement.getAttribute("data-theme") || "blaugrana";
  applyPalette(cur === "blaugrana" ? "terminal" : "blaugrana");
});

/* ============================================================
 *  Filters + scroll reveal + nav state
 * ============================================================ */
document.getElementById("filters").addEventListener("click", e => {
  const btn = e.target.closest(".filter");
  if (!btn) return;
  document.querySelectorAll(".filter").forEach(f => f.classList.remove("is-active"));
  btn.classList.add("is-active");
  renderProjects(btn.dataset.filter);
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("is-in"); revealObserver.unobserve(en.target); } });
}, { threshold: 0.12 });
function observeReveal() { document.querySelectorAll(".reveal:not(.is-in)").forEach(n => revealObserver.observe(n)); }

window.addEventListener("scroll", () => {
  document.getElementById("nav").classList.toggle("is-scrolled", window.scrollY > 8);
}, { passive: true });

/* ============================================================
 *  Init
 * ============================================================ */
document.getElementById("year").textContent = "2026";
renderTimeline();
renderResearch();
renderProjects();
renderLearning();
renderSkills();
observeReveal();