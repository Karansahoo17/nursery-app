import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div
      className="page"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1498654896293-37aacf113fd9')",
        backgroundSize: "cover",
        height: "100vh",
        color: "white",
        textShadow: "1px 1px 3px black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Paradise Nursery</h1>
      <p style={{ maxWidth: 500, textAlign: "center", fontSize: "1.2rem" }}>
        Welcome to Paradise Nursery – your home for air-purifying, aromatic, and
        medicinal plants. Brighten your space, purify your air, and uplift your
        mood with our curated collection of houseplants.
      </p>
      <button onClick={() => navigate("/products")}>Get Started</button>
    </div>
  );
}

