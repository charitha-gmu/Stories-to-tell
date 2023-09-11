import React from "react";
import GoogleMapReact from "google-map-react";

// Define a new marker component that uses an image
const AnyReactComponent = ({ text, imgSrc }) => (
  <div>
    <img src={imgSrc} alt={text} width="30" height="30" />
    {/* {text} */}
  </div>
);

const GoogleMap = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyBcSAHTcKFu8q0_pG_8cuXFt5aERxqsBVw" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      {/* Pass the image source as a prop */}
      <AnyReactComponent
        lat={10.99835602}
        lng={77.01502627}
        text="My Marker"
        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLzCP4_WMzxxzNY5Tq6Vz_rhPVhrJJwA8qEw&usqp=CAU"
      />
    </GoogleMapReact>
  );
};

export default GoogleMap;
