import React from "react";
import PrivateRoutes from "./PrivateRoutes";
import Header from "components/Header"

function PrivateSection() {
  return (<div className="rootDiv">
  <Header/>
  <PrivateRoutes />
  </div>)
}

export default PrivateSection;
