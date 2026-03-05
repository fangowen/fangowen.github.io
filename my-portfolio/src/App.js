import { useState } from "react";

const img = document.createElement('img');
img.src = "/Users/owenfang/Documents/Portfolio/portfolio/my-portfolio/assets/gengar.jpg";

const PROJECTS = [
  {
    title: "Weather App",
    desc: "A fun app that shows the weather with animated icons and mood-based backgrounds.",
    tags: ["React", "API", "CSS"],
  },
  {
    title: "Study Buddy",
    desc: "A Pomodoro timer + note-taking app to survive finals week.",
    tags: ["JavaScript", "LocalStorage", "HTML/CSS"],
  },
  {
    title: "Recipe Randomizer",
    desc: "Can't decide what to eat? Spin the wheel and get a random recipe suggestion.",
    tags: ["Python", "Flask", "SQLite"],
  },
  {
    title: "Portfolio Site",
    desc: "This very website! Built with React and a whole lot of caffeine.",
    tags: ["React", "CSS", "GitHub Pages"],
  },
];

const EXPERIENCE = [
  {
    role: "Research Assistant",
    company: "Tri-M Lab Virginia Tech",
    period: "Current",
    desc: "Working with LLM's to create emphatheic car agents",
  },
  
];

function Divider() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 4rem" }}>
      <div style={{ height: 1, background: "#ddd0ee" }} />
    </div>
  );
}

function ProjectRow({ project, isLast }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr auto",
        gap: "2rem",
        alignItems: "center",
        padding: "1.6rem 1rem",
        borderTop: "1px solid #ddd0ee",
        borderBottom: isLast ? "1px solid #ddd0ee" : "none",
        background: hovered ? "#ede6f8" : "transparent",
        transition: "background 0.2s",
        cursor: "default",
        borderRadius: "4px",
      }}
    >
      <div style={{
        fontFamily: "'Lora', serif",
        fontWeight: 600,
        fontSize: "1.05rem",
        color: hovered ? "#5a3d99" : "#2d2d2d",
        transition: "color 0.2s",
      }}>{project.title}</div>
      <div style={{ fontSize: "0.92rem", color: "#666", lineHeight: 1.65 }}>{project.desc}</div>
      <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
        {project.tags.map(tag => (
          <span key={tag} style={{
            fontSize: "0.75rem",
            padding: "0.2rem 0.65rem",
            borderRadius: "999px",
            background: "#e8dff5",
            color: "#6b4db0",
            fontWeight: 500,
            whiteSpace: "nowrap",
          }}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

function ExpRow({ exp, isLast }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "200px 1fr",
        gap: "2.5rem",
        padding: "1.6rem 1rem",
        borderTop: "1px solid #ddd0ee",
        borderBottom: isLast ? "1px solid #ddd0ee" : "none",
        background: hovered ? "#ede6f8" : "transparent",
        transition: "background 0.2s",
        borderRadius: "4px",
      }}
    >
      <div>
        <div style={{ fontSize: "0.82rem", color: "#999", marginBottom: "0.3rem" }}>{exp.period}</div>
        <div style={{
          fontFamily: "'Lora', serif", fontStyle: "italic",
          fontSize: "0.9rem", color: "#7c5cbf",
        }}>{exp.company}</div>
      </div>
      <div>
        <div style={{
          fontFamily: "'Lora', serif", fontWeight: 600,
          fontSize: "1.05rem", color: "#2d2d2d", marginBottom: "0.45rem",
        }}>{exp.role}</div>
        <div style={{ fontSize: "0.92rem", color: "#666", lineHeight: 1.65 }}>{exp.desc}</div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [hoveredNav, setHoveredNav] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const socials = [
    { label: "Email", display: "✉", href: "odfang25@gmail.com" },
    { label: "GitHub", display: "GH", href: "https://github.com/fangowen" },
    { label: "LinkedIn", display: "in", href: "https://www.linkedin.com/in/owen-fang-6a4a99293/?skipRedirect=true" },
    { label: "Resume", display: "↗", href: "../assets/Owen_Fang_Resume.pdf" },
  ];

  const navLinks = ["projects", "experience", "contact", "cv"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #f5f0fa; }
        ::selection { background: #d8c8f0; }
      `}</style>

      <div style={{ background: "#f5f0fa", minHeight: "100vh", color: "#2d2d2d", fontFamily: "'Inter', sans-serif" }}>

        {/* NAV */}
        <nav style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-start",
          padding: "2.5rem 4rem", maxWidth: 1200, margin: "0 auto",
        }}>
          <a href="#" style={{
            fontFamily: "'Lora', serif", fontSize: "2.8rem", fontWeight: 700,
            color: "#7c5cbf", textDecoration: "none", lineHeight: 1, letterSpacing: "-0.02em",
          }}>
            Owen Fang
          </a>
          <div style={{ display: "flex", gap: "2.5rem", paddingTop: "0.8rem" }}>
            {navLinks.map(item => (
              <a key={item} href={`#${item}`}
                onMouseEnter={() => setHoveredNav(item)}
                onMouseLeave={() => setHoveredNav(null)}
                style={{
                  fontFamily: "'Inter', sans-serif", fontSize: "1rem",
                  color: "#7c5cbf", textDecoration: "none", fontWeight: 500,
                  borderBottom: hoveredNav === item ? "1.5px solid #7c5cbf" : "1.5px solid transparent",
                  paddingBottom: "2px", transition: "border-color 0.2s",
                }}>
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* ABOUT */}
        <section id="about" style={{
          maxWidth: 1100, margin: "1rem auto 5rem",
          padding: "0 4rem",
          display: "grid", gridTemplateColumns: "300px 1fr",
          gap: "5rem", alignItems: "flex-start",
        }}>
          {/* Left */}
          <div>
            <div style={{
              width: "100%", aspectRatio: "3/4",
              borderRadius: "14px",
              background: "linear-gradient(160deg, #e0d4f5 0%, #c9b8e8 100%)",
              marginBottom: "1.4rem",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "4rem", color: "#9b7fd4",
              border: "1px solid #c8b8e5",
            }}>
              <img src={img.src} alt="Profile" style={{ width: "90%", borderRadius: "10px" }} />
            </div>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} title={s.label}
                  onMouseEnter={() => setHoveredSocial(s.label)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  style={{
                    width: 38, height: 38,
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: hoveredSocial === s.label ? "#7c5cbf" : "#e8e0f5",
                    color: hoveredSocial === s.label ? "#fff" : "#7c5cbf",
                    fontWeight: 600, fontSize: "0.82rem",
                    textDecoration: "none",
                    border: "1.5px solid #c8bce0",
                    transition: "all 0.2s",
                  }}>
                  {s.display}
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div style={{ paddingTop: "0.5rem" }}>
            <h2 style={{
              fontFamily: "'Lora', serif", fontSize: "2.1rem",
              fontWeight: 700, color: "#7c5cbf", marginBottom: "1.4rem",
            }}>about me</h2>
            <p style={{ fontSize: "1.02rem", lineHeight: 1.9, color: "#3a3a3a", marginBottom: "1.2rem" }}>
              Hi! I'm a CS and Math student at Virginia Tech. I'm interested in{" "}
              <strong>building software that's useful and impactful</strong>. I'm currently
              looking for{" "}
              <a href="mailto:you@email.com" style={{ color: "#7c5cbf", textDecoration: "none", borderBottom: "1px solid #7c5cbf" }}>
                SWE internships for Summer 2025
              </a>. Please reach out if you'd like to collaborate or talk!
            </p>
            <p style={{ fontSize: "1.02rem", lineHeight: 1.9, color: "#3a3a3a", marginBottom: "1.2rem" }}>
              I enjoy music, sports, and fashion.
            </p>
            <p style={{ fontSize: "1.02rem", lineHeight: 1.9, color: "#3a3a3a" }}>
              Check out my{" "}
              <a href="#projects" style={{ color: "#7c5cbf", textDecoration: "none", borderBottom: "1px solid #7c5cbf" }}>
                projects
              </a>{" "}
              below — always working on something new 🌱.
            </p>
          </div>
        </section>

        <Divider />

        {/* PROJECTS */}
        <section id="projects" style={{ maxWidth: 1100, margin: "0 auto", padding: "4rem 4rem 5rem" }}>
          <h2 style={{
            fontFamily: "'Lora', serif", fontSize: "2rem", fontWeight: 700,
            color: "#7c5cbf", marginBottom: "0.4rem",
          }}>projects</h2>
          <p style={{ fontSize: "0.88rem", color: "#aaa", marginBottom: "2rem" }}>
            * things i've built (and am proud of)
          </p>
          {PROJECTS.map((p, i) => (
            <ProjectRow key={p.title} project={p} isLast={i === PROJECTS.length - 1} />
          ))}
        </section>

        <Divider />

        {/* EXPERIENCE */}
        <section id="experience" style={{ maxWidth: 1100, margin: "0 auto", padding: "4rem 4rem 5rem" }}>
          <h2 style={{
            fontFamily: "'Lora', serif", fontSize: "2rem", fontWeight: 700,
            color: "#7c5cbf", marginBottom: "2rem",
          }}>experience</h2>
          {EXPERIENCE.map((exp, i) => (
            <ExpRow key={exp.role} exp={exp} isLast={i === EXPERIENCE.length - 1} />
          ))}
        </section>

        <Divider />

        {/* CONTACT */}
        <section id="contact" style={{ maxWidth: 1100, margin: "0 auto", padding: "4rem 4rem 6rem" }}>
          <h2 style={{
            fontFamily: "'Lora', serif", fontSize: "2rem", fontWeight: 700,
            color: "#7c5cbf", marginBottom: "1.2rem",
          }}>contact</h2>
          <p style={{
            fontSize: "1.02rem", lineHeight: 1.9, color: "#3a3a3a",
            maxWidth: 520, marginBottom: "2rem",
          }}>
            Always happy to chat about new opportunities, cool project ideas, or just swap
            programming horror stories. Best way to reach me is by email 🙂
          </p>
          <a href="mailto:you@email.com"
            onMouseEnter={e => e.currentTarget.style.background = "#5a3d99"}
            onMouseLeave={e => e.currentTarget.style.background = "#7c5cbf"}
            style={{
              display: "inline-block",
              padding: "0.7rem 1.8rem",
              background: "#7c5cbf", color: "#fff",
              borderRadius: "8px", textDecoration: "none",
              fontWeight: 500, fontSize: "0.95rem",
              transition: "background 0.2s",
            }}>
            say hello ✉
          </a>
        </section>

        {/* FOOTER */}
        <footer style={{
          borderTop: "1px solid #ddd0ee",
          padding: "1.5rem 4rem", textAlign: "center",
          color: "#bbb", fontSize: "0.82rem",
        }}>
          built with care 🌿 · your name · 2025
        </footer>
      </div>
    </>
  );
}
