import { Row, Col, Container } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import resume from '../assets/img/manogna_resume_uncc.pdf';

export const Banner = () => {
    const handleDownloadResume = () => {
        window.open(resume, '_blank');
    };

    return (
        <section className="banner" id="about">
            <Container>
                <Row className="skill-bx align-items-center ">
                    <Col xs={12}>
                        <span className="tagline">Hello World</span>
                        <div>
                        <h4>{`I'm Manogna Chennuru `}</h4>
                        </div>
                        <div className="justified-paragraph">
                        <p>
                            I'm a <strong>Software Developer</strong> based in Charlotte, North Carolina, holding a Master's Degree in Computer Science from the University of North Carolina at Charlotte, and a Bachelor's Degree in Computer Science and Engineering from Sreenidhi Institute in India. With previous experience at Automatic Data Processing, a multinational corporation, I am actively pursuing software developer roles.
                        </p>
                        <p>
                            Additionally, my tenure as a Teaching Assistant has enhanced my skills, particularly in Amazon Web Services. My project portfolio showcases a practical, user-centric approach to problem-solving. Proficient in programming languages such as Java, Python, and JavaScript, coupled with expertise in software development methodologies, I am keen on contributing to innovative projects and making a meaningful impact in the industry.
                        </p>
                        </div>
                        
                    </Col>
                    <Col>
                    <div>
                        <button className="tagline" onClick={handleDownloadResume}>View Resume</button>
                        
                        <button className='tagline' onClick={() => window.location.href = '#contact'}>
                            <span>Let's Connect <ArrowRightCircle size={25} />  </span>
                        </button>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
