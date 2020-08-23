import React, {Component} from 'react';
import {Row, Col, Container, Nav, Tab} from "react-bootstrap";
import pred from '../assets/sb-pred.jpg'
import osn from '../assets/sb-osn.jpg'
import bio from '../assets/ru-bio.jpg'
import lang from '../assets/ru-lang.jpg'
import math from '../assets/kg-math.jpg'

class About extends Component {
  render() {
    return (
      <div>
        <Container>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column mt-2">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Design</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Second</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Third</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Fourth</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">Fifth</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>

              <Col sm={9}>
                <Tab.Content className="mt-3">
                  <Tab.Pane eventKey="first">
                    <img src={osn} alt="sb-osn"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Assumenda blanditiis dignissimos ea,
                      fuga nulla provident repudiandae soluta voluptas.
                      Facilis, recusandae.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <img src={pred} alt="sb-pred"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Assumenda blanditiis dignissimos ea,
                      fuga nulla provident repudiandae soluta voluptas.
                      Facilis, recusandae.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <img src={bio} alt="ru-bio"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Assumenda blanditiis dignissimos ea,
                      fuga nulla provident repudiandae soluta voluptas.
                      Facilis, recusandae.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <img src={lang} alt="ru-lang"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Assumenda blanditiis dignissimos ea,
                      fuga nulla provident repudiandae soluta voluptas.
                      Facilis, recusandae.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    <img src={math} alt="kg-math"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Assumenda blanditiis dignissimos ea,
                      fuga nulla provident repudiandae soluta voluptas.
                      Facilis, recusandae.</p>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    );
  }
}

export default About;
