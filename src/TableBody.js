import React, { useState } from "react";
import moment from "moment";

const TableBody = ({ item, id, profileDisplay }) => {
  const [highLight, setHighLight] = useState("");

  const selected = () => setHighLight(highLight ? "" : "selected");
  const handleClick = () => {
    console.log(id);
    profileDisplay(item.id);
  };
  return (
    <tr onClick={selected} className={highLight}>
      <th scope="row" />
      <td>{item.title}</td>
      <td>{item.firstName}</td>
      <td>{item.surname}</td>
      <td>{item.email}</td>
      <td>{item.roomId}</td>
      <td>{item.checkInDate}</td>
      <td>{item.checkOutDate}</td>
      <td>
        {moment(item.checkOutDate).diff(moment(item.checkInDate), "days")}
      </td>
      <td>
        <button onClick={handleClick}>Show profile</button>
      </td>
    </tr>
  );
};
export default TableBody;
