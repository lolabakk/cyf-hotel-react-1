import React from "react";
import Heading from "./Heading";
import TouristInfoCard from "./TouristInfoCards";

import Bookings from "./Bookings";
import "./App.css";
import SearchButton from "./SearchButton";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <SearchButton />
      <TouristInfoCard />
      <Bookings />
      <Footer />
    </div>
  );
};

export default App;
