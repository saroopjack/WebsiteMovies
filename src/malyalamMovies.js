import React from "react";
import { Button } from "react-bootstrap";
import premam from "./assets/premam.jpg";
import Cardcomponentinside from "./components/cardcomponentinside";

export default function malyalamMovies(props) {
  const backToHome = () => {
    props.history.push("/");
  };
  return (
    <div>
      <div className="headingBar">
        <h1 style={{ backgroundColor: "crimson", padding: "10px" }}>
          MalyalamMovies
        </h1>
        <Button style={{ backgroundColor: "purple"}} onClick={backToHome} >
          Back To Home
        </Button>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Cardcomponentinside
          img={premam}
          title="Premam"
          details="Blockbustar malayalam movie"
        />
      </div>
    </div>
  );
}
