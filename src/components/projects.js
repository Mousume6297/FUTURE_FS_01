import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function Projects() {
  return (
    <section id="projects">

      <h2>Projects</h2>

      <div className="projects-container">

        {/* AI Fitness Project */}
        <div className="project-box">

          <div className="project-header">
            <h3>AI Powered Fitness App</h3>

            <div className="project-icons">
              <a href="https://github.com/Mousume6297/Fitness_Hub" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>

              <a href="https://mousume6297.github.io/Fitness_Hub/" target="_blank" rel="noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>

          <p>
            A web application that recommends personalized workout
            and nutrition plans based on user goals and fitness level.
          </p>

          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>API Integration</span>
            <span>Responsive UI</span>
            <span>Chatbot</span>
          </div>

        </div>


        {/* Quizzer App */}
        <div className="project-box">

          <div className="project-header">
            <h3>Quizzer Android App</h3>

            <div className="project-icons">
              <a href="https://github.com/Mousume6297/Quizzer-Android-Application" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>

          <p>
            Android quiz application with multiple categories and
            difficulty levels using Firebase authentication and database.
          </p>

          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>API Integration</span>
            <span>Responsive UI</span>
            <span>Chatbot</span>
          </div>

        </div>


        {/* Employee Management */}
        <div className="project-box">
          <h3>Employee Management System</h3>

          <p>
            Java-based application to manage employee records with
            CRUD operations and MySQL database integration.
          </p>

          <div className="project-tech">
            <span>Java</span>
            <span>Firebase</span>
            <span>XML</span>
            <span>Android Studio</span>
            <span>OOP</span>
            <span>Authentication</span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Projects;