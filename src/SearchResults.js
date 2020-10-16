import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

function SearchResults({ results }) {
  return (
    <table className="table">
      <TableHead />
      <TableBody results={results} />
    </table>
  );
}
export default SearchResults;
