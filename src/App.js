import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import FetchData from "./component/FetchData";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const App = () => {
  const [search, setSearch] = useState("");

  const handleSearchValue = (value) => {
    setSearch(value);
  };

  return (
    <div>
      <Router>
        {/* Navbar component goes here */}
        <Navbar onSearch={handleSearchValue} />
        
        <Routes>
          <Route exact path="/" element={<Home search={search} />} />
          <Route
            path="/general"
            element={<FetchData cat="general" search={search}/>}
          />
          <Route
            path="/business"
            element={<FetchData cat="business" />}
          />
          <Route
            path="/entertainment"
            element={<FetchData cat="entertainment" />}
          />
          <Route
            path="/technology"
            element={<FetchData cat="technology" />}
          />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
