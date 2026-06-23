const projects = [
  {
    title: "Radical Red Discord Bot",
    type: "software",
    year: "Jan 2026",
    description:
      "A Pokemon Radical Red Discord bot backed by FastAPI, PostgreSQL, Redis, and AWS EC2, with ETL for trainer and move data.",
    tags: ["Python", "FastAPI", "PostgreSQL", "AWS EC2"],
    url: "https://github.com/fangowen/radical-red-discordbot",
    color: "#cf5b45",
  },
  {
    title: "Athlete Recovery Assistant",
    type: "data",
    year: "May 2026 - Present",
    description:
      "An athlete recovery assistant with an agentic RAG pipeline over sports medicine literature, using LangGraph and Qdrant to synthesize evidence from 500+ papers.",
    tags: ["Python", "TypeScript", "LangGraph", "Qdrant"],
    url: "https://github.com/fangowen/injury-classification",
    color: "#d19a2e",
  },
  {
    title: "Green Plate",
    type: "software",
    year: "HooHacks 2026",
    description:
      "A project that helps identify the carbon emissions behind foods, making meal choices more transparent and sustainability-focused. Submitted to HooHacks 2026",
    tags: ["JavaScript", "Python", "Hackathon", "Sustainability"],
    url: "https://devpost.com/software/greenplate",
    color: "#146b6c",
  },
  {
    title: "C++ Thread Pool",
    type: "software",
    year: "Pinned",
    description:
      "A from-scratch C++17 thread pool using standard library primitives, futures, and benchmarked worker-thread performance.",
    tags: ["C++17", "Concurrency", "Benchmarking"],
    url: "https://github.com/fangowen/jubilant-fortnight",
    color: "#4d67a4",
  },
];

const experience = [
  {
    role: "Undergraduate Research Assistant",
    organization: "Virginia Tech",
    period: "Aug 2025 - Present",
    location: "Blacksburg, VA",
    summary:
      "Engineering low-latency LLM conversation agents and study infrastructure for human-centered AI research.",
    highlights: [
      "Built a Python conversation agent using Gemini real-time APIs for sub-300ms context-aware responses and 20% lower perceived delay.",
      "Designed empathetic and cognitive-empathy response modes to compare effects on user behavior and physiological responses.",
      "Built a data pipeline for a 72-participant controlled study and won the People's Choice Award at the 2026 CHCI Student Research Symposium.",
    ],
  },
  {
    role: "Undergraduate Researcher",
    organization: "Cal Poly Pomona",
    period: "May 2026 - Present",
    location: "Los Angeles, CA",
    summary:
      "Conducting NSF-funded graph theory research on metric basis reconfiguration graphs for Cartesian products of complete graphs.",
    highlights: [
      "Developing Python and SageMath softwares to compute and visualize graph reconfigurations.",
      "Scaling visualizations and search across graphs with 100+ vertices.",
    ],
  },
];

const projectsContainer = document.querySelector("[data-projects]");
const experienceContainer = document.querySelector("[data-experience]");
const filterButtons = document.querySelectorAll("[data-filter]");
const profilePhotoButton = document.querySelector(".profile-photo");
const profilePhoto = document.querySelector(".profile-photo img");

function renderProjects(filter = "all") {
  const visibleProjects =
    filter === "all" ? projects : projects.filter((project) => project.type === filter);

  projectsContainer.innerHTML = visibleProjects
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-meta">
            <span>${project.type}</span>
            <span>
              <span class="project-dot" style="background: ${project.color}"></span>
              ${project.year}
            </span>
          </div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tags">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <a class="project-link" href="${project.url}" aria-label="Open ${project.title}">
            Open project
            <span aria-hidden="true">-&gt;</span>
          </a>
        </article>
      `,
    )
    .join("");
}

function renderExperience() {
  experienceContainer.innerHTML = experience
    .map(
      (item) => `
        <article class="experience-item">
          <div class="experience-period">${item.period}</div>
          <div class="experience-body">
            <div class="experience-header">
              <h3>${item.role} <span>at ${item.organization}</span></h3>
              <span class="experience-location">${item.location}</span>
            </div>
            <p>${item.summary}</p>
            <ul class="experience-highlights">
              ${item.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}
            </ul>
          </div>
        </article>
      `,
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

profilePhotoButton.addEventListener("click", () => {
  const showingPrimary = profilePhoto.src.includes(profilePhoto.dataset.primarySrc);
  profilePhoto.src = showingPrimary
    ? profilePhoto.dataset.altSrc
    : profilePhoto.dataset.primarySrc;
  profilePhoto.alt = showingPrimary
    ? profilePhoto.dataset.altAlt
    : profilePhoto.dataset.primaryAlt;
});

renderProjects();
renderExperience();
