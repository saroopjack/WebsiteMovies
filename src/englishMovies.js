import React from "react";
import { Button } from "react-bootstrap";
import Cardcomponentinside from "./components/cardcomponentinside";
import notimetodie from "./assets/notimetodie.jpg"

export default function EnglishMovies(props) {
  const engMovies = () => {
    props.history.push("/");
  };
  return (
    <div>
      <div className="headingBar">
        <h1 style={{ backgroundColor: "thistle",padding:"10px"}}>
          englishMovies
        </h1>
        <Button onClick={engMovies} variant="success">
          Back To Home
        </Button>
      </div>
      <br/>
      <div style={{display:"flex",justifyContent:"center"}}>
          <Cardcomponentinside img={notimetodie} title="NoTimeToDie" details="Upcoming James Bond Movie"/>
      </div>
    </div>
  );
}
