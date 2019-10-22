import React from "react";
import { Link } from "react-router-dom";

const SpeciesList=(props)=> {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Taxonomy Id</th>
          <th>Scientific Name</th>
          <th>Kingdom Name</th>
          <th>Phylum Name</th>
          <th>Class Name</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        { props.species.map(animal => {
          return (
            <tr key={animal.taxonid}>
              <td>{animal.taxonid}</td>
              <td>{animal.scientific_name}</td>
              <td>{animal.kingdom_name}</td>
              <td>{animal.phylum_name}</td>
              <td>{animal.class_name}</td>
              <td>{animal.category}</td>
              <td>
              <Link to={`/conservation/${animal.scientific_name}`}>
                    <button type="button">
                        Conservation Measures
                    </button>
                </Link>
                </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

}


export default SpeciesList;
