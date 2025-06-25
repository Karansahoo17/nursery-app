import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import CartItemCard from "../components/CartItemCard";
import { Link } from "react-router-dom";

export default function CartPage() {
  const cart = useSelector((state) => state.cart.items);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div>
      <Header />
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <CartItemCard key={item.id} item={item} />
      ))}
      <hr />
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ${totalCost}</p>
      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}
