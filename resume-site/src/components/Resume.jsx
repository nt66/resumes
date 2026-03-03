import './Resume.css'

const resumeData = {
  name: '华先生 (Mr. Hua)',
  title: '高级前端架构师 / 资深开发工程师',
  basicInfo: {
    gender: '男',
    age: '39岁',
    hometown: '杭州',
    experience: '15年工作经验',
    location: '现居：日本',
    email: 'tchualingfeng@gmail.com'
  },
  advantages: [
    {
      title: '深厚的国际化开发背景',
      desc: '具备15年一线前端开发与架构经验，近期深耕日本旅游及出行市场，熟悉跨国团队协作与高标准交付流程。'
    },
    {
      title: '卓越的架构与自研能力',
      desc: '精通 React、Vue、Node.js 全栈技术，具备从 0 到 1 打造企业级低代码（Low-Code）平台、CLI 工具链及高性能可视化引擎的实战经验。'
    },
    {
      title: '多端全场景覆盖',
      desc: '深耕混合开发（Hybrid）、微信小程序、跨端框架（Weex/Rax）及 WebRTC 音视频通信，能够针对复杂业务提供最优跨平台解决方案。'
    },
    {
      title: '业务价值驱动',
      desc: '擅长将复杂的数据治理、GIS 地图及大数据分析转化为高价值的可视化决策工具，助力政企客户实现数字化转型。'
    }
  ],
  workExperience: [
    {
      company: 'Linktivity 株式会社',
      location: '日本',
      position: '前端专家',
      period: '2024.03 - 至今',
      projects: [
        {
          name: 'GO TAXI 打车小程序',
          desc: '主导打车业务在微信生态的落地，通过优化地图交互与订单状态流转，提升了赴日游客的出行体验与转化率。'
        },
        {
          name: '"旅日"小程序',
          desc: '负责一站式旅游服务平台的架构维护与功能迭代，支撑高并发场景下的票务与景区展示。'
        },
        {
          name: 'ARS 票务管理系统',
          desc: '针对 B 端供应商设计并优化票务核销与管理后台，通过组件化重构显著降低了多语言版本的维护成本。'
        }
      ]
    },
    {
      company: '杭州数梦工场科技有限公司',
      location: '',
      position: '高级前端专家',
      period: '2019.09 - 2024.02',
      projects: [
        {
          name: '低代码（Low-Code）表单中台建设',
          desc: '作为核心架构负责人，设计并实现了数据驱动的 SaaS 平台。通过封装渲染引擎为标准 NPM 组件，赋能多业务部门提升了 60% 以上的表单开发效率。'
        },
        {
          name: '政务大数据可视化大屏解决方案',
          desc: '负责国家级减灾中心等大数据项目。针对 Echarts 无法满足的定制化需求，基于 D3 引擎自研特色可视化效果，助力管理者实现高效的数据决策。'
        },
        {
          name: 'dt-visual 企业级 CLI 框架研发',
          desc: '主导编写了一套 Node.js 工具链，实现可视化组件的快速编写、审核与一键私仓发布，沉淀了标准化的前端生产力工具。'
        }
      ]
    },
    {
      company: '兰迪少儿英语',
      location: '',
      position: '前端专家',
      period: '2018.08 - 2019.06',
      projects: [
        {
          name: '在线互动上课平台 2.0',
          desc: '基于 WebRTC 与 PixiJS 引擎，将传统的白板教学升级为高性能游戏化互动模式。通过建立信令中心与音视频优化，极大地增强了 K12 用户的学习粘性。'
        }
      ]
    },
    {
      company: '阿里巴巴（中国）有限公司',
      location: '',
      position: '资深前端',
      period: '2017.07 - 2018.08',
      projects: [
        {
          name: '小小优酷（Weex 项目）核心研发',
          desc: '利用 Weex + Rax 架构实现一套代码多端适配。结合 Native 底层优化解决了跨端性能瓶颈，有效提升了开发效率并节约了成本。'
        },
        {
          name: '营销自动化闭环',
          desc: '设计并实现基于 Weex 的自动化曝光埋点方案，为产品增长提供精准的数据支持。'
        }
      ]
    }
  ],
  coreProjects: [
    {
      name: '数据汇交分发系统',
      role: '前端负责人',
      value: '处理国家级大数据治理项目中的海量数据标准化与入库流程。引入微前端架构集成多业务模块，采用大文件切片上传技术，解决了复杂流程下的系统稳定性问题。'
    },
    {
      name: 'GIS 图形化分析系统',
      role: '项目负责人',
      value: '从 0 到 1 自研基于 Canvas 的 Smap 地图框架，摆脱对第三方商业服务的依赖。该系统成功支撑了公安时空数据关联分析业务，使公司具备了独立销售 GIS 产品的竞争优势。'
    }
  ],
  education: {
    school: '杭州电子科技大学',
    major: '软件工程',
    degree: '本科',
    period: '2005 - 2009'
  },
  skills: [
    'React', 'Vue', 'Node.js', 'TypeScript', 'JavaScript',
    'Weex', 'Rax', 'WebRTC', 'D3.js', 'Echarts',
    'Canvas', 'PixiJS', '微信小程序', 'Low-Code',
    'GIS', '微前端', 'Webpack', 'Vite'
  ]
}

function Resume() {
  return (
    <div className="resume">
      {/* Header Section */}
      <header className="resume-header">
        <div className="header-main">
          <div className="avatar">
            <span className="avatar-text">华</span>
          </div>
          <div className="header-info">
            <h1>{resumeData.name}</h1>
            <h2>{resumeData.title}</h2>
            <div className="basic-info">
              <span><i className="icon">👤</i>{resumeData.basicInfo.gender}</span>
              <span><i className="icon">📅</i>{resumeData.basicInfo.age}</span>
              <span><i className="icon">🏠</i>籍贯：{resumeData.basicInfo.hometown}</span>
              <span><i className="icon">💼</i>{resumeData.basicInfo.experience}</span>
              <span><i className="icon">📍</i>{resumeData.basicInfo.location}</span>
            </div>
            <div className="contact-info">
              <a href={`mailto:${resumeData.basicInfo.email}`}>
                <i className="icon">✉️</i>{resumeData.basicInfo.email}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Personal Advantages */}
      <section className="section advantages">
        <h3 className="section-title">
          <span className="title-icon">⭐</span>
          个人优势
        </h3>
        <div className="advantages-grid">
          {resumeData.advantages.map((item, index) => (
            <div key={index} className="advantage-card">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="section skills">
        <h3 className="section-title">
          <span className="title-icon">🛠️</span>
          技能标签
        </h3>
        <div className="skills-container">
          {resumeData.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section className="section experience">
        <h3 className="section-title">
          <span className="title-icon">💼</span>
          工作经历
        </h3>
        <div className="timeline">
          {resumeData.workExperience.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="job-header">
                  <div className="job-company">
                    <h4>{job.company} {job.location && <span className="location">({job.location})</span>}</h4>
                    <span className="position">{job.position}</span>
                  </div>
                  <span className="period">{job.period}</span>
                </div>
                <div className="job-projects">
                  {job.projects.map((project, pIndex) => (
                    <div key={pIndex} className="project">
                      <h5>{project.name}</h5>
                      <p>{project.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Projects */}
      <section className="section core-projects">
        <h3 className="section-title">
          <span className="title-icon">🚀</span>
          核心项目精选
        </h3>
        <div className="projects-grid">
          {resumeData.coreProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h4>{project.name}</h4>
                <span className="role">{project.role}</span>
              </div>
              <div className="project-value">
                <span className="value-label">价值：</span>
                <p>{project.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="section education">
        <h3 className="section-title">
          <span className="title-icon">🎓</span>
          教育经历
        </h3>
        <div className="education-content">
          <div className="edu-main">
            <h4>{resumeData.education.school}</h4>
            <div className="edu-details">
              <span className="major">{resumeData.education.major}</span>
              <span className="degree">{resumeData.education.degree}</span>
              <span className="period">{resumeData.education.period}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="resume-footer">
        <p>感谢您的阅读 | Thank you for reading</p>
      </footer>
    </div>
  )
}

export default Resume
