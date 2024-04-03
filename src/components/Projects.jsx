import { Tab, Col, Container, Row, Nav } from "react-bootstrap";
import { ProjectsCard } from "./ProjectsCard";
import IMG1 from "../assets/img/henry-countries-pi.PNG";
import IMG2 from "../assets/img/henry-games.PNG";
import IMG3 from "../assets/img/logo___ts.png";
import IMG4 from "../assets/img/portfolio1.PNG";
import IMG5 from "../assets/img/NAwer.png";
import IMG6 from "../assets/img/NAwerResized.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import alasQatal from "../assets/img/alasQatal.png";
import { Link } from "react-router-dom";

export const Projects = () => {
  
  const projects = [
    {
      imgUrl: IMG1,
      title: "Henry Countries",
      github: "https://github.com/Geryer86/PI-Countries",
      demo: "https://pi-countries-inky.vercel.app",
      description: "World countries activities creation and consult"
    },
    {
      imgUrl: IMG2,
      title: "Henry Games",
      github: "https://github.com/Geryer86/HenryGames-PG",
      demo: "https://henry-games-pg.vercel.app",
      description: "Videogames e-commerce for game developers and gamers"
    },
    {
      imgUrl: IMG6,
      title: "NaweR",
      github: "https://github.com/Geryer86/NaweR",
      demo: "https://github.com/Geryer86/NaweR",
      description: "Agricultural app for begginer professionals and farmers who needs simple recomendations for crop and animals field production"
    },

  ]

  const projects2 = [
    {
      imgUrl: IMG4,
      title: "My older portfolio",
      github: "",
      demo: "https://my-portfolio-lime-beta.vercel.app/",
      description: ""
    }
  ]

  const projects3 = [
    {
      imgUrl: IMG3,
      title: "Subscribers List",
      github: "https://github.com/Geryer86/Subscriptors-list",
      demo: "https://subscriptors-list.vercel.app/",
      description: "(Typescript project from Midudev tutorials)"
    }
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Here you can check some of the projects where I've been working on</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Academic and work</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Older projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Other simple projects</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((projects, index) => {
                        return (
                          <ProjectsCard
                            key={index}
                            {...projects}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {
                      projects2.map((projects, index) => {
                        return (
                          <ProjectsCard
                            key={index}
                            {...projects}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <Row>
                    {
                      projects3.map((projects, index) => {
                        return (
                          <ProjectsCard
                            key={index}
                            {...projects}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}