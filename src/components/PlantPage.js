import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const API_URL = "http://localhost:6001/plants";

function PlantPage() {
  
  const [plants, setPlants] = useState([]);
  // STATE 2: Stores the current text from the search input
  const [searchTerm, setSearchTerm] = useState("");

  // EFFECT: Fetch initial plant data when the component mounts
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        // Initialize the 'sold' status for client-side state management
        setPlants(data.map(plant => ({ ...plant, sold: false })));
      })
      .catch((error) => console.error("Error fetching plants:", error));
  }, []); // <--- Clean closing bracket: }, []);

  // HANDLER: Adds a new plant to the state after a successful POST request
  const handleAddPlant = (newPlant) => {
    // Ensure the new plant also has the 'sold' status initialized
    const plantWithStatus = { ...newPlant, sold: false };
    setPlants((currentPlants) => [...currentPlants, plantWithStatus]);
  };

  // HANDLER: Updates the search term state
  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  // HANDLER: Toggles the 'sold' status for a plant by its ID
  const handleUpdateSoldOut = (id) => {
    setPlants((currentPlants) =>
      currentPlants.map((plant) =>
        plant.id === id ? { ...plant, sold: !plant.sold } : plant
      )
    );
  };

  // FILTERING LOGIC: Filters plants based on the search term
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearchChange={handleSearchChange} />
      <PlantList plants={filteredPlants} onUpdateSoldOut={handleUpdateSoldOut} />
    </main>
  );
}

export default PlantPage;