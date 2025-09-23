import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import project images
import shoeApp from "../../Assets/Projects/shoe.jpg";
import quizApp from "../../Assets/Projects/quiz.png";
import budgetApp from "../../Assets/Projects/budget.png";
import smartHome from "../../Assets/Projects/smart.png";
import webScraping from "../../Assets/Projects/scrap.png";
import prisonSystem from "../../Assets/Projects/prison.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Online Shoes Web App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoeApp}
              isBlog={false}
              title={<span className="purple" title="Online Shoes Web App">Online Shoes Web App</span>}
              description="Developed a fully functional online shoes store
               web application using HTML, CSS, JavaScript, and PHP. 
               Users can browse products, view details, add items to a
                shopping cart, and manage orders. Implemented responsive 
                design for a seamless experience across devices and used PHP 
                for server-side processing."
              ghLink="https://github.com/yemariamlij/OnlineShoesWebApp"
              demoLink="https://your-demo-link.com"
            />
          </Col>

          {/* Prison Information Management System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prisonSystem}
              isBlog={false}
              title={<span className="purple" title="Prison Information Management System">Prison Information Management System</span>}
              description="Developed a comprehensive Prison Information Management 
              System using Laravel Blade. The system allows administrators and
               staff to efficiently manage prison data, including inmate records,
                security personnel, and prison operations. Features include role-based 
                access control, CRUD operations, and secure data handling."
              ghLink="https://github.com/yemariamlij/PrisonManagementSystem"
              demoLink="https://your-demo-link.com"
            />
          </Col>

          {/* Smart Home System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartHome}
              isBlog={false}
              title={<span className="purple" title="Smart Home System">Smart Home System</span>}
              description="Developed a Smart Home System using embedded systems to
               automate and control home appliances. The system allows users to 
               remotely manage lights, fans, and other devices through a 
               microcontroller-based setup. Implemented sensors and actuators 
               to monitor environmental conditions and enhance energy efficiency."
              ghLink="https://github.com/yemariamlij/SmartHomeSystem"
              demoLink="https://your-demo-link.com"
            />
          </Col>

          {/* Online Quiz App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizApp}
              isBlog={false}
              title={<span className="purple" title="Online Quiz App">Online Quiz App</span>}
              description="Developed an Online Quiz Application using Java GUI
               for the front-end and Java Servlets for server-side processing. 
               Users can take quizzes, view scores, and track performance. 
               Features include multiple-choice questions, real-time score 
               calculation, and session management."
              ghLink="https://github.com/yemariamlij/OnlineQuizApp"
              demoLink="https://your-demo-link.com"
            />
          </Col>

          {/* Budget Tracking Management System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budgetApp}
              isBlog={false}
              title={<span className="purple" title="Budget Tracking Management System">Budget Tracking Management System</span>}
              description="Developed a Budget Tracking Management System 
              using React.js for the front-end, Node.js and Express for the
               back-end, and MongoDB for the database. Users can manage income 
               and expenses, categorize transactions, and track financial health
                with interactive dashboards and secure authentication."
              ghLink="https://github.com/yemariamlij/BudgetTrackingSystem"
              demoLink="https://your-demo-link.com"
            />
          </Col>

          {/* Web Scraping Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webScraping}
              isBlog={false}
              title={<span className="purple" title="Web Scraping Project">Web Scraping Project</span>}
              description="Developed a Web Scraping application using Python 
              and BeautifulSoup to extract and process data from websites
               efficiently. Implemented parsing techniques to navigate HTML 
               structures, handle dynamic content, and store the scraped
                data in structured formats like CSV or databases."
              ghLink="https://github.com/yemariamlij/WebScrapingProject"
              demoLink="https://your-demo-link.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
