import React, {Component} from 'react';
import CarouselBox from "../components/CarouselBox";
import { CardDeck, Container} from "react-bootstrap";
import TeamCard from "../components/TeamCard";
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

            <TeamCard bg="info"
                      src={shirin}
                      alt="Shirin"
                      title="Mathematics"
                      cardText="Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Alias nesciunt praesentium quidem."
            />
            <TeamCard bg="success"
                      src={gulasel}
                      alt="Gulasel"
                      title="Biology"
                      cardText="Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Alias nesciunt praesentium quidem."
            />

            <TeamCard bg="info"
                      src={zhamilia}
                      alt="Zhamilia"
                      title="Russian Language"
                      cardText="Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Alias nesciunt praesentium quidem."
            />

            <TeamCard bg="danger"
                      src={aizat}
                      alt="Aizat"
                      title="Kyrgyz Language"
                      cardText="Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Alias nesciunt praesentium quidem."
            />

          </CardDeck>
        </Container>
      </>
    );
  }
}

export default Home;
