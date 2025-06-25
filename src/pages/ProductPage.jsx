import React from "react";
import Header from "../components/Header";
import { plants } from "../data/plants";
import PlantCard from "../components/PlantCard";

export default function ProductPage() {
  const groups = ["Air Purifying", "Aromatic", "Medicinal"];

  return (
    <div>
      <Header />
      <h2 style={{ textAlign: "center" }}>Browse Our Plants</h2>
      {groups.map((group) => (
        <div key={group} style={{ margin: "2rem" }}>
          <h3>{group} Plants</h3>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {plants
              .filter((plant) => plant.group.includes(group))
              .map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
