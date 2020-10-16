import React from "react";

function TableHead() {
  return (
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Title</th>
        <th scope="col">firstName</th>
        <th scope="col">surname</th>
        <th scope="col">email</th>
        <th scope="col">roomid</th>
        <th scope="col">checkInDate</th>
        <th scope="col">checkOutDate</th>
        <th scope="col">No of Nights</th>
      </tr>
    </thead>
  );
}

export default TableHead;
