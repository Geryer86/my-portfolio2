import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import headerImg2 from "../assets/img/palgithub.jpeg";
import "./banner.css";
import alasQatal from "../assets/img/alasQatal.png";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const Banner = () => {
  
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Germán Flores", "Web Developer", "Web Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)
    return () => {clearInterval(ticker)}
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1)
    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta/2)
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    }
    else if (isDeleting && updatedText === "") {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-item-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>{"Hi! I'm "}<span className="wrap">{text}</span></h1>
            <p>I'm a Full Stack Developer graduated in the SoyHenry Bootcamp. I was born in Argentina and currently living here. I'm also an Agricultural Engineer graduated in the Rosario National University (UNR) in Rosario, Argentina. I speak spanish (native), english (fluent), portuguese (intermediate) and italian (basic)</p>
            <Router>
            <HashLink to="#connect" className="link-demo">
              <button onClick={() => console.log("connect")}>Let's connect<ArrowRightCircle size={25}/></button>
            </HashLink>
            </Router>
          </Col>
          <Col xs={12} md={6} xl={5}>
            {/* <img src={alasQatal} alt="Header img"  className="banner-img"/> */}
            <img src={headerImg2} alt="Header img"  className="banner-img"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}