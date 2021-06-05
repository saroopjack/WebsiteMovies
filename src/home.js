import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Mollywood from "./assets/mollywood.jpg";
import Kollywood from "./assets/kollywood.png";
import Bollywood from "./assets/bollywood.png";
import Tollywood from "./assets/tollywood.jpg";
import Hollywood from "./assets/hollywood.jpg";
import Sandalwood from "./assets/sandalwood.jpg";
import Cardcomponent from "./components/cardcomponent";

export default function home(props) {
    return (
    <div>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <h1>Welcome Find all the south indian movies here</h1>
      </div>
      <div className="layoutColour">
        <Container style={{justifyContent:"center"}}>
          <Row style={{ padding: "2%" }}>
            <Col>
              <Cardcomponent
                pic={Mollywood}
                title="Malayalam"
                history={props.history}
                page="/malyalamMovies"
              />
            </Col>
            <Col>
              <Cardcomponent
                pic={Kollywood}
                title="Tamil"
                history={props.history}
                page="/tamilMovies"
              />
            </Col>
            <Col>
              <Cardcomponent
                pic={Bollywood}
                title="Hindi"
                history={props.history}
                page="/hindiMovies"
              />
            </Col>
          </Row>
          <Row style={{ padding: "2%" }}>
            <Col>
              <Cardcomponent
                pic={Tollywood}
                title="Telugu"
                history={props.history}
                page="/teluguMovies"
              />
            </Col>
            <Col>
              <Cardcomponent
                pic={Hollywood}
                title="English"
                history={props.history}
                page="/englishMovies"
              />
            </Col>
            <Col>
              <Cardcomponent
                pic={Sandalwood}
                title="Kannada"
                history={props.history}
                page="/kannadaMovies"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
