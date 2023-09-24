import React from "react";
import "./App.css";
import "./_global.scss";
import AppRoutes from "routes";
import { HashRouter } from "react-router-dom";
import HelpInterface from "components/HelpInterface";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <AppRoutes />
        <HelpInterface />
      </HashRouter>
    </div>
  );
}

export default App;
