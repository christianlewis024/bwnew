import React from "react";

const StrainCard = (props) => {
  const { strain, flavor, rating, effect } = props.strain;
  return (
    <div className="strain-card">
      <h2>{strain}</h2>
      <div className="strain-flavor">
        flavor: <em>{flavor}</em>
      </div>
      <div className="strain-rating">
        rating: <strong>{rating}</strong>
      </div>

      <div className="strain-effect">
        Effect: <em>{effect}</em>
      </div>
    </div>
  );
};

export default StrainCard;
