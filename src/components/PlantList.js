import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onUpdateSoldOut }) {
  const plantCards = plants.map((plant) => (
    <PlantCard
      key={plant.id}
      plant={plant}
      onUpdateSoldOut={onUpdateSoldOut}
    />
  ));

  return <ul className="cards">{plantCards}</ul>;
}

export default PlantList;