# Portfolio + CV/GitHub Improvement Plan (v2 — 2026-06-25)

> Cho Hien. Workspace: `Project/`. Portfolio code tại `Project/portfolio/`.
> Build v2: Barca blaugrana + warm-dark terminal, 6 section, bilingual EN/VI, no images (CSS covers).

---

## 1. Đánh giá CV (từ `career-ops/cv.md` + `service-marketplace/docs/cv-strategy.md`)

| Phần CV | Hiện tại | Vấn đề | Đề xuất |
|---|---|---|---|
| Summary | "AI/ML Engineer... Agentic AI, RAG, full-stack" | Không nhấn differentiator | Reframe thành **"Backend + AI hybrid"** (cv-strategy Option D: hiếm ai giỏi cả 2) |
| Experience SCC / Grab | Tốt, 3-4 bullet/job | Lặp lại y hệt ở mục Projects | Giữ ở Experience, gọn xuống 2 bullet/job |
| **Projects** | **Agentic AI ITSM + Rental Chatbot = copy mô tả job** | Nhìn như không có side project → gap lớn nhất CV | **Bỏ cả 2** khỏi Projects. Thay bằng Service Marketplace ★, Vietnamese SLT, Milk Tea Manager (JS) |
| Skills | List phẳng | Không thấy đâu mạnh/đang học | 3 tầng: Strong / Familiar / Currently learning |
| Publication | "DOI (link available)" | Chưa có link thật | Cần DOI khi có |
| Java | Có trong skills, **0 project evidence** | cv-strategy flag rõ | Service Marketplace lấp gap |

**Cân bằng researcher/dev:** giữ Experience (AI jobs) + thêm 1 project backend nặng (Service Marketplace) + 1 research (Vietnamese SLT) → cả 2 role đều có evidence.

---

## 2. Project list (đã "kéo lên" — đây là sơ)

| # | Project | Loại | Public? | Vai trò | Trạng thái portfolio |
|---|---|---|---|---|---|
| 1 | **Service Marketplace** ★ | dev · Spring Boot | ✅ | Flagship backend — Java/Spring, Stripe, Redis, concurrency, ADRs | Có (cover SM, ★ gold) |
| 2 | **Vietnamese SLT** | research · PyTorch | ✅ | Researcher flagship — Transformers, paper | Có (cover SLT, garnet) |
| 3 | Agentic AI ITSM | dev · production (SCC) | ❌ private | Chỉ ở Experience, không liệt project | Có nhưng "private/N/A" |
| 4 | Rental Chatbot | dev · production (Grab) | ❌ private | Chỉ ở Experience | Có nhưng "private/N/A" |
| 5 | **Milk Tea Manager** | dev · JS | ✅ | Side project JS — ship end-to-end (thêm theo yêu cầu Hien) | Có (cover MT) |
| 6 | Barca | dev · iOS | ❌ private | "In progress" — chỉ đưa khi lên App Store | Có, không oversell |

> **Ghi chú:** #3 và #4 có trên portfolio để recruiter thấy breadth, nhưng ghi rõ "private/N/A" và KHÔNG lên CV mục Projects (chỉ ở Experience). Muốn bỏ hẳn 2 card này khỏi portfolio thì sửa `PROJECTS` trong `script.js`.

---

## 3. Quyết định thiết kế (v2)

### Màu — 2 palette + button (đã bỏ light mode)
Button nav (swatch + label) cycle 2 palette:
- **blaugrana** (mặc định): Barca blue `#4AA3E8` + garnet `#E0407A` trên nền warm-dark `#1e1c1a`. Engineer=blue, Researcher=garnet.
- **terminal:** đúng `#2D2D2B` / `#F9F9F7` của Hien, accent xanh-lá `#56D364` (Engineer) + hổ phách `#E0A04A` (Researcher).
- **Vàng** cho ★ flagship + status "now". Mono prompt `> 01` + footer `exit 0`.
- Đã verify headless: click button → `theme=terminal`, `--dev=#56d364`, `--bg=#2D2D2B`. Cả 2 chạy đúng.

### Agentic project — có nên làm thêm 1 cái public?

Hien hỏi: SCC agentic work là private → có nên làm thêm 1 agentic project public không?

**Khuyến nghị: CÓ, nhưng nhỏ và sau service-marketplace.**
- Lý do CÓ: SCC agentic là AI evidence mạnh nhất của Hien nhưng **private → unverifiable**. 1 repo public nhỏ cho recruiter xem code = đóng gap "claim mà không có artifact".
- Rủi ro (chưa làm ngay): service-marketplace mới là differentiator chính (backend depth hiếm hơn AI). Đừng để agentic side project cannibalize thời gian flagship.
- Scope: ~1–2 weekend, demoable, có README + eval. Không cần production-grade.

3 ý tưởng (chọn 1):
1. **Agentic PR/code reviewer bot** — webhook GitHub → agent phân loại + tóm tắt diff + flag rủi ro (tool-calling). *Khớp định vị Backend+AI hybrid.*
2. **Agentic research assistant** — LangGraph multi-agent (planner → searcher → writer) trên arxiv/papers, có eval + streaming.
3. **Agentic RAG Việt** — hybrid retrieval + function-calling trên dataset public (tin/QA Việt), có eval harness. Tái dùng skill RAG hiện có.

→ Lean vào #1 (PR reviewer) vì nó gắn backend/dev-tooling, củng cố định vị hybrid. Quyết cuối cùng thuộc Hien.

### Ảnh
**Không dùng screenshot mock** (project còn private/chưa xong → giả trông rẻ).
- Monogram "NPH" trong ring blaugrana (không cần ảnh chân dung).
- Project cover = CSS gradient (xanh dev / garnet research) + monogram + dot grid.
- Sau này bỏ screenshot thật vào `img/` → tự slot (chưa có slot, thêm khi cần).

### Tên xuống dòng — ĐÃ FIX
v1: clamp 56px + không nowrap → tên wrap giữa. v2: `white-space:nowrap` + clamp max 52px → đo bằng headless Chrome: **1 dòng, không overflow** ở 1280/1024/768/390.

### Section mới
- **Currently Learning (04):** track 7 module Engineer Pro, status dot (done/active/todo), map vào service-marketplace. Honesty signal — cho thấy đang upskill backend có lộ trình.
- **Skills (05)** phân 3 tier: Strong / Familiar / Currently learning.

---

## 4. Kế hoạch triển khai (theo thứ tự ưu tiên)

### Phase A — Portfolio site (đang chờ Hien duyệt v2)
1. ✅ v2 build xong (`index.html`, `styles.css`, `script.js`).
2. ⏳ Hien mở `index.html` xem → chọn: project nào giữ/bỏ, EN hay VI chính, tone màu OK không.
3. ⏳ Sửa content trong `script.js` (data `PROJECTS`, `RESEARCH`, `TIMELINE`, `LEARNING`, `SKILLS`, `I18N`).
4. ⏳ Deploy: GitHub Pages repo `FrorsttzNguyen.github.io` (URL gốc) hoặc Vercel.

### Phase B — Polish "project nặng" (Service Marketplace) để lên CV
README xuất sắc (problem → architecture → tech choices + lý do → tradeoffs → run → demo), architecture diagram, đảm bảo ADRs + commit history sạch, pin repo, link vào CV.

### Phase C — Polish researcher side (Vietnamese SLT)
README repo (objective, method, datasets, results, DOI), mở public các repo research phụ cần thiết, cập nhật CV thêm publication row đầy đủ.

### Phase D — GitHub profile polish
Profile README (`FrorsttzNguyen/FrorsttzNguyen`), pin 4 repo chiến lược, đổi 1-2 repo research private→public nếu an toàn.

### Phase E — CV final
Rút 2 project "copy job" khỏi Projects → thêm Service Marketplace, Vietnamese SLT, Portfolio, Milk Tea Manager. Skills 3 tầng. Sync `career-ops/cv.md` → PDF.

---

## 5. Quyết định (Hien chốt 2026-06-25)

1. **Card #3/#4 (SCC/Grab):** GIỮ — "Production — code private".
2. **Ngôn ngữ chính:** EN (toggle VI vẫn còn).
3. **Repo research public:** cái nào có paper — Hien gửi sau.
4. **DOI:** để trong CV, không hiện trên portfolio (research meta ghi "DOI on CV").
5. **Deploy:** GitHub Pages — **đã live: https://frorsttznguyen.github.io/** (repo `FrorsttzNguyen/FrorsttzNguyen.github.io`, public).
6. **Palette:** cả 2, có button change màu (blaugrana ↔ terminal), không light mode.
7. **Agentic public project:** CÓ — đã thêm card "Agentic PR Reviewer" (mock data, badge "Planned", note "Not started"). Build thật từ từ.

---

## 6. Cấu trúc folder

```
Project/                      ← workspace (giữ nguyên để explore + GitHub)
├── portfolio/               ← project này (deployable)
│   ├── index.html
│   ├── styles.css
│   ├── script.js             ← toàn bộ content data ở đây
│   ├── PLAN.md               ← file này
│   └── (README.md sau khi duyệt)
├── service-marketplace/      ← project nặng #1 (backend, public)
├── barca/                    ← private, in progress
└── ...
```

## 7. Next step ngay
Hien mở `Project/portfolio/index.html` → trả lời 6 câu hỏi mục 5 → quyết (a) giữ/bỏ card nào, (b) agent sửa content hay Hien tự sửa. Sau khi duyệt → README + git init + GitHub Pages.