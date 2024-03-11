import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import animeProject from "../assets/img/anime-project.jpg";
import covidProject from "../assets/img/covid-project.jpg";
import companyProject from "../assets/img/company-project.jpg";
import policeProject from "../assets/img/police-project.PNG";
import project5 from '../assets/img/project-5.jpg'
import project6 from '../assets/img/project-6.jpg'

import colorSharp2 from "../assets/img/color-sharp2.png";

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
        <Row className="skill-bx">
          <Col size={12}>
            <h2>Projects</h2>
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
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
