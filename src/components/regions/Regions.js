import React,{useState, useEffect} from "react";
import { getRegions } from "../../api/regionApi";
import RegionList from "./RegionList";



const  RegionsPage = () => {
    const [regions, setRegions] = useState([]);

useEffect(() => {
    getRegions().then((_regions) => {
      setRegions(_regions.results)});
}, []);
    return (
  <div className="jumbotron">
    <h1>Regions</h1>
    <RegionList regions={regions} />
  </div>
)
};

export default RegionsPage;
