import './App.css'

const skills = {
  "Programming Languages": ["Python", "Kotlin", "Bash", "JavaScript", "HTML", "CSS"],
  "Machine Learning & AI": ["PyTorch", "CNNs", "Neural Networks", "Deep Learning", "Computer Vision", "NLP", "Image Classification", "Data Preprocessing"],
  "Web Development": ["Flask", "Django", "React", "REST APIs", "Frontend & Backend Development"],
  "Mobile Development": ["Kotlin", "Android Studio", "Firebase"],
  "Tools & Platforms": ["Git", "GitHub", "Linux (Kali Linux)", "VS Code", "Android Studio"],
  "Databases": ["SQLite", "Firebase Database"]
}

const projects = [
  {
    title: "AI-Powered Handwritten Digit Image Classifier",
    description:
      "Designed and implemented a CNN-based image classification system using PyTorch and the MNIST dataset. Built preprocessing pipelines, optimized model accuracy, and deployed the trained model through a Flask web application for real-time predictions.",
    tags: ["PyTorch", "CNN", "MNIST", "Flask", "Computer Vision"]
  },
  {
    title: "AI Spam Detection System",
    description:
      "Developing a machine learning system capable of classifying incoming messages as spam or legitimate. Applied NLP techniques such as text cleaning, tokenization, and feature extraction while building the backend architecture with Django.",
    tags: ["Python", "NLP", "Django", "Machine Learning"]
  },
  {
    title: "Android Translation Application",
    description:
      "Built a mobile translation application using Kotlin and Android Studio. Integrated translation APIs and Firebase services while implementing voice-input functionality, with a focus on responsive and user-friendly mobile experiences.",
    tags: ["Kotlin", "Android Studio", "Firebase", "APIs"]
  },
  {
    title: "Personal Developer Portfolio Website",
    description:
      "Created a responsive portfolio website showcasing technical projects, achievements, skills, downloadable CVs, and professional contact information using modern web technologies and GitHub Pages deployment.",
    tags: ["React", "HTML", "CSS", "JavaScript", "GitHub Pages"]
  },
  {
    title: "Machine Learning Learning Lab",
    description:
      "A practical collection of machine learning experiments covering regression, classification, neural networks, CNNs, model evaluation, and data preprocessing.",
    tags: ["Machine Learning", "Neural Networks", "CNNs", "Data"]
  }
]

const roadmap = [
  "Self-Driving Car Simulation — Computer Vision, OpenCV, Deep Learning and Reinforcement Learning",
  "Face Recognition System — OpenCV and CNN-based real-time detection",
  "AI-Powered Hospital Management System — Django, React and Machine Learning Analytics",
  "Student Performance Predictor — Neural Networks, Flask and Data Visualization"
]

function App() {
  return (
    <div className="site">
      <header className="nav">
        <a className="brand" href="#home">AGAN<span>.</span></a>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">AI / ML ENGINEER • FULL-STACK DEVELOPER • ANDROID DEVELOPER</p>
            <h1>Agan<br /><span>builds intelligent software.</span></h1>
            <p className="lead">
              Aspiring Software Engineer and Machine Learning practitioner focused on
              practical AI systems, full-stack development, Android applications and
              continuous software engineering growth.
            </p>
            <div className="actions">
              <a className="btn primary" href="#projects">Explore Projects</a>
              <a className="btn" href="/agan-portfolio/Agan_Full_Professional_CV.pdf" download>Download CV</a>
            </div>
            <div className="quick-links">
              <a href="https://github.com/aagan9904-a11y" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/agan-agan-8862b2266" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="terminal">
              <div className="terminal-top"><i></i><i></i><i></i><span>agan@dev:~</span></div>
              <div className="terminal-body">
                <p><b>$</b> whoami</p>
                <p className="accent">AI / ML Engineer</p>
                <p><b>$</b> focus</p>
                <p>AI • Full-Stack • Android</p>
                <p><b>$</b> environment</p>
                <p>Linux / Kali Linux</p>
                <p><b>$</b> status</p>
                <p className="success">building real-world systems_</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <span>01</span>
            <h2>About Me</h2>
          </div>
          <div className="two-col">
            <div>
              <p className="large">
                I am an aspiring Software Engineer and Machine Learning practitioner
                with hands-on experience building deep learning models using PyTorch
                and deploying real-world AI applications using Flask.
              </p>
              <p>
                I also work with Django and React for full-stack development and Kotlin
                with Android Studio for mobile applications. I enjoy solving real-world
                problems through practical project development and research.
              </p>
            </div>
            <div className="profile-facts">
              <div><span>Location</span><strong>Bungoma, Kenya</strong></div>
              <div><span>Education</span><strong>Bachelor of Information Technology</strong></div>
              <div><span>Status</span><strong>Final Year Student</strong></div>
              <div><span>Graduation</span><strong>Expected 2027</strong></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section muted">
          <div className="section-heading">
            <span>02</span>
            <h2>Technical Skills</h2>
          </div>
          <div className="skill-grid">
            {Object.entries(skills).map(([group, items]) => (
              <article className="skill-card" key={group}>
                <h3>{group}</h3>
                <div className="chips">
                  {items.map(item => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <span>03</span>
            <h2>Experience</h2>
          </div>
          <div className="timeline">
            <article>
              <div className="dot"></div>
              <div>
                <p className="eyebrow">SELF-DIRECTED PROJECTS</p>
                <h3>Machine Learning Engineer</h3>
                <ul>
                  <li>Built and trained CNN models for handwritten digit recognition.</li>
                  <li>Improved model performance through training optimization and experimentation.</li>
                  <li>Developed Flask applications for AI model deployment and real-time prediction systems.</li>
                </ul>
              </div>
            </article>
            <article>
              <div className="dot"></div>
              <div>
                <p className="eyebrow">LEARNING & PROJECTS</p>
                <h3>Full-Stack Developer</h3>
                <ul>
                  <li>Built backend systems using Django framework.</li>
                  <li>Developed interactive frontend interfaces and integrated APIs.</li>
                  <li>Structured projects using industry-standard development practices.</li>
                </ul>
              </div>
            </article>
            <article>
              <div className="dot"></div>
              <div>
                <p className="eyebrow">MOBILE DEVELOPMENT</p>
                <h3>Android Developer</h3>
                <ul>
                  <li>Developed mobile applications using Kotlin and Android Studio.</li>
                  <li>Integrated Firebase backend services and external APIs.</li>
                </ul>
              </div>
            </article>
            <article>
              <div className="dot"></div>
              <div>
                <p className="eyebrow">LINUX & SECURITY PRACTICE</p>
                <h3>Cybersecurity & Linux Practice</h3>
                <ul>
                  <li>Worked extensively in Kali Linux environments.</li>
                  <li>Practiced networking fundamentals, Linux administration and security concepts.</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section id="projects" className="section muted">
          <div className="section-heading">
            <span>04</span>
            <h2>Projects</h2>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="chips">
                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-heading">
            <span>05</span>
            <h2>Education & Interests</h2>
          </div>
          <div className="two-col">
            <div className="education-card">
              <p className="eyebrow">KIBABII UNIVERSITY</p>
              <h3>Bachelor of Information Technology (BIT)</h3>
              <p>Final Year Student · Expected Graduation: 2027</p>
            </div>
            <div>
              <h3>Interests</h3>
              <div className="chips interest-chips">
                {["Artificial Intelligence", "Machine Learning", "Deep Learning", "Computer Vision", "Full-Stack Development", "Mobile Apps", "Open Source", "Cybersecurity", "Cloud Computing", "Software Engineering"].map(x => <span key={x}>{x}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section roadmap">
          <div className="section-heading">
            <span>06</span>
            <h2>Future Project Roadmap</h2>
          </div>
          <div className="roadmap-list">
            {roadmap.map((item, index) => (
              <div key={item}><span>0{index + 1}</span><p>{item}</p></div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Build something useful.</h2>
          <p>For professional opportunities, project discussions and collaboration.</p>
          <div className="contact-links">
            <a href="mailto:aagan9904@gmail.com">aagan9904@gmail.com</a>
            <a href="https://github.com/aagan9904-a11y" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/agan-agan-8862b2266" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Agan Agan</span>
        <span>AI / ML • Full-Stack • Android</span>
      </footer>
    </div>
  )
}

export default App
