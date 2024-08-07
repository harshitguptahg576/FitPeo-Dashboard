import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import "./assets/css/styles.css";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
