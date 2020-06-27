import React, { useState } from "react";

const Form = ({ getWeather }) => {
  const [formData, setFormData] = useState("");

  const handleChange = ({ target }) => {
    setFormData(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(formData);
    setFormData("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={formData} onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
};

export default Form;
