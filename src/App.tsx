import React from "react";
import "./App.css";
import "./_global.scss";
import AppRoutes from "routes";

import { HashRouter } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import HelpInterface from "components/HelpInterface";
import { Close } from "assets/icons";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <AppRoutes />
        <HelpInterface />
        <ToastContainer
          newestOnTop
          hideProgressBar
          autoClose={4000}
          transition={Slide}
          position="top-center"
          closeButton={
            <img
              src={Close}
              alt="close"
              className="Toastify__close-button-customized"
            />
          }
        />
      </HashRouter>
    </div>
  );
}

export default App;
