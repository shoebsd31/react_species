import React from "react";
import {useState, useEffect} from "react";
import { getConservationMeasures } from "../../api/conservationApi";

const ConservationPage = (props) => {

  const { speciesName } = props.match.params;
  const [measures, setMeasures] = useState([]);
  useEffect(() => {
    getConservationMeasures(speciesName).then((_measures) => {
        var titles=Object.keys(_measures.result).map(function(k){return _measures.result[k].title}).join(", ");
        setMeasures(titles)});
  }, []);
  
  return (
  <div className="jumbotron">
    <h1>Conservation Measures for : {speciesName}</h1>
    <br></br>
    <hr></hr>
    <div>
    <h2>{measures}</h2>
    </div>
  </div>
)
};

export default ConservationPage;
