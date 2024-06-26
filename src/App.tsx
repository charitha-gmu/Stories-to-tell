import React from "react";
import "./App.css";
import "./_global.scss";
import AppRoutes from "routes";
import { BrowserRouter } from "react-router-dom";
import HelpInterface from "components/HelpInterface";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
        <AppRoutes />
        <HelpInterface />
      </BrowserRouter>
    </div>
  );
}

export default App;
