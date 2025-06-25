// components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const cart = useSelector((state) => state.cart.items);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: 10 }}>
      <Link to="/" style={{ fontWeight: "bold" }}>
        Paradise Nursery 🌿
      </Link>
      <div>
        <span>Plants for Every Home</span>
        <Link to="/cart"> 🛒 {totalItems}</Link>
      </div>
    </header>
  );
}
