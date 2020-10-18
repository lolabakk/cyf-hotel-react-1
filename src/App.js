import React from "react";
import Heading from "./Heading";
import TouristInfoCard from "./TouristInfoCards";

import Bookings from "./Bookings";
import "./App.css";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="App">
      <Heading />
      {/* <SearchButton /> */}
      <TouristInfoCard />
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;
