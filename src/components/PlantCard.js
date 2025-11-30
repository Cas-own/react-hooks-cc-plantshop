import React from "react";

function PlantCard({ plant, onUpdateSoldOut }) {
  const { id, name, image, price, sold } = plant;

  const handleSoldOutClick = () => {
    onUpdateSoldOut(id);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {/* Button changes text and color based on the 'sold' state */}
      {sold ? (
        <button className="primary" onClick={handleSoldOutClick}>
          Out of Stock
        </button>
      ) : (
        <button onClick={handleSoldOutClick}>
          In Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;