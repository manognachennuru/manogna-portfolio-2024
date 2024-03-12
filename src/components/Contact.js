
import { Container, Row, Col } from "react-bootstrap";
import linkedIn from "../assets/img/nav-icon1.svg";
import instagram from "../assets/img/nav-icon3.svg";
import gitHub from '../assets/img/Github_white.svg';
import leetcode from '../assets/img/leetcode.svg';
import gmail from '../assets/img/Gmail_white.svg';
import myPic from "../assets/img/my-pic-1.jpg";

export const Contact = () => {
  return (
  <section className="contact" id="contact">
  <Container>
    <Row className="skill-bx align-items-center">
          <Col size={6} sm={4} className="image-collage">
        <div className="image-container">
          <img className="curved-img" src={myPic} alt="myPic1" />
        </div>
        {/* <div className="image-container">
          <img className="curved-img" src={myPic2} alt="myPic2" />
        </div>
        <div className="image-container">
          <img className="curved-img" src={myPic3} alt="myPic3" />
        </div>
        <div className="image-container">
          <img className="curved-img" src={myPic4} alt="myPic4" />
        </div>
        <div className="image-container">
          <img className="curved-img" src={myPic5} alt="myPic5" />
        </div> */}
      </Col>

      <Col size={6} sm={6} className="text-center d-flex flex-column align-items-center">
        <div>
        <h2> Social Profiles </h2>
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
              <a href="mailto:manognachennuru125@gmail.com"><img src={gmail} alt="" /></a>
            </div>
            <div className="icon-label-and-icon">
              <div className="icon-label"> GitHub </div>
              <a href="https://github.com/manognachennuru"><img src={gitHub} alt="" /></a>
            </div>
            <div className="icon-label-and-icon">
              <div className="icon-label"> Leetcode </div>
              <a href="https://leetcode.com/manogna_125/"><img src={leetcode} alt="" /></a>
            </div>
            <div className="icon-label-and-icon">
              <div className="icon-label"> instagram </div>
              <a href="https://www.instagram.com/mano_chennuru_05/"><img src={instagram} alt="" /></a>
            </div>
          </div>
        </span>
      </Col>
    </Row>
  </Container>
</section>
  )
}