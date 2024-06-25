import React from "react";
import "../assets/Css/About.css";
import resume from "../assets/standcv.pdf"; // Update the path as needed

const About = () => {
  return (
    <div>
      <section id="about" className="about-section">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Hello! I'm <strong>Samuel Fasanya</strong>, a passionate Full
                Stack Developer and Data Scientist with <strong>3</strong> years
                of experience in building and scaling web applications and
                data-driven solutions. My expertise spans across both front-end
                and back-end technologies, allowing me to deliver comprehensive,
                high-quality software solutions.
              </p>
              <p>
                My journey in the tech world began with a deep curiosity about
                how things work, which led me to pursue a series of short online courses like{" "}
                <strong>machine learning specialisation</strong> from{" "}
                <strong>university of michigan</strong> and <strong> web development bootcamp</strong> from{" "}
                <strong>London App brewery</strong>. Since then, I have
                continually honed my skills through a variety of projects and
                professional experiences.
              </p>
              <div className="divider">
                <h3 className="divider-text">Technical Skills</h3>
              </div>
              <div className="skills">
                <div className="skill-category">
                  <h4>Front-End Development</h4>
                  <ul>
                    <li>HTML, CSS, JavaScript</li>
                    <li>Frameworks: React, Vue.js, Angular</li>
                    <li>Tools: Webpack, Babel, Sass</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Back-End Development</h4>
                  <ul>
                    <li>Node.js, Express.js</li>
                    <li>Python: Django, Flask, FastAPI</li>
                    <li>Java: Spring Boot</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Database Management</h4>
                  <ul>
                    <li>SQL: PostgreSQL, MySQL, SQLite</li>
                    <li>NoSQL: MongoDB, Redis</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Data Science & Machine Learning</h4>
                  <ul>
                    <li>Languages: Python, R</li>
                    <li>
                      Libraries: TensorFlow, PyTorch, Scikit-Learn, Pandas
                    </li>
                    <li>Data Visualization: Matplotlib, Seaborn, Plotly</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>DevOps & Tools</h4>
                  <ul>
                    <li>Docker, Kubernetes</li>
                    <li>AWS, Azure, GCP</li>
                    <li>CI/CD: Jenkins, GitHub Actions, Travis CI</li>
                  </ul>
                </div>
              </div>
              <h3>Professional Experience</h3>
              <p>
                I have worked with various companies and startups, where I
                played a pivotal role in developing, maintaining, and scaling
                web applications. Some of the key projects and roles include:
              </p>
              <ul>
                <li>
                  <strong>Lead Developer at Fash empowerment foundation</strong> - Led a team
                  of developers to create a robust fund-raising platform that
                  increased the company's online popularity fund-sourcing by 30%.
                </li>
                <li>
                  <strong>Data Scientist at Rotec Engineering</strong> -
                  Developed machine learning models to predict CO₂ emissions rates,
                  resulting in a 15% reduction in waste production rate.
                </li>
                <li>
                  <strong>Full Stack Developer at Enerscend Limited</strong> -
                  Developed a comprehensive company website featuring staff login capabilities,
                  ensuring secure access to internal resources and enhancing staff communication and collaboration.
                </li>
              </ul>
              <hr className="dotted-hr" />
              <h3>Selected Projects</h3>
              <p>Here are some of the projects I have worked on:</p>
              <ul>
                <li>
                  <strong>Company Website with Staff login:</strong>{" "}
                  <em>
                    Created a responsive and user-friendly platform for our employees,
                     ensuring they could access important internal resources securely and efficiently. Used
                     React ,Node.js ,MongoDB ,jwt ,Aws and Git. Streamlined access to information and resources,
                      reducing the time spent on administrative tasks.
                  </em>
                </li>
                <li>
                  <strong> CO₂ Emissions Prediction Model:</strong>{" "}
                  <em>
                  Developed a predictive model to estimate CO₂ emissions from various machines and devices used within the company,
                   enabling efficient and informed decision-making to reduce the carbon footprint. Used Python ,Tensorflow ,SQL ,
                   Docker, Github. Identified high-emission activities and suggested operational changes,
                    contributing to the company's sustainability goals.
                  </em>
                </li>
                <li>
                  <strong>Charity Website with Donation and Volunteer Entries:</strong>{" "}
                  <em>
                  Developed a comprehensive charity website using WordPress, custom edits with JavaScript
                  featuring donation and volunteer entry forms with secure payment processing via Paystack and Flutterwave.
                  The website facilitated easy volunteer sign-ups and improved the management of volunteer data.
                  </em>
                </li>
              </ul>
              <hr />
              <h3>My Journey and Philosophy</h3>
              <p>
                My approach to development and data science is rooted in a
                belief that technology should make life easier and more
                enjoyable. I am committed to writing clean, efficient code and
                leveraging data to drive decision-making. I stay updated with
                the latest industry trends and continually seek new challenges
                to grow my skill set.
              </p>
              <p>
                Outside of work, I enjoy Reading, which helps me
                maintain a balanced and creative mindset.
              </p>
              <p>
                Feel free to explore my projects, connect with me on LinkedIn,
                or reach out via email if you’d like to collaborate or learn
                more about my work!
              </p>
              <div className="downloadCV">
                <p>You can download my resume by clicking the button below.</p>
                <a
                  href={resume}
                  className="btn btn-primary"
                  download="your-resume.pdf"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
