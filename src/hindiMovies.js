import React from "react";
import { Button } from "react-bootstrap";
import Cardcomponentinside from "./components/cardcomponentinside";
import krish from "./assets/krish.jpg"

export default function HindiMovies(props) {
  const backHome = () => {
    props.history.push("/");
  };

  return (
    <div>
      <div className="headingBar">
        <h1 style={{backgroundColor:"yellowgreen",padding:"10px",}}>hindiMovies</h1>
        <Button onClick={backHome} variant="info">
          Back To Home
        </Button>
      </div>
      <br/>
      <div style={{display:"flex",justifyContent:"center"}}>
        <Cardcomponentinside img={krish} title="Krish 2012" details="best krish movie in the sequel"/>
      </div>
    </div>
  );
}
