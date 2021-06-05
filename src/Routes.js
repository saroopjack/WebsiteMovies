import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import MalyalamMovies from "./malyalamMovies";
import TamilMovies from "./tamilMovies";
import EnglishMovies from "./englishMovies";
import HindiMovies from "./hindiMovies";
import TeluguMovies from "./teluguMovies";
import KannadaMovies from "./kannadaMovies";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/malyalamMovies" component={MalyalamMovies} exact />
        <Route path="/tamilMovies" component={TamilMovies} exact />
        <Route path="/englishMovies" component={EnglishMovies} exact />
        <Route path="/hindiMovies" component={HindiMovies} exact />
        <Route path="/teluguMovies" component={TeluguMovies} exact />
        <Route path="/kannadaMovies" component={KannadaMovies} exact />
      </Switch>
    </div>
  );
}
