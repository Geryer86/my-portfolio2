import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import html from '../assets/img/logo__html.png';
import css from "../assets/img/logo__css.png";
import javascript from "../assets/img//logo__js.png";
import node from "../assets/img/logo__node.png";
import postgreSQL from "../assets/img/logo__postgres.png";
import react from "../assets/img/logo__react.png";
import redux from "../assets/img/logo__redux.png";
import sequelize from "../assets/img/logo__sql.png";
import express from "../assets/img/logo__ex.png";
import typescript from "../assets/img/logo__ts.png";

export const Skills = () => {
  
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 4
    },
    tablet2: {
      breakpoint: { max: 768, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title:'CSS',
      style: 'shadow-blue-600'
    },
    {
      id: 3,
      src: react,
      title:'React',
      style: 'shadow-sky-500'
    },
    {
      id: 4,
      src: javascript,
      title:'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id:5,
      src: redux,
      title:'Redux',
      style: 'shadow-violet-500'
    }
  ]
  const techs2 = [
    {
      id: 6,
      src: express,
      title:'Express',
      style: 'shadow-gray-500'
    },
    {
      id: 7,
      src: sequelize,
      title:'Sequelize',
      style: 'shadow-sky-500'
    },
    {
      id: 8,
      src: node,
      title:'Node',
      style: 'shadow-green-400'
    },
    {
      id: 9,
      src: postgreSQL,
      title:'PostgreSQL',
      style: 'shadow-blue-300'
    },
    {
      id: 10,
      src: typescript,
      title:'TypeScript',
      style: 'shadow-blue-300'
    },
  ]

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                Techs
              </h2>
              <p>These are some of the techs in which I am specialized</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                {
                  techs.map(({ id, src, title, style }) => (
                    <div className={`${style}`}>
                      <img src={src} alt=""/>
                      <h4>{title}</h4>
                    </div>
                  ))
                }
                {
                  techs2.map(({ id, src, title, style }) => (
                    <div className={`${style}`}>
                      <img src={src} alt=""/>
                      <h4>{title}</h4>
                    </div>
                  ))
                }
                {/* <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Web Development</h5>
                </div> */}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  )
}
