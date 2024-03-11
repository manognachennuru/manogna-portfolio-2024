import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import adpLogo from "../assets/img/adp-logo-2.PNG"
import uncLogo from "../assets/img/uncc-logo.PNG"

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
                  <Col xs={3} className="text-center">
                    <img src={adpLogo} alt="ADP Logo" className="curved-img" />
                  </Col>
                  <Col xs={9}>
                    <h3>Software Engineer</h3>
                    <p>Automatic Data Processing (ADP), Hyderabad, India</p>
                    <ul>
                      <li>Worked as a Site Reliability Engineer (SRE) at ADP, contributing to the maintenance and optimization of the ADP VANTAGE product.</li>
                      <li>Automated end-to-end build, integration, delivery, and deployment processes using Ansible, Groovy, and Jenkins, resulting in improved operational efficiency and reduced deployment errors.</li>
                      <li>Managed ICP deployments in IBM Cloud, EKS deployments in AWS Cloud, and legacy UI and DB deployments in virtual machines.</li>
                      <li>Collaborated with cross-functional development and testing teams to optimize system performance and troubleshoot deployment issues, earning recognition, including SRE Of the Month in August 2022.</li>
                    </ul>
                  </Col>
                </Row>
              </div>
              <div className="experience-item">
                <Row className="align-items-center">
                  <Col xs={3} className="text-center">
                    <img src={uncLogo} alt="UNC Logo" className="curved-img" />
                  </Col>
                  <Col xs={9}>
                    <h3>Teaching Assistant</h3>
                    <p>UNC Charlotte</p>
                    <p>Course ITCS 6100 - Big Data Analytics for Competitive Advantage under: Dr. Pamela Thompson.</p>
                    <div>
                      <ul>
                        <li>Provided instructional support and hands-on expertise with Amazon Web Services (AWS).</li>
                        <li>Engaged in course project development and grading assignment submissions for 100 students.</li>
                      </ul>
                      <p>Course ITCS 4111/5111 - Introduction to Natural Language Processing under: Dr. Razvan Bunescu.</p>
                      <ul>
                        <li>Collaborated in the development of course materials and assignments catering to both undergraduate and master's students.</li>
                        <li>Conducted two weekly office hours, aiding students with NLP queries and assignment comprehension.</li>
                      </ul>
                    </div>
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
