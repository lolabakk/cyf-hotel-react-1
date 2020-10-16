import React from "react";
import TableRow from "./TableRow";

function TableBody({ results }) {
  console.log(results);
  return (
    <tbody>
      {results.map(result => {
        return <TableRow result={result} key={result.id} />;
      })}
    </tbody>
  );
}

export default TableBody;
