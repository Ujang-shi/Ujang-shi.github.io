import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const profile = {
  name: "Gaoyuan Shi",
  role: "Software Developer / AI Engineer / Full-Stack Builder",
  location: "San Jose, CA",
  email: "gyushi320@gmail.com",
  github: "github.com/Ujang-shi",
  linkedin: "linkedin.com/in/gaoyuan-shi-a150bb405",
};

const visuals = {
  day: "/assets/future-train-day.png",
  night: "/assets/future-city-night.png",
};

const metrics = [
  { value: "500+", label: "users reached from zero through product iteration" },
  { value: "40%", label: "faster matching flow through structured decision design" },
  { value: "100", label: "Lighthouse accessibility score on a shipped dashboard" },
];

const experience = [
  {
    period: "Jun 2022 - Dec 2024",
    title: "Co-Founder & Software Developer",
    org: "Ningjing Group LLC",
    copy:
      "Built a full-stack international student service marketplace using React and Node.js/Express, including JWT authentication, booking workflows, advisor availability, status tracking, AI FAQ support, and growth from 0 to 500+ users.",
  },
  {
    period: "Aug 2021 - Mar 2022",
    title: "Back-End Developer Intern",
    org: "Ningbo Industrial Chain Digital Technology Co., Ltd",
    copy:
      "Developed Java backend features for the Yongxinpei online platform, helping 50+ partner organizations manage transactions, operational data, financial records, and blockchain-based audit trails.",
  },
];

const projects = [
  {
    title: "Deep Research Agent",
    type: "AI agent system",
    stack: "FastAPI / LangGraph / Vue / OpenAI API",
    copy:
      "A full-stack multi-agent research assistant with intent routing, Tavily web search, local retrieval, evidence review, FastAPI streaming, long-term memory, and report generation.",
    highlights: ["4-week build", "Streaming backend", "Production deployed"],
    links: [{ label: "GitHub profile", href: "https://github.com/Ujang-shi" }],
    image: "/assets/deep-research-ui-en.png",
    mood: "research",
  },
  {
    title: "Game Stats Tracker",
    type: "Full-stack analytics platform",
    stack: "React / Vite / Express / MongoDB",
    copy:
      "A React and Express platform for authentication, game library management, session logging, paginated statistics, win rates, streaks, and head-to-head insights across 1000+ seeded records.",
    highlights: ["1000+ records", "100/100 accessibility", "Live deployment"],
    links: [{ label: "GitHub profile", href: "https://github.com/Ujang-shi" }],
    image: "/assets/game-stats-card-dashboard.png",
    mood: "stats",
  },
  {
    title: "International Student Service Platform",
    type: "Advising & booking platform",
    stack: "React / Node.js / Express / SQLite / Claude API",
    copy:
      "A full-stack service platform for international students with JWT auth, service listings, booking management, SQLite workflows, advisor matching, and a bilingual Claude-powered FAQ assistant.",
    highlights: ["500+ users", "40% faster matching", "Bilingual AI FAQ"],
    links: [{ label: "GitHub profile", href: "https://github.com/Ujang-shi" }],
    image: "/assets/ningjing-logo.jpg",
    mood: "market",
  },
];

const strengths = [
  {
    title: "Agentic workflow design",
    copy: "Built research flows with planning, retrieval, evidence review, memory, and report generation.",
  },
  {
    title: "Full-stack product shipping",
    copy: "Comfortable moving from frontend UI to backend APIs, auth, data models, and deployment.",
  },
  {
    title: "Backend API architecture",
    copy: "Designed RESTful services for booking, availability, session status, and dashboard workflows.",
  },
  {
    title: "Database-backed features",
    copy: "Worked with SQLite, PostgreSQL, MongoDB, Redis, and Milvus for product and AI use cases.",
  },
  {
    title: "Accessible dashboard delivery",
    copy: "Delivered a statistics dashboard with a 100/100 Lighthouse accessibility score.",
  },
  {
    title: "Startup execution",
    copy: "Grew a service platform from zero to 500+ users by iterating from direct user feedback.",
  },
];

const education = [
  {
    school: "Northeastern University",
    program: "Master of Science in Computer Science (Align)",
    meta: "San Jose, CA / Expected May 2027",
    image: "/assets/neu-campus.png",
  },
  {
    school: "University of California, Davis",
    program: "B.S. in Economics and B.S. in Mathematical Analytics and Operations",
    meta: "Davis, CA / June 2022",
    image: "/assets/uc-davis-campus.png",
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
  },
  {
    title: "Frontend",
    items: ["React", "Vite", "Vue", "Responsive UI", "Accessibility"],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "Express", "FastAPI", "REST APIs", "JWT Auth"],
  },
  {
    title: "Data & AI",
    items: ["PostgreSQL", "SQLite", "MongoDB", "Redis", "Milvus", "LangGraph", "OpenAI API"],
  },
  {
    title: "Tools",
    items: ["Git", "Docker", "Linux", "AWS basics", "Tavily"],
  },
];

function VideoAtmosphere({ theme }) {
  return (
    <div className="video-atmosphere" aria-hidden="true">
      <img className="atmosphere-image" src={visuals[theme]} alt="" />
      <div className="video-scan" />
      <div className="video-grid" />
      <div className="lens lens-a" />
      <div className="lens lens-b" />
      <div className="moving-band band-a" />
      <div className="moving-band band-b" />
      <div className="noise" />
    </div>
  );
}

function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="Back to top">
        <span>GS</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#profile">Profile</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Works</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label="Toggle day and night theme">
        {theme === "day" ? "Night" : "Day"}
      </button>
    </header>
  );
}

function Hero({ theme }) {
  return (
    <section className="hero panel-screen" id="top">
      <VideoAtmosphere theme={theme} />
      <div className="hero-inner">
        <p className="eyebrow">Portfolio 2027 / Software Engineering</p>
        <h1>
          Build AI products.
          <br />
          Design backend systems.
          <br />
          Ship useful software.
        </h1>
        <p className="hero-copy">
          Computer Science MS candidate seeking software engineering internships and new grad opportunities in
          2026-2027. I build practical AI products, reliable backend services, and polished web applications from
          prototype to production.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href={`mailto:${profile.email}`}>Contact me</a>
          <a className="button-ghost" href="#projects">View selected work</a>
        </div>
      </div>
      <aside className="hero-card" aria-label="Engineer profile card">
        <span className="card-index">01</span>
        <h2>{profile.name}</h2>
        <p>{profile.role}</p>
        <div className="status-row">
          <span>Based in {profile.location}</span>
          <span>Seeking SWE internships and new grad roles</span>
        </div>
      </aside>
    </section>
  );
}

function Profile() {
  return (
    <section className="profile-section" id="profile">
      <div className="portrait-shell">
        <div className="portrait">
          <div className="portrait-rings" />
          <span>GS</span>
        </div>
      </div>
      <div className="profile-copy">
        <p className="eyebrow">Personal experience</p>
        <h2>Engineer with a product founder's sense of execution.</h2>
        <p>
          My background combines computer science, economics, mathematical analytics, startup execution, and hands-on AI
          agent development. I have built marketplace workflows, REST APIs, matching logic, bilingual AI support, and
          production web applications shaped by real user feedback.
        </p>
        <div className="metric-row">
          {metrics.map((item) => (
            <article key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ mood, image, title }) {
  return (
    <div className={`project-visual ${mood}`} aria-hidden="true">
      {image ? <img src={image} alt="" /> : null}
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">Selected projects</p>
        <h2>Production-minded projects across AI agents, analytics, and marketplaces.</h2>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <ProjectVisual mood={project.mood} image={project.image} title={project.title} />
            <div className="project-meta">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{project.type}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.copy}</p>
            <div className="project-highlights">
              {project.highlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="stack">{project.stack}</div>
            <div className="project-links">
              {project.links.map((link) => (
                <a key={link.label} href={link.href}>{link.label}</a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Hands-on engineering across startup products and backend platforms.</h2>
      </div>
      <div className="experience-list">
        {experience.map((item) => (
          <article key={item.title}>
            <span>{item.period}</span>
            <div>
              <h3>{item.title}</h3>
              <p className="experience-org">{item.org}</p>
              <p>{item.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Strengths() {
  return (
    <section className="strengths-section" id="strengths">
      <div className="section-heading">
        <p className="eyebrow">Personal advantages</p>
        <h2>Engineering strengths shaped by product work and real users.</h2>
      </div>
      <div className="strength-list">
        {strengths.map((item, index) => (
          <article key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-heading">
        <p className="eyebrow">Technical skills</p>
        <h2>A stack recruiters can scan quickly.</h2>
      </div>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <article key={group.title}>
            <h3>{group.title}</h3>
            <div>
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="section-heading">
        <p className="eyebrow">Education</p>
        <h2>Computer science training with economics and analytics depth.</h2>
      </div>
      <div className="education-list">
        {education.map((item) => (
          <article key={item.school}>
            <img src={item.image} alt={`${item.school} campus`} />
            <div>
              <span>{item.meta}</span>
              <h3>{item.school}</h3>
              <p>{item.program}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-rule" aria-hidden="true" />
      <div className="contact-content">
        <p className="eyebrow">Let's build useful software</p>
        <h2>Available for software engineering, full-stack development, and AI product work.</h2>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`https://${profile.github}`}>{profile.github}</a>
          <a href={`https://${profile.linkedin}`}>LinkedIn</a>
          <span>{profile.location}</span>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [theme, setTheme] = useState("day");

  return (
    <div data-theme={theme}>
      <Header theme={theme} onToggleTheme={() => setTheme((current) => (current === "day" ? "night" : "day"))} />
      <main>
        <Hero theme={theme} />
        <Profile />
        <Experience />
        <Projects />
        <Strengths />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
