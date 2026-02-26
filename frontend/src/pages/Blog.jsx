import { useState } from "react";
import "./Blog.css";

const BLOG_POSTS = [
  {
    id: "1",
    category: "Engineering",
    title: "Skill Gap in Programming: Why Most Developers Stay Stuck (And How to Fix It)",
    excerpt:
      "There's no shortage of programming courses. Yet thousands of learners still ask: Why am I not job-ready? You don't have a learning problem. You have a skill validation problem.",
    date: "26-02-2026",
    readTime: "8 min read",
    imageType: "tunnel",
    body: `**Primary Keywords:** skill gap in programming, how to improve coding skills, developer roadmap, verify coding skills

There's no shortage of programming courses.

Platforms like freeCodeCamp, Udemy, and Coursera publish thousands of tutorials every year.

Yet thousands of learners still ask:

> "Why am I not job-ready even after finishing so many courses?"

The answer is simple — and uncomfortable.

You don't have a learning problem.
You have a **skill validation problem**.

## The Hidden Skill Gap in Programming

Most developers:

* Watch tutorials
* Copy projects
* Follow along with code

But they rarely test themselves independently.

That creates a false sense of confidence.

Knowing syntax ≠ solving real problems.

The real skill gap appears when:

* You must build without guidance
* You debug alone
* You make architectural decisions

That's when reality hits.

## Why Traditional Learning Fails Developers

Most platforms optimize for completion rates, not competence.

You complete lessons.
You get certificates.
You feel productive.

But when faced with a blank screen?

Silence.

Without structured verification, your brain confuses familiarity with mastery.

That's dangerous in tech.

## The 3-Step Developer Growth Framework

If you want to truly improve your coding skills, follow this structure:

### 1️⃣ Declare Your Skill Honestly

Not:

> "I know React."

Instead:

> "I can build a full-stack React application with authentication, API integration, and state management."

Precision exposes gaps.

### 2️⃣ Verify Under Real Constraints

* Time-bound challenges
* Real-world scenarios
* Independent debugging

Verification reveals truth.

And truth accelerates growth.

### 3️⃣ Follow a Structured Developer Roadmap

A roadmap should:

* Identify weak fundamentals
* Suggest targeted practice
* Increase complexity gradually

Random learning creates random results.

Structured progression creates confidence.

## The Future Belongs to Skill-Verified Developers

Companies don't care how many courses you've completed.

They care what you can build.

If you want to stand out in 2026 and beyond:

Stop consuming.
Start verifying.

### 🚀 Ready to Close Your Programming Skill Gap?

Declare your skill.
Verify it under real challenge.
Get a personalized roadmap.

Build competence — not just certificates.`,
  },
  {
    id: "2",
    category: "Industry",
    title: "Degree vs Skills in 2026: What Actually Gets You Hired?",
    excerpt:
      "The job market has changed. A degree alone is no longer a guarantee. Employers care about output. Skills show performance.",
    date: "14-12-2025",
    readTime: "6 min read",
    imageType: "grid",
    body: `**Primary Keywords:** degree vs skills, job market 2026, skill-based hiring, career roadmap

The job market has changed.

A degree alone is no longer a guarantee of employment.

Even graduates from institutions like Harvard University and Stanford University compete in a market that values demonstrated ability over academic history.

Why?

Because employers care about output.

## The Rise of Skill-Based Hiring

Three forces reshaped careers:

1. Global remote hiring
2. Rapid technology evolution
3. AI productivity tools like OpenAI technologies

When automation handles basic tasks, companies prioritize:

* Problem solving
* Execution ability
* Adaptability

Degrees show education.
Skills show performance.

## The Confidence Gap Among Graduates

Many graduates feel stuck because:

* They passed exams
* But never validated real-world competence
* They don't know their actual skill level

Without clarity, confidence collapses.

## The Career Advantage: Skill Transparency

To compete in the 2026 job market:

✔ Define your skills clearly
✔ Validate them with structured testing
✔ Identify measurable gaps
✔ Follow a career roadmap

Instead of saying:

> "I have a B.Tech."

Say:

> "I can design scalable backend systems with authentication and optimized queries."

That difference changes hiring conversations.

## Degrees Open Doors. Skills Keep Them Open.

The smartest professionals today:

* Audit their abilities regularly
* Seek honest feedback
* Build proof-of-work

They don't assume competence.
They verify it.

### 🚀 Want to Compete in a Skill-Based Job Market?

Declare your strengths.
Test them.
Get a roadmap to industry-level performance.

Don't guess your value. Measure it.`,
  },
  {
    id: "3",
    category: "Product",
    title: "Why You're Not Improving: The Psychology Behind Skill Plateaus",
    excerpt:
      "You're working hard. But your improvement has slowed down. Deliberate practice requires clear goals, immediate feedback, and increasing difficulty.",
    date: "01-12-2025",
    readTime: "5 min read",
    imageType: "circuit",
    body: `**Primary Keywords:** why learning plateaus, skill mastery psychology, deliberate practice, improve faster

You're working hard.

You're practicing.

But your improvement has slowed down.

This isn't laziness.
It's a structural problem.

## The Plateau Effect Explained

Psychologist Anders Ericsson demonstrated that mastery develops through deliberate practice — not repetition.

Deliberate practice requires:

* Clear goals
* Immediate feedback
* Increasing difficulty

Most learners practice without feedback.

And without feedback, growth stops.

## The Dunning-Kruger Effect

Research by David Dunning and Justin Kruger shows:

* Beginners overestimate
* Intermediates doubt themselves
* Experts refine constantly

Without objective measurement, self-perception becomes unreliable.

## How to Break a Skill Plateau

Use this 4-step loop:

1️⃣ Declare your current level
2️⃣ Verify under structured challenge
3️⃣ Measure performance honestly
4️⃣ Adjust your roadmap

Growth is systematic.

## Mastery Is Designed, Not Accidental

Plateaus happen when:

* Difficulty remains constant
* Feedback disappears
* Goals are vague

Introduce structure — and growth resumes.

Always.

### 🚀 Break Your Plateau Today

Stop guessing your level.
Test it.
Measure it.
Upgrade it.

Skill growth is not magic.
It's engineered.`,
  },
];

const CATEGORIES = ["All", "Product", "Industry", "Engineering"];

/** Turn "Hello **bold** world" into React nodes [ "Hello ", <strong>bold</strong>, " world" ] */
function withBold(str, keyPrefix) {
  const parts = str.split(/(\*\*.+?\*\*)/g);
  return parts.map((part, i) => {
    const m = part.match(/\*\*(.+?)\*\*/);
    return m ? <strong key={`${keyPrefix}-${i}`}>{m[1]}</strong> : part;
  });
}

/** Render simple markdown (**, ##, ###, >, *) into safe React nodes */
function renderBody(text) {
  const blocks = text.split(/\n\n+/);
  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return null;
    if (/^###\s/.test(trimmed)) {
      return <h3 key={i} className="blog-post-h3">{withBold(trimmed.replace(/^###\s*/, ""), `h3-${i}`)}</h3>;
    }
    if (/^##\s/.test(trimmed)) {
      return <h2 key={i} className="blog-post-h2">{withBold(trimmed.replace(/^##\s*/, ""), `h2-${i}`)}</h2>;
    }
    if (trimmed.startsWith("> ")) {
      const lines = trimmed.split("\n").map((l) => (l.startsWith("> ") ? l.slice(2) : l));
      return (
        <blockquote key={i} className="blog-post-blockquote">
          {lines.map((line, j) => (
            <p key={j}>{withBold(line, `bq-${i}-${j}`)}</p>
          ))}
        </blockquote>
      );
    }
    if (trimmed.startsWith("* ") || /^\d+\.\s/.test(trimmed) || /^✔\s/.test(trimmed)) {
      const items = trimmed.split("\n").filter((l) => /^[*-]\s|^\d+\.\s|^✔\s*/.test(l.trim()));
      return (
        <ul key={i} className="blog-post-ul">
          {items.map((item, j) => (
            <li key={j}>{withBold(item.replace(/^[*-]\s|^\d+\.\s|^✔\s*/, ""), `li-${i}-${j}`)}</li>
          ))}
        </ul>
      );
    }
    return <p key={i} className="blog-post-p">{withBold(trimmed, `p-${i}`)}</p>;
  });
}

function BlogCardImage({ type }) {
  const shared = { fill: "none", stroke: "rgba(74, 159, 212, 0.9)", strokeWidth: "1.5" };
  if (type === "tunnel") {
    return (
      <svg className="blog-card-svg" viewBox="0 0 400 220" aria-hidden="true">
        <defs>
          <linearGradient id="bg-tunnel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a5f7a" />
            <stop offset="100%" stopColor="#164d63" />
          </linearGradient>
        </defs>
        <rect width="400" height="220" fill="url(#bg-tunnel)" />
        <path d="M 50 110 Q 200 40 350 110 Q 200 180 50 110" {...shared} />
        <path d="M 80 110 Q 200 55 320 110 Q 200 165 80 110" {...shared} />
        <path d="M 110 110 Q 200 70 290 110 Q 200 150 110 110" {...shared} />
        <circle cx="200" cy="110" r="12" {...shared} />
      </svg>
    );
  }
  if (type === "grid") {
    return (
      <svg className="blog-card-svg" viewBox="0 0 400 220" aria-hidden="true">
        <defs>
          <linearGradient id="bg-grid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a5f7a" />
            <stop offset="100%" stopColor="#164d63" />
          </linearGradient>
        </defs>
        <rect width="400" height="220" fill="url(#bg-grid)" />
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={`h-${i}`} x1={0} y1={44 * i} x2={400} y2={44 * i} {...shared} />
        ))}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={`v-${i}`} x1={80 * i} y1={0} x2={80 * i} y2={220} {...shared} />
        ))}
        <circle cx="200" cy="110" r="20" {...shared} />
      </svg>
    );
  }
  if (type === "circuit") {
    return (
      <svg className="blog-card-svg" viewBox="0 0 400 220" aria-hidden="true">
        <defs>
          <linearGradient id="bg-circuit" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a5f7a" />
            <stop offset="100%" stopColor="#164d63" />
          </linearGradient>
        </defs>
        <rect width="400" height="220" fill="url(#bg-circuit)" />
        <rect x="80" y="60" width="80" height="100" rx="4" {...shared} />
        <rect x="240" y="60" width="80" height="100" rx="4" {...shared} />
        <path d="M 160 110 H 240" {...shared} />
        <path d="M 120 160 H 160 V 110" {...shared} />
        <path d="M 280 110 H 320 V 160" {...shared} />
        <circle cx="160" cy="110" r="6" fill="rgba(74, 159, 212, 0.4)" {...shared} />
        <circle cx="240" cy="110" r="6" fill="rgba(74, 159, 212, 0.4)" {...shared} />
      </svg>
    );
  }
  return null;
}

export default function Blog({ onBack }) {
  const [filter, setFilter] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);

  const filtered =
    filter === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === filter);

  if (selectedPost) {
    return (
      <div className="blog-page">
        <header className="blog-header">
          <div className="blog-header-inner">
            <button
              type="button"
              className="blog-back"
              onClick={() => setSelectedPost(null)}
              aria-label="Back to blog list"
            >
              ← Back to Blog
            </button>
            <h1 className="blog-site-title">Blog</h1>
          </div>
        </header>
        <article className="blog-post">
          <div className="blog-post-hero">
            <div className="blog-post-image-wrap">
              <BlogCardImage type={selectedPost.imageType} />
            </div>
            <div className="blog-post-meta">
              <span>{selectedPost.date}</span>
              <span>{selectedPost.readTime}</span>
            </div>
            <h1 className="blog-post-title">{selectedPost.title}</h1>
          </div>
          <div className="blog-post-body">{renderBody(selectedPost.body)}</div>
        </article>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <header className="blog-header">
        <div className="blog-header-inner">
          <button type="button" className="blog-back" onClick={onBack} aria-label="Back to home">
            ← HustleUp
          </button>
          <h1 className="blog-site-title">Blog</h1>
        </div>
      </header>

      <main className="blog-main">
        <div className="blog-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`blog-filter-btn ${filter === cat ? "blog-filter-btn-active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="blog-grid">
          {filtered.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-image-wrap">
                <BlogCardImage type={post.imageType} />
              </div>
              <div className="blog-card-body">
                <button
                  type="button"
                  className="blog-card-title-btn"
                  onClick={() => setSelectedPost(post)}
                >
                  {post.title}
                </button>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-meta">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="blog-empty">No posts in this category yet.</p>
        )}
      </main>
    </div>
  );
}
