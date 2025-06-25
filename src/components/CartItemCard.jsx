// components/CartItemCard.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../redux/cartslice.js";

export default function CartItemCard({ item }) {
  const dispatch = useDispatch();

  return (
    <div style={{ border: "1px solid #ddd", padding: 10, margin: 10 }}>
      <img src={item.image} alt={item.name} width={100} />
      <h4>{item.name}</h4>
      <p>Price: ${item.price}</p>
      <p>
        Quantity:
        <button onClick={() => dispatch(updateQuantity({ id: item.id, delta: -1 }))}>-</button>
        {item.quantity}
        <button onClick={() => dispatch(updateQuantity({ id: item.id, delta: 1 }))}>+</button>
      </p>
      <p>Subtotal: ${item.quantity * item.price}</p>
      <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
    </div>
  );
}
