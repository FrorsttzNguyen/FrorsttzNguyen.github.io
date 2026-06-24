/* ============================================================
 *  NPH Portfolio — data-driven, bilingual EN/VI, vanilla JS
 *  Edit content here. No build step. No images (CSS covers).
 * ============================================================ */

const I18N = {
  en: {
    "brand": "Hien Nguyen",
    "nav.about": "About", "nav.research": "Research", "nav.projects": "Projects",
    "nav.learning": "Learning", "nav.skills": "Skills", "nav.contact": "Contact",
    "hero.eyebrow": "Ho Chi Minh City, Vietnam",
    "hero.status": "$ currently learning — Spring Boot & System Design",
    "hero.tagline": "AI/ML Engineer × Backend Engineer — bridging research and production.",
    "hero.sub": "Published research on Transformers for Vietnamese Sign Language Translation. Production Agentic AI at SCC Vietnam. Now engineering a Java/Spring Boot multi-vendor platform — a deliberate, differentiating Backend + AI hybrid profile.",
    "hero.ctaProjects": "See projects", "hero.ctaResearch": "Read research",
    "hero.splitResearch": "Papers · SLT · Transformers",
    "hero.splitDev": "Spring · RAG · Agentic AI",
    "about.title": "About",
    "about.researcherTitle": "Researcher side",
    "about.researcherBody": "B.Eng. Computer Engineering at VNU HCM (GPA 3.2). Thesis and publication on Transformers for Vietnamese Sign Language Translation — retraining SLRT, ALLSVD, ASLLVD and semantic-segmentation conditioning. I care about rigor: ablations, reproducibility, honest evaluation.",
    "about.engineerTitle": "Engineer side",
    "about.engineerBody": "Shipped production Agentic AI + RAG at SCC Vietnam (FastAPI, LangGraph, Azure AI Search) and fullstack chatbot features at Grab. Now adding deep backend depth — Java, Spring Boot, Postgres, Redis, Stripe — learned through a real multi-vendor platform, not toy tutorials.",
    "research.title": "Research & Publications",
    "projects.title": "Selected Projects",
    "projects.sub": "Production engineering and research, balanced. Covers are CSS-generated — real screenshots slot in later.",
    "projects.filterAll": "All", "projects.filterDev": "Engineering", "projects.filterResearch": "Research",
    "learning.title": "Currently Learning",
    "learning.sub": "Engineer Pro track — self-study, mapped 1:1 to a real Spring Boot project. Honest about being early in Java.",
    "skills.title": "Skills",
    "contact.title": "Contact",
    "contact.lead": "Open to AI/ML and backend engineering roles. Research collaborations welcome.",
    "footer.built": "Built by hand — HTML, CSS, vanilla JS. No framework.",
    "footer.status": "exit 0",
  },
  vi: {
    "brand": "Hiền Nguyễn",
    "nav.about": "Giới thiệu", "nav.research": "Nghiên cứu", "nav.projects": "Dự án",
    "nav.learning": "Đang học", "nav.skills": "Kỹ năng", "nav.contact": "Liên hệ",
    "hero.eyebrow": "TP. Hồ Chí Minh, Việt Nam",
    "hero.status": "$ đang học — Spring Boot & System Design",
    "hero.tagline": "AI/ML Engineer × Backend Engineer — kết nối nghiên cứu và sản xuất.",
    "hero.sub": "Có công bố về Transformers cho dịch ngôn ngữ ký hiệu Việt Nam. Đã ship Agentic AI production ở SCC Vietnam. Giờ đang xây nền tảng đa nhà cung cấp Java/Spring Boot — định vị Backend + AI hybrid, khác biệt.",
    "hero.ctaProjects": "Xem dự án", "hero.ctaResearch": "Đọc nghiên cứu",
    "hero.splitResearch": "Paper · SLT · Transformers",
    "hero.splitDev": "Spring · RAG · Agentic AI",
    "about.title": "Giới thiệu",
    "about.researcherTitle": "Phía nghiên cứu",
    "about.researcherBody": "Kỹ sư Máy tính tại VNU HCM (GPA 3.2). Khóa luận và công bố về Transformers cho dịch ngôn ngữ ký hiệu Việt Nam — retrain SLRT, ALLSVD, ASLLVD và semantic-segmentation. Đề cao tính chặt chẽ: ablation, tái lập, đánh giá trung thực.",
    "about.engineerTitle": "Phía kỹ sư",
    "about.engineerBody": "Đã ship Agentic AI + RAG production ở SCC Vietnam (FastAPI, LangGraph, Azure AI Search) và chatbot fullstack ở Grab. Giờ bổ sung chiều sâu backend — Java, Spring Boot, Postgres, Redis, Stripe — học qua nền tảng thật, không phải tutorial.",
    "research.title": "Nghiên cứu & Công bố",
    "projects.title": "Dự án tiêu biểu",
    "projects.sub": "Cân bằng giữa kỹ thuật production và nghiên cứu. Cover bằng CSS — screenshot thật thêm sau.",
    "projects.filterAll": "Tất cả", "projects.filterDev": "Kỹ thuật", "projects.filterResearch": "Nghiên cứu",
    "learning.title": "Đang học",
    "learning.sub": "Lộ trình Engineer Pro — tự học, map 1:1 vào dự án Spring Boot thật. Trung thực về việc còn đầu-stack Java.",
    "skills.title": "Kỹ năng",
    "contact.title": "Liên hệ",
    "contact.lead": "Sẵn sàng cho vị trí AI/ML và backend. Hợp tác nghiên cứu luôn chào đón.",
    "footer.built": "Tự viết — HTML, CSS, JS thuần. Không framework.",
    "footer.status": "exit 0",
  }
};

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
    kind: "dev", mono: "PR", planned: true,
    title: "Agentic PR Reviewer",
    tag: "Planned · LangGraph",
    desc: "GitHub webhook → multi-agent pipeline: a triage agent classifies the PR, a reviewer agent flags risks via tool-calling, a summarizer posts a comment. A small PUBLIC project to make my Agentic skill viewable — the SCC version is private. Status: planned, mock data only, not started.",
    stack: ["LangGraph", "FastAPI", "GitHub Webhooks", "Tool-calling"],
    repo: null, demo: null, foot: "Not started — mock data, planning in progress",
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
    if (p.planned) cover.appendChild(el("span", "project__planned", "Planned"));
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
 *  i18n + theme
 * ============================================================ */
let lang = "en";
function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(node => {
    const key = node.getAttribute("data-i18n");
    const text = I18N[lang][key];
    if (text) node.textContent = text;
  });
  document.getElementById("langBtn").textContent = lang === "en" ? "EN" : "VI";
}
document.getElementById("langBtn").addEventListener("click", () => { lang = lang === "en" ? "vi" : "en"; applyLang(); });

/* 2 palettes: blaugrana (Barca blue+garnet) ↔ terminal (#2D2D2B + green/amber) */
const PALETTES = ["blaugrana", "terminal"];
const PALETTE_LABEL = { blaugrana: "blaugrana", terminal: "terminal" };
function applyPalette(name) {
  document.documentElement.setAttribute("data-theme", name);
  document.getElementById("themeLabel").textContent = PALETTE_LABEL[name];
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
applyLang();
observeReveal();