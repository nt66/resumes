import "./Resume.css";

const resumeData = {
  name: "华先生 William",
  title: "高级前端架构师 / 资深开发工程师",
  subtitle: "Senior Frontend Architect & Developer",
  basicInfo: {
    gender: "男",
    age: "39岁",
    hometown: "中国 杭州",
    experience: "15年工作经验",
    location: "现居：日本",
    email: "tchualingfeng@gmail.com",
    phone: "+81-90-XXXX-XXXX",
    linkedin: "linkedin.com/in/huasenior",
    github: "github.com/huasenior",
  },
  contactInfo: {
    email: "tchualingfeng@gmail.com",
    phone: "+81-90-XXXX-XXXX",
    address: "东京都, 日本",
    linkedin: "linkedin.com/in/huasenior",
    github: "github.com/huasenior",
    website: "www.huasenior.dev",
  },
  advantages: [
    {
      title: "深厚的国际化开发背景",
      desc: "具备15年一线前端开发与架构经验，近期深耕日本旅游及出行市场，熟悉跨国团队协作与高标准交付流程。",
    },
    {
      title: "卓越的架构与自研能力",
      desc: "精通 React、Vue、Node.js 全栈技术，具备从 0 到 1 打造企业级低代码（Low-Code）平台、CLI 工具链及高性能可视化引擎的实战经验。",
    },
    {
      title: "多端全场景覆盖",
      desc: "深耕混合开发（Hybrid）、微信小程序、跨端框架（Weex/Rax）及 WebRTC 音视频通信，能够针对复杂业务提供最优跨平台解决方案。",
    },
    {
      title: "业务价值驱动",
      desc: "擅长将复杂的数据治理、GIS 地图及大数据分析转化为高价值的可视化决策工具，助力政企客户实现数字化转型。",
    },
  ],
  workExperience: [
    {
      company: "Linktivity 株式会社",
      location: "日本",
      position: "前端专家",
      period: "2024.03 - 至今",
      projects: [
        {
          name: "GO TAXI 打车小程序",
          desc: "主导打车业务在微信生态的落地，通过优化地图交互与订单状态流转，提升了赴日游客的出行体验与转化率。",
        },
        {
          name: '"旅日"小程序',
          desc: "负责一站式旅游服务平台的架构维护与功能迭代，支撑高并发场景下的票务与景区展示。",
        },
        {
          name: "ARS 票务管理系统",
          desc: "针对 B 端供应商设计并优化票务核销与管理后台，通过组件化重构显著降低了多语言版本的维护成本。",
        },
      ],
    },
    {
      company: "杭州数梦工场科技有限公司",
      location: "",
      position: "高级前端专家",
      period: "2019.09 - 2024.02",
      projects: [
        {
          name: "低代码（Low-Code）表单中台建设",
          desc: "作为核心架构负责人，设计并实现了数据驱动的 SaaS 平台。通过封装渲染引擎为标准 NPM 组件，赋能多业务部门提升了 60% 以上的表单开发效率。",
        },
        {
          name: "政务大数据可视化大屏解决方案",
          desc: "负责国家级减灾中心等大数据项目。针对 Echarts 无法满足的定制化需求，基于 D3 引擎自研特色可视化效果，助力管理者实现高效的数据决策。",
        },
        {
          name: "dt-visual 企业级 CLI 框架研发",
          desc: "主导编写了一套 Node.js 工具链，实现可视化组件的快速编写、审核与一键私仓发布，沉淀了标准化的前端生产力工具。",
        },
      ],
    },
    {
      company: "兰迪少儿英语",
      location: "",
      position: "前端专家",
      period: "2018.08 - 2019.06",
      projects: [
        {
          name: "在线互动上课平台 2.0",
          desc: "基于 WebRTC 与 PixiJS 引擎，将传统的白板教学升级为高性能游戏化互动模式。通过建立信令中心与音视频优化，极大地增强了 K12 用户的学习粘性。",
        },
      ],
    },
    {
      company: "阿里巴巴（中国）有限公司",
      location: "",
      position: "资深前端",
      period: "2017.07 - 2018.08",
      projects: [
        {
          name: "小小优酷（Weex 项目）核心研发",
          desc: "利用 Weex + Rax 架构实现一套代码多端适配。结合 Native 底层优化解决了跨端性能瓶颈，有效提升了开发效率并节约了成本。",
        },
        {
          name: "营销自动化闭环",
          desc: "设计并实现基于 Weex 的自动化曝光埋点方案，为产品增长提供精准的数据支持。",
        },
      ],
    },
  ],
  coreProjects: [
    {
      name: "数据汇交分发系统",
      role: "前端负责人",
      value:
        "处理国家级大数据治理项目中的海量数据标准化与入库流程。引入微前端架构集成多业务模块，采用大文件切片上传技术，解决了复杂流程下的系统稳定性问题。",
    },
    {
      name: "GIS 图形化分析系统",
      role: "项目负责人",
      value:
        "从 0 到 1 自研基于 Canvas 的 Smap 地图框架，摆脱对第三方商业服务的依赖。该系统成功支撑了公安时空数据关联分析业务，使公司具备了独立销售 GIS 产品的竞争优势。",
    },
  ],
  education: {
    school: "杭州电子科技大学",
    major: "软件工程",
    degree: "本科",
    period: "2005 - 2009",
  },
  skillCategories: [
    {
      category: "前端框架",
      skills: ["React", "Vue", "Angular", "Next.js", "Nuxt.js"],
    },
    {
      category: "编程语言",
      skills: ["TypeScript", "JavaScript", "Node.js", "Python", "Java"],
    },
    {
      category: "跨端技术",
      skills: ["Weex", "Rax", "微信小程序", "React Native", "Flutter"],
    },
    {
      category: "可视化与音视频",
      skills: ["D3.js", "Echarts", "Canvas", "PixiJS", "WebRTC"],
    },
    {
      category: "架构与工具",
      skills: ["微前端", "Low-Code", "Webpack", "Vite", "Docker", "K8s"],
    },
    {
      category: "专业技能",
      skills: ["GIS", "大数据处理", "AI集成", "性能优化", "团队管理"],
    },
  ],
};

function Resume() {
  const aboutParagraphs = [
    "我是一名专注于前端架构与工程化的高级开发工程师，长期负责企业级 Web 产品的设计与落地，擅长把复杂业务抽象成可复用、可扩展的前端系统。",
    "近年主要服务于跨国团队与高并发场景，覆盖旅游出行、政务数据可视化、低代码平台、音视频互动等方向，持续通过技术方案提升业务效率与用户体验。",
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
          <span>籍贯：{resumeData.basicInfo.hometown}</span>
        </div>

        <nav className="sidebar-nav" aria-label="主要内容">
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
            href={`https://${resumeData.contactInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={`https://${resumeData.contactInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={`https://${resumeData.contactInfo.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
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
              href={`https://${resumeData.contactInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {resumeData.contactInfo.linkedin}
            </a>
            <a
              href={`https://${resumeData.contactInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {resumeData.contactInfo.github}
            </a>
            <a
              href={`https://${resumeData.contactInfo.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {resumeData.contactInfo.website}
            </a>
          </div>
        </section>

        <footer className="resume-footer">
          <p>Loosely inspired by a clean single-page portfolio style.</p>
          <p>Built with React + Vite.</p>
        </footer>
      </main>
    </div>
  );
}

export default Resume;
