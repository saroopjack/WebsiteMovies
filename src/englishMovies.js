import React from "react";
import { Button } from "react-bootstrap";
import Cardcomponentinside from "./components/cardcomponentinside";
import notimetodie from "./assets/notimetodie.jpg";
import inception from "./assets/inception.jpg";

export default function EnglishMovies(props) {
  const engMovies = () => {
    props.history.push("/");
  };
  const engMovieList = [
    {
      name: "No Time To Die",
      image: notimetodie,
      description:
        "Recruited to rescue a kidnapped scientist, globe-trotting spy James Bond finds himself hot on the trail of a mysterious villain, who's armed with a dangerous new technology.",
      link: "https://www.youtube.com/watch?v=gD9J-968OU0",
    },
    {
      name: "Inception",
      image: inception,
      description:
        "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
      link: "https://www.youtube.com/watch?v=lfe60JYk_Kc",
    },
    {
      name: "Inception",
      image: "",
      description: "",
      link: "https://www.youtube.com/watch?v=lfe60JYk_Kc",
    },
    {
      name: "Inception",
      image: "",
      description: "",
      link: "https://www.youtube.com/watch?v=lfe60JYk_Kc",
    },
    {
      name: "Inception",
      image: "",
      description: "",
      link: "https://www.youtube.com/watch?v=lfe60JYk_Kc",
    },
  ];
  return (
    <div className="container">
      <div className="headingBar">
        <h1 style={{ backgroundColor: "thistle", padding: "10px" }}>
          englishMovies
        </h1>
        <Button onClick={engMovies} variant="success">
          Back To Home
        </Button>
      </div>
      <br />
      <div className="row">
        {engMovieList.map((movie) => {
          return (
            <div className="col-3" style={{ padding: "1%" }}>
              <Cardcomponentinside
                img={movie.image}
                title={movie.name}
                details={movie.description}
                ytLink={movie.link}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
