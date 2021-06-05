import React from "react";
import { Button } from "react-bootstrap";
import Cardcomponentinside from "./components/cardcomponentinside";
import aryatwo from "./assets/aryatwo.jpg"

export default function TeluguMovies(props) {
  const backHome = () => {
    props.history.push("/");
  };
  return (
    <div>
      <div className="headingBar">
        <h1 style={{backgroundColor:"sandybrown",padding:"10px", color:"white"}}>teluguMovies</h1>
        <Button onClick={backHome} variant="info">
          Back To Home
        </Button>
      </div>
      <br />
      <div style={{display:"flex",justifyContent:"center"}}>
        <Cardcomponentinside img={aryatwo} title="arya 2" details="Arya 2 is a good movie from allu arjun."/>
      </div>
    </div>
  );
}
