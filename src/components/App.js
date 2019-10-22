import React from "react";
import { Route, Switch } from "react-router-dom";
import RegionsPage from "./regions/Regions";
import SpeciesPage from "./species/Species";
import ConservationPage from "./conservation/Conservation";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={RegionsPage} />
        <Route path="/species/:region" component={SpeciesPage} />
        <Route path="/conservation/:speciesName" component={ConservationPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
