import React from "react";
import { Button } from "react-bootstrap";
import Cardcomponentinside from "./components/cardcomponentinside";
import eega from "./assets/eega.jpg"

export default function KannadaMovies(props) {
  const backToHome = () => {
    props.history.push("/");
  };
  return (
    <div>
      <div className="headingBar">
        <h1
          style={{
            backgroundColor: "rebeccapurple",
            padding: "10px",
            color: "whitesmoke",
          }}
        >
          kannadaMovies
        </h1>
        <Button onClick={backToHome} variant="warning">
          Back To Home
        </Button>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Cardcomponentinside img={eega} title="EEGA 2017" details="Best kannada movie i watched"/>
      </div>
    </div>
  );
}
