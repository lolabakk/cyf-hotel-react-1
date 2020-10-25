import React, { useState } from "react";
// import FakeBookings from "./FakeBookings";
import CustomerProfile from "./CustomerProfile.js";
import TableHead from "./TableHead.js";
import TableBody from "./TableBody.js";

const SearchResults = ({ results }) => {
  const [displayProfile, setDisplayProfile] = useState("");
  const profileDisplay = id => {
    setDisplayProfile(id);
  };
  return (
    <>
      <div className="tableHeading">
        <table className="table lg-col-12 col-12">
          <thead className="table-head lg-col-11 col-11" />

          <thead>
            <tr>
              <th scope="row" />
              <th scope="col">Title</th>
              <th scope="col">First name</th>
              <th scope="col">Surname</th>
              <th scope="col">Email</th>
              <th scope="col">Room id</th>
              <th scope="col">Check in date</th>
              <th scope="col">Check out date</th>
              <th scope="col">Number of nights</th>
              <th scope="col">Profile</th>
            </tr>
          </thead>
          <tbody>
            {results.map(item => (
              <TableBody item={item} profileDisplay={profileDisplay} />
              // "table-responsive table-hover"
            ))}
          </tbody>
        </table>
        <CustomerProfile id={displayProfile} />
      </div>
    </>
  );
};
export default SearchResults;
