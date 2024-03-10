import {Navbar, Container, Nav} from 'react-bootstrap';
import { useState, useEffect } from 'react';

import logo from '../assets/img/logo.svg';
import linkedIn from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';
import gitHub from '../assets/img/Github_white.svg';
import leetcode from '../assets/img/leetcode.svg';
import gmail from '../assets/img/Gmail_white.svg';
import myname from '../assets/img/myname-4.png'
import profileImg from "../assets/img/profile-pic.png"

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState('false');

  useEffect(() => {
    const onScroll = () => {
        if (window.scrollY > 50){
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src = {myname} alt = 'myname'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className = "navbar-toggler-icon" ></span>    
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            {/* <Nav.Link href="#education" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('education')}>Education</Nav.Link>
            <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link> */}
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            
          </Nav>
          <span className='navbar-text'> 
            <div className='social-icon'>
                <a href = "https://www.linkedin.com/in/manogna-chennuru/"><img src={linkedIn} alt = ""/></a>
                <a href = "#"><img src={gmail} alt = ""/></a>
                <a href = "https://github.com/manognachennuru"><img src={gitHub} alt = ""/></a>
                <a href = "https://leetcode.com/manogna_125/"><img src={leetcode} alt = ""/></a>
            </div>
            <button className='vvd' onClick={() => console.log('connect')}> 
                <span> Let's Connect </span> 
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
