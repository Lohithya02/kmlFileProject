import React from "react";

const SummaryTable = ({ summary }) => {
  return (
    <div>
      <h3></h3>
      {summary ? (
        <table className="table1">
          <thead>
            <tr> Summary table</tr>
            <tr>
              <th>Element Type</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(summary).map((key) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{summary[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default SummaryTable;
