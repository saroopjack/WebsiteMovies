import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Cardcomponent(props) {
  const handleClick = () => {
   props.history.push(props.page)
  };
  return (
    <div>
      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" src={props.pic} style={{ height: "200px" }} />
        <Card.Body
          style={{ backgroundColor: "lightslategrey", color: "white" }}
        >
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>All the {props.title} movies found here.</Card.Text>
          <Button variant="dark" onClick={handleClick}>
            Go To Movies
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}