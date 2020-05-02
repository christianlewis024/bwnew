import React, { useState } from "react";
import { axiosWithAuth } from "./axiosWithAuth";

const NewStrainForm = ({ getStrains }) => {
  const [strain, setStrain] = useState({
    strain: "",
    flavor: "",
    rating: "",
    effect: [],
  });

  const handleChanges = (e) => {
    setStrain({
      ...strain,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/strains", strain)
      .catch((err) => console.log(err));
    setStrain({ strain: "", flavor: "", rating: "", effect: [] });
    setTimeout(() => getStrains(), 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="strain"
        type="text"
        placeholder="strain. . ."
        name="strain"
        value={strain.name}
        onChange={handleChanges}
      />
      <input
        id="flavor"
        type="text"
        placeholder="flavor. . ."
        name="flavor"
        value={strain.flavor}
        onChange={handleChanges}
      />
      <input
        id="rating"
        type="text"
        placeholder="rating. . ."
        name="rating"
        value={strain.rating}
        onChange={handleChanges}
      />
      <input
        id="effect"
        type="text"
        placeholder="effect. . ."
        name="effect"
        value={strain.effect}
        onChange={handleChanges}
      />
      <input type="submit" value="Submit New Strain" />
    </form>
  );
};

export default NewStrainForm;
