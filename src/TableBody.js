import React from "react";

function TableBody({ results }) {
  console.log(results);
  return (
    <tbody>
      {results.map(result => {
        return (
          <tr>
            <th scope="row">{result.id}</th>
            <td>{result.title}</td>
            <td>{result.firstName}</td>
            <td>{result.surname}</td>
            <td>{result.email}</td>
            <td>{result.roomId}</td>
            <td>{result.checkInDate}</td>
            <td>{result.checkOutDate}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
