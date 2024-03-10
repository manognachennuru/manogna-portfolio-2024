import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Row, Col, Container } from "react-bootstrap"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
      

    const skillCategories = [
        {
            title: 'Coding Skills',
            skills: [
                { name: 'Python', level: 60 },
                { name: 'Go Lang', level: 80 },
                { name: 'Java', level: 60 },
                { name: 'JavaScript', level: 80 },
                { name: 'React JS', level: 60 },
                { name: 'Node.js', level: 80 }
            ]
        },
        {
            title: 'Cloud Technologies',
            skills: [
                { name: 'Amazon Web Services', level: 60 },
                { name: 'Docker', level: 80 },
                { name: 'Kubernetes', level: 60 },
                { name: 'Jenkins', level: 80 },
                { name: 'CI/CD Pipelines', level: 60 },
                { name: 'Ansible', level: 80 }
            ]
        },
        {
            title: 'Others',
            skills: [
                { name: 'GIT', level: 60 },
                { name: 'Linux', level: 80 },
                { name: 'Tableu', level: 60 },
                { name: 'Unit Testing', level: 80 },
                { name: 'Agile methodologies', level: 60 },
                { name: 'MySQL', level: 80 }
            ]
        }
    ];
  
    return (
      <section className="skill" id="skills">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="skill-bx wow zoomIn">
                          <h2>Skills</h2>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                              <div className="item">
                                  <img src={meter1} alt="Image" />
                                  <h5>Python</h5>
                              </div>
                              <div className="item">
                                  <img src={meter2} alt="Image" />
                                  <h5>Golang</h5>
                              </div>
                              <div className="item">
                                  <img src={meter3} alt="Image" />
                                  <h5>Java</h5>
                              </div>
                              <div className="item">
                                  <img src={meter1} alt="Image" />
                                  <h5>Web Development</h5>
                              </div>
                          </Carousel> <br></br><br></br>
                          <p> another version below !</p>
                             
                            <Row>
                            {skillCategories.map((category, index) => (
                                <Col key={index} xs={12} md={4}>
                                <div className="column-box">
                                    <h3>{category.title}</h3>
                                    {category.skills.map((skill, index) => (
                                    <div key={index} className="skill-box">
                                        <div className="skill-content">
                                        <div className="skill-name">{skill.name}</div>
                                        <div className="percentage-label">{skill.level}%</div>
                                        </div>
                                        <ProgressBar now={skill.level} />
                                    </div>
                                    ))}
                                </div>
                                </Col>
                            ))}
                            </Row>
                      </div>
                  </div>
              </div>
          </div>
          <img className="background-image-left" src={colorSharp} alt="Image" />
          
      </section>
      
    )
  } 