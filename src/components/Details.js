import React from "react";
import Form from "./Form";

const Details = ({ getWeather }) => {
  return (
    <div className="Details">
      <Form getWeather={getWeather} />
      Weather Details, search form will also go here
    </div>
  );
};

export default Details;
