import React,{useState, useEffect} from "react";
import { getRegions } from "../../api/regionApi";
import RegionList from "./RegionList";



const  RegionsPage = () => {
    const [regions, setRegions] = useState([]);
    const [loading, setLoading] = useState(true);
useEffect(() => {
    getRegions().then((_regions) => {
      setLoading(false);
      setRegions(_regions.results)});
}, []);
    return (
  <div className="jumbotron">
    <h1>Regions</h1>
    
    {loading? <div>loading....</div>:<RegionList regions={regions} />}
  </div>
)
};

export default RegionsPage;
