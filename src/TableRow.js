import React, { useState } from "react";
import moment from "moment";

function TableRow({ result }) {
  const [highlight, setHighlight] = useState(false);
  const handleClick = () => {
    setHighlight(!highlight);
  };

  return (
    <tr onClick={handleClick} className={highlight ? "table-active" : ""}>
      <th scope="row">{result.id}</th>
      <td>{result.title}</td>
      <td>{result.firstName}</td>
      <td>{result.surname}</td>
      <td>{result.email}</td>
      <td>{result.roomId}</td>
      <td>{result.checkInDate}</td>
      <td>{result.checkOutDate}</td>
      {moment(result.checkOutDate).diff(moment(result.checkInDate), "days")}
    </tr>
  );
}

export default TableRow;
