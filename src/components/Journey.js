import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Journey = () => {
  return (
    <section className="contact" id="journey">
      <Container>
        <Row>
          <Col md={6}>
            <div className="studies">
            <h2>Education</h2>
              <h3>University of North Carolina at Charlotte, Charlotte, NC</h3>
              <p>Master of Science in Computer Science</p>
              <p>GPA: 4.0/4.0</p>
              {/* Add more education details as needed */}
            </div>
            <div className="studies">
              <h3>Sreenidhi Institute of Science and Technology, Hyderabad, India</h3>
              <p>Bachelor of Science in Computer Science</p>
              <p>GPA: 8.3 /10 </p>
              {/* Add more education details as needed */}
            </div>
          </Col>
          <Col md={6}>
            <div className="work-experience">
              <h2>Work Experience</h2>
              <div className="experience-item">
                <h3>Software Engineer</h3>
                <p>Automatic Data Processing (ADP), Hyderabad, India		</p>
                <ul>
  <li>Worked as a Site Reliability Engineer (SRE) at ADP, contributing to the maintenance and optimization of the ADP VANTAGE product.</li>
  <li>Automated end-to-end build, integration, delivery, and deployment processes using Ansible, Groovy, and Jenkins, resulting in improved operational efficiency and reduced deployment errors.</li>
  <li>Managed ICP deployments in IBM Cloud, EKS deployments in AWS Cloud, and legacy UI and DB deployments in virtual machines.</li>
  <li>Collaborated with cross-functional development and testing teams to optimize system performance and troubleshoot deployment issues, earning recognition, including SRE Of the Month in August 2022.</li>
</ul>

              </div>
              <div className="experience-item">
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
              </div>
              
              {/* Add more experience items as needed */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
