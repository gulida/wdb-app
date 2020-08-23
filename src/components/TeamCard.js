import React from "react";
import {Button, Card} from "react-bootstrap";

export default function ({bg,  src, alt, title, cardText}) {
  return (
    <Card bg={bg} border="primary" text="light">
      <Card.Img
        variant="top"
        src={src}
        alt={alt}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {cardText}
        </Card.Text>
        <Button variant="primary">About team</Button>
      </Card.Body>
    </Card>
  )

}
