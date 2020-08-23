import React, {Component} from 'react';
import CarouselBox from "../components/CarouselBox";
import {Button, Card, CardDeck, Container} from "react-bootstrap";
import shirin from '../assets/team/shirin.png'
import zhamilia from '../assets/team/zhamilia.jpg'
import aizat from '../assets/team/aizat.jpg'
import gulasel from '../assets/team/gulasel.jpg'

class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />

        <Container>

          <h2 className="text-center m-4">Our team</h2>

          <CardDeck className="m-4">

            <Card bg="warning" border="primary" text="primary">
              <Card.Img
                variant="top"
                src={shirin}
                alt="Shirin"
              />
              <Card.Body>
                <Card.Title>Mathematics</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Alias nesciunt praesentium quidem.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>

            <Card bg="success" border="primary" text="light">
              <Card.Img
                variant="top"
                src={gulasel}
                alt="Gulasel"
              />
              <Card.Body>
                <Card.Title>Biology</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Alias nesciunt praesentium quidem.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>

            <Card bg="info" border="primary" text="white">
              <Card.Body>
                <Card.Title>Russian Language</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Alias nesciunt praesentium quidem.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
              <Card.Img
                variant="top"
                src={zhamilia}
                alt="Zhamilia"
              />
            </Card>

            <Card bg="danger" border="primary" text="light">
              <Card.Img
                variant="top"
                src={aizat}
                alt="Aizat"
              />
              <Card.Body>
                <Card.Title>Kyrgyz Language</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Alias nesciunt praesentium quidem.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>

          </CardDeck>
        </Container>
      </>
    );
  }
}

export default Home;
