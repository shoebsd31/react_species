import React from "react";
import { Link } from "react-router-dom";

const RegionList=(props)=> {
  return (
    <table className="table">
      <thead>
      </thead>
      <tbody>
        { props.regions.map(region => {
          return (
            <tr key={region.identifier}>
              <td>
                <Link to={`/species/${region.identifier}`}>{region.identifier}</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}


export default RegionList;
