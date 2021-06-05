import React from "react";
import { Button } from "react-bootstrap";
import premam from "./assets/premam.jpg";
import godfather from "./assets/godfather.jpg"
import devasuram from "./assets/devasuram.png"
import BigB from "./assets/BigB.jpg"
import twentytwenty from "./assets/twentytwenty.jpg"
import richie from "./assets/richie.jpg"
import drona from "./assets/drona.jpg"
import Cardcomponentinside from "./components/cardcomponentinside";

export default function malyalamMovies(props) {
  const movieList = [
    {
      name: "Premam",
      coverPhoto: premam,
      desc: "Blockbustar malayalam movie",
      youtubeLink: "https://www.youtube.com/watch?v=yjaFvFuQ-QM"
    },
    {
      name: "God Father",
      coverPhoto: godfather,
      desc: "Blockbustar malayalam movie 90",
      youtubeLink:"https://www.youtube.com/watch?v=f331Bnk0f6w"
    },
    {
      name: "Devasuram",
      coverPhoto: devasuram,
      desc: "Blockbustar malayalam movie",
      youtubeLink:"https://www.youtube.com/watch?v=hsRMPw5HkWo"

    },
    {
      name: "Big B",
      coverPhoto: BigB,
      desc: "Blockbustar malayalam movie",
      youtubeLink:"https://www.youtube.com/watch?v=LG7W5JFqwmg"
    },
    {
      name: "T20- T20",
      coverPhoto: twentytwenty,
      desc: "Blockbustar malayalam movie",
      youtubeLink:"https://www.youtube.com/watch?v=sb8LrOYXRF8"
    },
    {
      name: "richie",
      coverPhoto: richie,
      desc: "Blockbustar malayalam movie",
      youtubeLink:"https://www.youtube.com/watch?v=6Vlh25WZD6U"
    },
    {
      name: "dhrona",
      coverPhoto: drona,
      desc: "Blockbustar malayalam movie",
      youtubeLink:"https://www.youtube.com/watch?v=ySnPJMW1veE"
    },
  ];
  const backToHome = () => {
    props.history.push("/");
  };
  return (
    <div className="container">
      <div className="headingBar">
        <h1 style={{ backgroundColor: "crimson", padding: "10px" }}>
          MalyalamMovies
        </h1>
        <Button style={{ backgroundColor: "purple" }} onClick={backToHome}>
          Back To Home
        </Button>
      </div>
      <br />
      <div className="row">
        {movieList.map((movie) => {
          return (
            <div className="col-3" style={{ padding: "1%" }}>
              <Cardcomponentinside
                img={movie.coverPhoto}
                title={movie.name}
                details={movie.desc}
                ytLink={movie.youtubeLink}

              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
