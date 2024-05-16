import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import adpLogo from "../assets/img/adp-logo-2.PNG"
import uncLogo from "../assets/img/uncc-logo.PNG"
import oneit from '../assets/img/one-it-logo.PNG'

export const Journey = () => {
  return (
    <section className="journey" id="journey">
      <Container>
        <Row className='skill-bx'>
          <Col xs={12}>
            <h2>My Journey</h2>
          </Col>
          <Col xs={12}>
            <div className="work-experience experience-box">
              <div className="experience-item">
                <Row className="align-items-center">
                  <Col xs={12} sm={3} className="text-center">
                    <img src={adpLogo} alt="ADP Logo" className="curved-img" />
                  </Col>
                  <Col xs={12} sm={9}>
                    <h3>Software Engineer</h3>
                    <p>Automatic Data Processing (ADP)</p>
                    <ul>
                      <li>Utilized ReactJS and Redux to refactor and modernize the user interface of the <strong> ADP Vantage HCM payroll system, </strong> implementing responsive design principles and state management techniques, consequently reducing user interaction time by 20% in the payroll management module.</li>
                      <li>Leveraged Spring Boot to enhance backend services, resulting in a 30% reduction in average response time for payroll processing requests.</li>
                      <li>Integrated OAuth2 with Spring Security to implement robust authentication and authorization mechanisms, ensuring secure access to sensitive payroll data.</li>
                      <li>Implemented comprehensive unit testing using JUnit and Mockito to validate the functionality and reliability of the enhanced payroll system across various use cases.</li>
                      <li>Collaborated with cross-functional teams to implement Docker for containerization and Jenkins for continuous integration and delivery, resulting in a streamlined deployment process and enhanced overall system reliability.</li>
                      <li>Played a key role in the migration of critical payroll system components to AWS cloud infrastructure, actively utilizing services such as AWS EC2, RDS, and Lambda, resulting in a 20% reduction in infrastructure costs, contributing to improved scalability.</li>
                      <li>Recognized with the <strong> Employee of the Month </strong> award (August 2022) for outstanding contributions to the project.</li>
                    </ul>
                    

                  </Col>
                </Row>
              </div>
              <div className="experience-item">
                <Row className="align-items-center">
                  <Col xs={12} sm={3} className="text-center">
                    <img src={uncLogo} alt="UNC Logo" className="curved-img" />
                  </Col>
                  <Col xs={12} sm={9}>
                    <h3>Graduate Assistant (Part time)</h3>
                    <p>UNC Charlotte</p>
                    {/* <p>Course ITCS 6100 - Big Data Analytics for Competitive Advantage under: Dr. Pamela Thompson.</p> */}
                    <div>
                    <ul>
                      <li>Collaborated extensively with the course instructor to develop comprehensive course materials and assignments tailored for undergraduate and master's students, ensuring alignment with curriculum objectives and academic standards.</li>
                      <li>Demonstrated proficiency in both Java and Python programming languages while grading student research projects, ensuring comprehensive assessment and feedback.</li>
                      <li>Provided hands-on assistance to students in implementing full-stack projects, encompassing frontend technologies such as React JS and Angular JS, backend technologies including Spring Boot and Node.js, along with database management systems like PostgreSQL and MySQL.</li>
                      <li>Actively participated in code reviews and provided constructive feedback to improve code quality and maintainability, along with, offering guidance in unit testing practices to ensure project robustness and successful completion.</li>
                    </ul>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="experience-item">
                <Row className="align-items-center">
                  <Col xs={12} sm={3} className="text-center">
                    <img src={oneit} alt="oneit" className="curved-img" />
                  </Col>
                  <Col xs={12} sm={9}>
                    <h3>Desktop Support Technician (Part time)</h3>
                    <p>UNC Charlotte OneIT office, Charlotte</p>
                    <ul>
                      <li>Effectively resolved software-related issues across the campus, ensuring the resolution of reported tickets on the OneIT website. </li>
                      <li>Managed the installation, setup, and configuration of newly acquired devices within the campus.</li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
