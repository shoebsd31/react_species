import React from "react";
import {useState, useEffect} from "react";
import { getSpecies } from "../../api/speciesApi";
import SpeciesList from "./SpeciesList";

const SpeciesPage = (props) => {

  const { region } = props.match.params;
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      getSpecies(region).then((_species) => {
        console.log("species :",_species);
        setLoading(false);
        setSpecies(_species.result.filter(o=>o.class_name==="MAMMALIA" && o.category==="CR"))});
  }, []);
  
  return (
  <div className="jumbotron">
    <h1>Species in {region}</h1>
    {loading? <div>loading....</div>:<SpeciesList species={species} />}
  </div>
)};

export default SpeciesPage;
