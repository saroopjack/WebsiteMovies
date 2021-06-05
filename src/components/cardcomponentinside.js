import React from "react";
import { Card } from "react-bootstrap";

export default function Cardcomponentinside(props) {
  return (
    <div>
      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" src={props.img} style={{ height: "200px" }} />
        <Card.Body
          style={{ backgroundColor: "teal", color: "white" }}
        >
          <Card.Title style={{textAlign:"center"}}>{props.title}</Card.Title>
          <Card.Text>{props.details}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
