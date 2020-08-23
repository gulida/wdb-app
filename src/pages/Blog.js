import React, {Component} from 'react';
import {Card, Col, Container, ListGroup, ListGroupItem, Media, Row} from "react-bootstrap";

class Blog extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={9}>

              <Media className="m-5">
                <img
                  width={150}
                  height={150}
                  className="mr-3"
                  alt="imageBlog"
                  src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"
                />
                <Media.Body>
                  <h5>Blog Post</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ab alias aliquid cum esse facere fuga fugiat magnam nisi non
                    placeat praesentium provident quasi quia,
                    repellendus similique suscipit unde, ut voluptas!
                  </p>
                </Media.Body>
              </Media>

              <Media className="m-5">
                <img
                  width={150}
                  height={150}
                  className="mr-3"
                  alt="imageBlog"
                  src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"
                />
                <Media.Body>
                  <h5>Blog Post</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ab alias aliquid cum esse facere fuga fugiat magnam nisi non
                    placeat praesentium provident quasi quia,
                    repellendus similique suscipit unde, ut voluptas!
                  </p>
                </Media.Body>
              </Media>

              <Media className="m-5">
                <img
                  width={150}
                  height={150}
                  className="mr-3"
                  alt="imageBlog"
                  src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"
                />
                <Media.Body>
                  <h5>Blog Post</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ab alias aliquid cum esse facere fuga fugiat magnam nisi non
                    placeat praesentium provident quasi quia,
                    repellendus similique suscipit unde, ut voluptas!
                  </p>
                </Media.Body>
              </Media>

              <Media className="m-5">
                <img
                  width={150}
                  height={150}
                  className="mr-3"
                  alt="imageBlog"
                  src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"
                />
                <Media.Body>
                  <h5>Blog Post</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ab alias aliquid cum esse facere fuga fugiat magnam nisi non
                    placeat praesentium provident quasi quia,
                    repellendus similique suscipit unde, ut voluptas!
                  </p>
                </Media.Body>
              </Media>

            </Col>

            <Col md={3} >
              <h5 className="text-center mt-5">Categories</h5>

              <Card>
                <ListGroup variant="flush">
                  <ListGroupItem>Mathematics</ListGroupItem>
                  <ListGroupItem>Russian Language</ListGroupItem>
                  <ListGroupItem>Kyrgyz Language</ListGroupItem>
                  <ListGroupItem>Biology</ListGroupItem>
                </ListGroup>
              </Card>

              <Card className="mt-3" bg="light">
                <Card.Body>
                  <Card.Title>Side widget</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet beatae cumque dignissimos, exercitationem explicabo fugit,
                    harum hic nam necessitatibus numquam pariatur quo repudiandae soluta
                    tempore voluptates! Distinctio ipsa laborum nostrum omnis rerum soluta, veniam!
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Blog;
