// components/PlantCard.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartslice.js";

export default function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const isAdded = useSelector((state) =>
    state.cart.items.some((item) => item.id === plant.id)
  );

  return (
    <div style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
      <img src={plant.image} alt={plant.name} width={100} />
      <h4>{plant.name}</h4>
      <p>{plant.description}</p>
      <p>${plant.price}</p>
      <button onClick={() => dispatch(addToCart(plant))} disabled={isAdded}>
        {isAdded ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}