import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import frc from '../assets/1.jpeg'
import frc2 from '../assets/2.jpeg'
import frc3 from '../assets/3.jpeg'
import frc4 from '../assets/4.jpeg'
import frc5 from '../assets/5.jpeg'
import frc6 from '../assets/6.jpeg'

class CarouselBox extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              height="800"
              className="d-block w-100"
              src={frc}
              alt="Frc"
            />
            <Carousel.Caption>
              <h3>Frc Image</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, at!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              height="800"
              className="d-block w-100"
              src={frc2}
              alt="Frc2"
            />
            <Carousel.Caption>
              <h3>Frc Image</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, at!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              height="800"
              className="d-block w-100"
              src={frc3}
              alt="Frc3"
            />
            <Carousel.Caption>
              <h3>Frc Image</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, at!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              height="800"
              className="d-block w-100"
              src={frc4}
              alt="Frc4"
            />
            <Carousel.Caption>
              <h3>Frc Image</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, at!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              height="800"
              className="d-block w-100"
              src={frc5}
              alt="Frc5"
            />
            <Carousel.Caption>
              <h3>Frc Image</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, at!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              height="800"
              className="d-block w-100"
              src={frc6}
              alt="Frc6"
            />
            <Carousel.Caption>
              <h3>Frc Image</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, at!</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </div>
    );
  }
}

export default CarouselBox;
