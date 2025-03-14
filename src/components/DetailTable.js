import React from "react";

const DetailsTable = ({ details }) => {
  if (!details || details.length === 0) return <p>No details available</p>;

  console.log("Rendering DetailsTable with:", details);

  return (
    <table className="table2" >
      <thead>
        <tr>Details table</tr>
        <tr>
          <th>Element Type</th>
          <th>Total Length</th>
        </tr>
      </thead>
      <tbody>
        {details.map((item, index) => {
          console.log("Item:", item); 
          return (
            <tr key={index}>
              <td>{item.type}</td>
              <td>
                {typeof item.length === "number"
                  ? item.length.toFixed(2) + " meters"
                  : "N/A"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DetailsTable;
