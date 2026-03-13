import { Link } from "react-router-dom";
import "./Resume.css";

import headerImage from "../assets/header.png";
import headerImage2 from "../assets/header2.png";

const resumeData = {
  name: "William Hua",
  title: "Senior Frontend Architect",
  subtitle: "Full-Stack Engineer · 15 Years Experience · Based in Tokyo",
  basicInfo: {
    experience: "15 Years Experience",
    location: "Tokyo, Japan",
    hometown: "Hangzhou, China",
  },
  contactInfo: {
    email: "tchualingfeng@gmail.com",
    phone: "",
    address: "Tokyo, Japan",
    linkedin: "https://www.linkedin.com/in/lingfeng-hua-70479b286/",
    github: "https://github.com/nt66",
    website: "https://nt66.github.io/resumes/",
  },
  advantages: [
    {
      title: "International Engineering Background",
      desc: "15+ years of front-end architecture and delivery experience across China and Japan, with deep expertise in cross-cultural team collaboration and high-standard engineering processes.",
    },
    {
      title: "Strong Architecture & Self-R&D Capability",
      desc: "Proficient in React, Vue, and Node.js full-stack development. Proven track record building enterprise-grade Low-Code platforms, CLI toolchains, and high-performance data visualization engines from the ground up.",
    },
    {
      title: "Multi-Platform Engineering",
      desc: "Hands-on depth in Hybrid apps, WeChat Mini Programs, cross-platform frameworks (Weex / Rax), and WebRTC real-time audio/video. Consistently delivers optimal cross-platform solutions for complex business domains.",
    },
    {
      title: "Business-Value Driven",
      desc: "Skilled at translating complex data governance, GIS mapping, and large-scale analytics into actionable visualization tools that drive digital transformation for enterprise and government clients.",
    },
  ],
  workExperience: [
    {
      company: "Linktivity Co., Ltd.",
      location: "Japan",
      position: "Frontend Expert",
      period: "Mar 2024 – Present",
      projects: [
        {
          name: "GO TAXI – WeChat Ride-Hailing Mini Program",
          desc: "Led the WeChat ecosystem launch of a ride-hailing service targeting inbound tourists in Japan. Optimized map interaction and real-time order state management, significantly improving conversion and user experience.",
        },
        {
          name: '"Travel Japan" One-Stop Tourism Mini Program',
          desc: "Maintained and iterated the architecture of a full-service tourism platform, supporting high-concurrency ticketing and attraction browsing scenarios.",
        },
        {
          name: "ARS Ticketing & Venue Management System",
          desc: "Designed and optimized a B2B ticketing verification and management portal for suppliers. A component-driven refactor substantially reduced the cost of maintaining multilingual versions.",
        },
      ],
    },
    {
      company: "Hangzhou DataDream Technology Co., Ltd.",
      location: "",
      position: "Senior Frontend Expert",
      period: "Sep 2019 – Feb 2024",
      projects: [
        {
          name: "Enterprise Low-Code Form Platform",
          desc: "Served as core architect for a data-driven SaaS platform. Packaged the rendering engine as a standard NPM component, enabling multiple BUs to boost form development efficiency by 60%+.",
        },
        {
          name: "Government Big Data Visualization Dashboard",
          desc: "Delivered large-scale data screen solutions for national-level clients including the National Disaster Reduction Center. Built custom D3-powered visualizations beyond Echarts' capabilities to support real-time operational decisions.",
        },
        {
          name: "dt-visual – Enterprise CLI Framework",
          desc: "Authored a Node.js toolchain for rapid creation, review, and one-click private-registry publishing of visualization components, standardizing frontend productivity workflows across the organization.",
        },
      ],
    },
    {
      company: "Randy Kids English",
      location: "",
      position: "Frontend Expert",
      period: "Aug 2018 – Jun 2019",
      projects: [
        {
          name: "Interactive Live Teaching Platform 2.0",
          desc: "Upgraded a traditional whiteboard-based online classroom to a high-performance gamified experience using WebRTC and PixiJS. Built a signaling layer and audio/video optimization pipeline that significantly increased K-12 student engagement.",
        },
      ],
    },
    {
      company: "Alibaba Group",
      location: "",
      position: "Senior Frontend Engineer",
      period: "Jul 2017 – Aug 2018",
      projects: [
        {
          name: "Xiao Xiao Youku – Weex Cross-Platform App",
          desc: "Core R&D on a Weex + Rax architecture enabling a single codebase to run across multiple platforms. Combined with native-layer optimizations to resolve cross-platform performance bottlenecks and reduce development costs.",
        },
        {
          name: "Marketing Automation Loop",
          desc: "Designed and implemented a Weex-based automated impression tracking solution, providing precise data signals to support product growth.",
        },
      ],
    },
  ],
  coreProjects: [
    {
      name: "Data Exchange & Distribution System",
      role: "Frontend Lead",
      value:
        "Handled massive data standardization and ingestion pipelines for a national big data governance project. Integrated multiple business modules via a micro-frontend architecture and resolved system stability challenges using large-file chunk upload technology.",
    },
    {
      name: "GIS Graphic Analytics System",
      role: "Project Lead",
      value:
        "Built an in-house Canvas-based map framework (Smap) from scratch, eliminating dependency on third-party commercial services. Successfully supported public-security spatio-temporal data correlation analysis, giving the company an independently sellable GIS product.",
    },
  ],
  education: {
    school: "Hangzhou Dianzi University",
    major: "Software Engineering",
    degree: "Bachelor's Degree",
    period: "2005 – 2009",
  },
  skillCategories: [
    {
      category: "Frontend Frameworks",
      skills: ["React", "Vue", "Angular", "Next.js", "Nuxt.js"],
    },
    {
      category: "Languages",
      skills: ["TypeScript", "JavaScript", "Node.js", "Python", "Java"],
    },
    {
      category: "Cross-Platform",
      skills: ["Weex", "Rax", "WeChat Mini Program", "React Native", "Flutter"],
    },
    {
      category: "Visualization & Media",
      skills: ["D3.js", "Echarts", "Canvas", "PixiJS", "WebRTC"],
    },
    {
      category: "Architecture & Tooling",
      skills: ["Micro-Frontend", "Low-Code", "Webpack", "Vite", "Docker", "K8s"],
    },
    {
      category: "Specializations",
      skills: ["GIS", "Big Data", "AI Integration", "Performance", "Team Lead"],
    },
  ],
};

function ResumeEn() {
  const aboutParagraphs = [
    "I'm a senior frontend engineer focused on architecture and engineering excellence. Over 15 years I've designed and shipped enterprise-grade web products across multiple industries, with a strong ability to abstract complex business requirements into reusable, scalable frontend systems.",
    "My recent work spans cross-national teams and high-concurrency domains including travel & mobility in Japan, government data visualization, Low-Code platforms, and real-time audio/video applications — consistently delivering measurable improvements in efficiency and user experience.",
  ];

  return (
    <div className="resume-shell">
      <aside className="resume-sidebar">
        <p className="sidebar-tag">Frontend Engineer</p>
        <h1>{resumeData.name}</h1>
        <h2>{resumeData.title}</h2>
        <p className="sidebar-subtitle">{resumeData.subtitle}</p>
        <div className="sidebar-meta">
          <span>{resumeData.basicInfo.experience}</span>
          <span>{resumeData.basicInfo.location}</span>
          <span>From: {resumeData.basicInfo.hometown}</span>
        </div>

        <nav className="sidebar-nav" aria-label="Page sections">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="sidebar-links">
          <a href={`mailto:${resumeData.contactInfo.email}`}>Email</a>
          <a
            href={resumeData.contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={resumeData.contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={resumeData.contactInfo.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        </div>
        <div className="sidebar-advantages">
          <div className="avatar-switcher">
            <img className="avatar-img avatar-img--back" src={headerImage2} alt="William Hua – Senior Frontend Architect" />
            <img className="avatar-img avatar-img--front" src={headerImage} alt="William Hua" title="William Hua" />
          </div>
          <div className="lang-switcher">
          <Link to="/zh">中文</Link>
          <Link to="/en" className="active">EN</Link>
        </div>
        </div>
      </aside>

      <main className="resume-main">
        <section id="about" className="content-section">
          <h3>About</h3>
          <div className="about-content">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section">
          <h3>Experience</h3>
          <div className="experience-list">
            {resumeData.workExperience.map((job) => (
              <article
                key={`${job.company}-${job.period}`}
                className="experience-item"
              >
                <div className="experience-heading">
                  <span className="period">{job.period}</span>
                  <h4>
                    {job.position} · {job.company}
                    {job.location ? ` (${job.location})` : ""}
                  </h4>
                </div>
                <div className="experience-projects">
                  {job.projects.map((project) => (
                    <div key={project.name} className="project-line">
                      <strong>{project.name}</strong>
                      <p>{project.desc}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section">
          <h3>Projects</h3>
          <div className="project-cards">
            {resumeData.coreProjects.map((project) => (
              <article key={project.name} className="project-card">
                <h4>{project.name}</h4>
                <p className="project-role">{project.role}</p>
                <p>{project.value}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="content-section">
          <h3>Skills</h3>
          <div className="skills-grid">
            {resumeData.skillCategories.map((category) => (
              <article key={category.category} className="skills-group">
                <h4>{category.category}</h4>
                <div className="skills-tags">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="content-section">
          <h3>Education</h3>
          <div className="education-card">
            <h4>{resumeData.education.school}</h4>
            <p>
              {resumeData.education.major} · {resumeData.education.degree}
            </p>
            <span className="period">{resumeData.education.period}</span>
          </div>
        </section>

        <section id="contact" className="content-section">
          <h3>Contact</h3>
          <div className="contact-list">
            <a href={`mailto:${resumeData.contactInfo.email}`}>
              {resumeData.contactInfo.email}
            </a>
            <span>{resumeData.contactInfo.phone}</span>
            <span>{resumeData.contactInfo.address}</span>
            <a
              href={resumeData.contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {resumeData.contactInfo.linkedin}
            </a>
            <a
              href={resumeData.contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {resumeData.contactInfo.github}
            </a>
            <a
              href={resumeData.contactInfo.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {resumeData.contactInfo.website}
            </a>
          </div>
        </section>

        <footer className="resume-footer">
        </footer>
      </main>
    </div>
  );
}

export default ResumeEn;
