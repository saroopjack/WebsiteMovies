import React from "react";
import { Button } from "react-bootstrap";
import Cardcomponentinside from "./components/cardcomponentinside";
import master from "./assets/master.jpg";

export default function TamilMovies(props) {
  const backHome = () => {
    props.history.push("/");
  };
  return (
    <div>
      <div className="headingBar">
        <h1
          style={{ backgroundColor: "blue", padding: "10px", color: "white" }}
        >
          tamilMovies
        </h1>
        <Button onClick={backHome} variant="danger">
          Back To Home
        </Button>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Cardcomponentinside
          img={master}
          title="Master 2020"
          details="Blockbustar Tamil movie"
        />
      </div>
    </div>
  );
}
