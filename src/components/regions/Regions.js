import React,{useState, useEffect} from "react";
import { getRegions } from "../../api/regionApi";
import RegionList from "./RegionList";



const  RegionsPage = () => {
    const [regions, setRegions] = useState([]);

useEffect(() => {
    getRegions().then((_regions) => {
      setRegions(_regions.results)});
}, []);
if(regions.length>0)
{
    return (
  <div className="jumbotron">
    <h1>Regions</h1>
    <RegionList regions={regions} />
  </div>
)}
else {
  return(
    <div>
      <h1>Fetching Results...</h1>
    </div>
  );
}
};

export default RegionsPage;
