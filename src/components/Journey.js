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
                    <h3>Site Reliability Engineer</h3>
                    <p>Automatic Data Processing (ADP), Hyderabad, India</p>
                    <ul>
                      <li>Served as a <strong>Site Reliability Engineer (SRE)</strong> for ADP Vantage HCM, a robust payroll management solution designed for multinational corporations with over 1000 employees.</li>
                      <li>Implemented Automated End-to-End Continuous Build, Integration, Delivery, Release, and Deployment processes.</li>
                      <li>Led the implementation of a Webex integration for a Change Order (CO) management project, resulting in a substantial increase in productivity across the entire NAS VANTAGE TEAM, which consists of over a hundred employees.</li>
                      <li>Involved in the migration of infrastructure, transitioning from in-house virtual machines to <strong>Amazon Web Services</strong> EC2 hosts, EKS Clusters (Elastic Kubernetes Service), and Docker containers.</li>
                      <li>Developed CI/CD pipelines to facilitate deployment of user interface (UI) and database (DB) deployments.</li>
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
                    <h3>Teaching Assistant (Part time)</h3>
                    <p>UNC Charlotte, NC, USA</p>
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
                        <li>Employed <strong>Python</strong> proficiency with NumPy, Pandas, Spacy, NLTK, TensorFlow and Chat Completion API.</li>
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
                    <h3>Desktop support technician (Part time)</h3>
                    <p>UNC Charlotte OneIT office, Charlotte, NC, USA</p>
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
