import React, { useState, useEffect } from "react";
import axios from "axios";

const initialStrain = {
  strain: "",
  flavor: "",
  rating: "",
  effect: [],
};

const UpdateForm = (props) => {
  const [strain, setStrain] = useState(initialStrain);

  useEffect(() => {
    const id = props.match.params.id;
    axios
      .get(`http://localhost:5000/api/strains/${id}`)
      .then((res) => setStrain(res.data))
      .catch((err) => console.log(err.response));
  }, [props]);

  const changeHandler = (ev, i) => {
    ev.persist();
    let value = ev.target.value;
    console.log(strain);

    setStrain({
      ...strain,
      [ev.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/strains/${strain.id}`, strain)
      .then((res) => {
        console.log(res);
        props.history.push(`/strains/${strain.id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Update Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="strain"
          onChange={changeHandler}
          placeholder="strain"
          value={strain.strain}
        />
        <div className="baseline" />

        <input
          type="text"
          name="flavor"
          onChange={changeHandler}
          placeholder="flavor"
          value={strain.flavor}
        />
        <div className="baseline" />

        <input
          type="text"
          name="rating"
          onChange={changeHandler}
          placeholder="rating"
          value={strain.rating}
        />
        <div className="baseline" />

        <input
          type="text"
          name="effect"
          onChange={changeHandler}
          placeholder="effect"
          value={strain.effect}
        />
        <div className="baseline" />

        <button className="md-button form-button">Update</button>
      </form>
    </div>
  );
};

export default UpdateForm;
