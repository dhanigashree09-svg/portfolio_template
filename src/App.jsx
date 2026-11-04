
import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">DS.</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-content">
          <p className="small-heading">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Dhaniga Shree.</span>
          </h1>

          <h2>Computer Science Student</h2>

          <p className="hero-description">
            I am a passionate Computer Science student
            interested in Web Development, Front-End
            Development and Full Stack Development.
            I love learning new technologies and
            creating creative websites.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/profile.jpg" alt="Dhaniga Shree" />
        </div>

      </section>

      {/* About Section */}
      <section className="section" id="about">
        <p className="section-label">GET TO KNOW ME</p>
        <h2>About Me</h2>

        <p className="about-text">
          Hello! I'm Dhaniga Shree P., a third-year
          Bachelor of Computer Science student at
          Navarasam Arts and Science College for Women,
          Arachalur.

          I have basic knowledge of programming languages
          and web technologies. I am interested in
          developing user-friendly websites and improving
          my technical skills.

          My goal is to build a successful career in
          the IT field.
        </p>
      </section>

      {/* Education Section */}
      <section className="section education" id="education">
        <p className="section-label">MY JOURNEY</p>
        <h2>Education</h2>

        <div className="info-card">
          <h3>Bachelor of Computer Science</h3>
          <p>Navarasam Arts and Science College for Women</p>
          <p>Arachalur</p>
          <span>2024 – 2027</span>
        </div>

        <div className="info-card">
          <h3>Higher Secondary Certificate (HSC)</h3>
          <p>Government Model Higher Secondary School</p>
          <p>Kundadam</p>
          <span>2024</span>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <p className="section-label">WHAT I KNOW</p>
        <h2>Technical Skills</h2>

        <div className="skills-grid">
          <div className="skill-card">C</div>
          <div className="skill-card">C++</div>
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">Java</div>
          <div className="skill-card">Python</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React Basics</div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="section">
        <p className="section-label">MY STRENGTHS</p>
        <h2>Soft Skills</h2>

        <div className="skills-grid">
          <div className="skill-card">Communication</div>
          <div className="skill-card">Leadership</div>
          <div className="skill-card">Time Management</div>
          <div className="skill-card">Adaptability</div>
          <div className="skill-card">Decision Making</div>
        </div>
      </section>

      {/* Certificates */}
      <section className="section" id="certificates">
        <p className="section-label">MY ACHIEVEMENTS</p>
        <h2>Certificates</h2>

        <div className="certificate-list">
          <div className="info-card">
            <h3>Web Development</h3>
            <p>Certificate Course</p>
          </div>

          <div className="info-card">
            <h3>Front-End Development</h3>
            <p>Certificate Course</p>
          </div>

          <div className="info-card">
            <h3>Oracle AI Database</h3>
            <p>Certificate Course</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="projects">
        <p className="section-label">WHAT I'VE CREATED</p>
        <h2>My Projects</h2>

        <div className="project-grid">
          <div className="project-card">
            <h3>Domainhostly</h3>
            <p>
              A web-based hosting and domain services
              website developed using React.
            </p>
            <span>React | HTML | CSS</span>
          </div>

          <div className="project-card">
            <h3>Hospital Management System</h3>
            <p>
              A database project designed to manage
              hospital-related information.
            </p>
            <span>Database Management</span>
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="section">
        <p className="section-label">AREAS I LIKE</p>
        <h2>My Interests</h2>

        <div className="skills-grid">
          <div className="skill-card">Web Development</div>
          <div className="skill-card">Front-End Development</div>
          <div className="skill-card">Full Stack Development</div>
          <div className="skill-card">Cyber Security</div>
        </div>
      </section>

      {/* Contact */}
      <section className="section contact" id="contact">
        <p className="section-label">LET'S CONNECT</p>
        <h2>Contact Me</h2>

        <p>
          Feel free to connect with me for opportunities
          and professional discussions.
        </p>

        <div className="contact-links">
          <a href="dhanigashree09@gmail.com">
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/dhaniga-shree-0629ab417?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/dhanigashree09-svg"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Dhaniga Shree P. | My Portfolio</p>
        <p>Designed with creativity and passion.</p>
      </footer>

    </div>
  );
}

export default App;
