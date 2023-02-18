import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListPage from "./pages/ListPage/ListPage";
import Navbar from "./components/Navbar/Navbar";
import ListItem from "./pages/ListItem/ListItem";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/characters/:id" element={<ListItem />} />
      </Routes>
    </Router>
  );
};

export default App;
