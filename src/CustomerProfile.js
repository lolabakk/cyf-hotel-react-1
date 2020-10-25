import React, { useEffect, useState } from "react";
const CustomerProfile = ({ id }) => {
  const [clientProfile, setClientProfile] = useState("");
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => setClientProfile(data));
  }, [id]);
  return (
    id &&
    (clientProfile ? (
      <>
        {" "}
        <div>Customer profile {clientProfile.id}</div>
        <div>
          <ul>
            {/* <li>{clientProfile.id}</li> */}
            <li>{clientProfile.firstName}</li>
            <li>{clientProfile.surname}</li>
            <li>{clientProfile.email}</li>
            {clientProfile.vip ? <li>{clientProfile.phoneNumber}</li> : null}
          </ul>
        </div>
      </>
    ) : (
      <p>Loading....</p>
    ))
  );
};
export default CustomerProfile;
