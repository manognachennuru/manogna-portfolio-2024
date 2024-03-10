import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import animeProject from "../assets/img/anime-project.jpg";
import covidProject from "../assets/img/covid-project.jpg";
import companyProject from "../assets/img/company-project.jpg";
import policeProject from "../assets/img/police-project.PNG";
import project5 from '../assets/img/project-5.jpg'
import project6 from '../assets/img/project-6.jpg'

import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Anime Script Assistant",
      description: "Techstack: Python, Spacy, TensorFlow, NLTK, scikit-learn, JSON, Chat Completion API with GPT",
      imgUrl: animeProject,
    },
    {
      title: "Covid-19 data prediction",
      description: "Tech Stack: Python, Pandas, NumPy, Matplotlib, Seaborn, Scikit-Learn",
      imgUrl: covidProject,
    },
    {
      title: "Company Collaboration web app",
      description: "JavaScript, Angular, REST APIs, Node JS, MySQL, AWS",
      imgUrl: companyProject,
    },
    {
      title: "Tableau Dashboard Project: Understanding Police Shootings 	",
      description: "Techstack: Tableau, Data Visualization, Data Analysis, Visual Analytics",
      imgUrl: policeProject,
    },
    {
      title: "Project 5",
      description: "tech stack",
      imgUrl: project6,
    },
    {
      title: "project 6",
      description: "tech stack",
      imgUrl: project5,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Data Analysis</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}