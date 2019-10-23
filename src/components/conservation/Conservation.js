import React from "react";
import {useState, useEffect} from "react";
import { getConservationMeasures } from "../../api/conservationApi";

const ConservationPage = (props) => {

  const { speciesName } = props.match.params;
  const [measures, setMeasures] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getConservationMeasures(speciesName).then((_measures) => {
        setLoading(false);
        var titles=Object.keys(_measures.result).map(function(k){return _measures.result[k].title}).join(", ");
        setMeasures(titles)});
  }, []);
  
  return (
  <div className="jumbotron">
    <h1>Conservation Measures for : {speciesName}</h1>
    <br></br>
    <hr></hr>
    <div>
    
    {loading? <div>loading....</div>:<h2>{measures}</h2> }
    </div>
  </div>
)
};

export default ConservationPage;
