import { useState, useEffect } from "react"

import { Row, Col, Container } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"
import girlComputer2 from "../assets/img/girl-computer-2.PNG"


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() =>
    {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2 )
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ""){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    const toRotate = ["Software Developer", "Python Developer", "Spring' 24 Graduate Student"];

    return (
        <section className = "banner" id = "about">
            <Container> 
                <Row className="align-items-center">
                    <Col xs = {12} >
                    {/* md = {6} xl = {7} */}
                        <span className="tagline">Welcome to my portfolio</span>
                        <h2>{`Hi, I'm Manogna Chennuru `}</h2>
                        {/* <h3><span className="wrap">{text}</span></h3> */}
                        <br>
                        </br><p>
                        I am a Software Developer based in Charlotte, North Carolina, holding a Master's Degree in Computer Science from the University of North Carolina at Charlotte, and a Bachelor's Degree in Computer Science and Engineering from Sreenidhi Institute in India. With previous experience at Automatic Data Processing, a multinational corporation, I am actively pursuing software developer roles.
                        </p> 
                        <p> 
                        Additionally, my tenure as a Teaching Assistant has enhanced my skills, particularly in Amazon Web Services. My project portfolio showcases a practical, user-centric approach to problem-solving. Proficient in programming languages such as Java, Python, and JavaScript, coupled with expertise in software development methodologies, I am keen on contributing to innovative projects and making a meaningful impact in the industry.
                        </p>
                        <button className='vvd' onClick={() => window.location.href = '#contact'}>
                            <span>Let's Connect <ArrowRightCircle size = {25}/>  </span>
                        </button>
                    </Col>
                    {/* <Col xs = {12} md = {6} xl = {5}>
                        <img src = {headerImg} alt = "header Img" ></img>

                    </Col> */}
                </Row>
            </Container>
        </section>
    )
}

