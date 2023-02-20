import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListPage from "./pages/ListPage/ListPage";
import Navbar from "./components/Navbar/Navbar";
import ListItem from "./pages/ListItem/ListItem";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/characters/:id" element={<ListItem />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
