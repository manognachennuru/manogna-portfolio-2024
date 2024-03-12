import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="skill-bx align-items-center">
          {/* <Col size={12} sm={6}>
            <h2> The End </h2>
          </Col> */}
          <Col size={12} sm={6} className="text-center text-sm-end">
            {/* <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div> */}
            <a href = "#about"><p>https://manognachennuru.github.io</p></a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}