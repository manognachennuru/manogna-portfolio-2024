import { useState, useEffect } from "react"

import { Row, Col, Container } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"
import girlComputer from "../assets/img/girl-computer.PNG"
import profileImg from "../assets/img/profile-pic.png"

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

    const toRotate = ["Software Developer", "Web Developer", "Spring' 24 Graduate Student"];

    return (
        <section className = "banner" id = "home">
            <Container> 
                <Row className="align-items-center">
                    <Col xs = {12} md = {6} xl = {7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h2>{`Hi, I'm Manogna Chennuru `}</h2>
                        <h3><span className="wrap">{text}</span></h3>
                        <p>
                        A Computer Science student at UNC Charlotte. With previous work experience at Automatic Data Processing, a multinational company, I am actively seeking software developer roles. Proficient in programming languages like Java, Python, and JavaScript, along with my expertise in software development methodologies, I am enthusiastic about contributing to innovative projects and making a meaningful impact in the industry.
                        </p>
                        <button onClick={() => console.log('connect')}> Let's Connect <ArrowRightCircle size = {25}/> </button>
                    </Col>
                    <Col xs = {12} md = {6} xl = {5}>
                        <img src = {profileImg} alt = "profile Img" ></img>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

