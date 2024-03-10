import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import logo from "../assets/img/logo.svg";
import linkedIn from "../assets/img/nav-icon1.svg";
import gitHub from '../assets/img/Github_white.svg';
import leetcode from '../assets/img/leetcode.svg';
import gmail from '../assets/img/Gmail_white.svg';

export const Contact = () => {
 
  return (
    
  <section className="contact" id="connect">
  <Container>
    <Row className="align-items-center">
      <Col size={6} sm={6}>
        <img src={contactImg} alt="Contact Us"/>
      </Col>
      
      <Col size={6} sm={6} className="text-center d-flex flex-column align-items-center">
        <div className="mb-3">
          {/* Adjust logo size */}
          <img className="logo larger-logo mb-2" src={logo} alt="Logo" />
        </div>
        <span className='navbar-text'> 
          {/* Add new CSS classes for social icons */}
          <div className='social-icon vertical-icons'>
            <div className="icon-label-and-icon">
              <div className="icon-label"> LinkedIn </div>
              <a href="https://www.linkedin.com/in/manogna-chennuru/"><img src={linkedIn} alt="" /></a>
            </div>
            <div className="icon-label-and-icon">
              <div className="icon-label"> Gmail </div>
              <a href="#"><img src={gmail} alt="" /></a>
            </div>
            <div className="icon-label-and-icon">
              <div className="icon-label"> GitHub </div>
              <a href="#"><img src={gitHub} alt="" /></a>
            </div>
            <div className="icon-label-and-icon">
              <div className="icon-label"> Leetcode </div>
              <a href="#"><img src={leetcode} alt="" /></a>
            </div>
          </div>
        </span>
      </Col>
    </Row>
  </Container>
</section>


  )
}