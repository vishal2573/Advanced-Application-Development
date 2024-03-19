// Cart.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import Navbar1 from "../components/NavBar1";
import "../assets/css/Cart.css";
import "../App.css";
import c1 from "../assets/images/c1.jpg";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router";

const Cart = () => {
  const navigate = useNavigate(); // Initialize the navigate function from useNavigate hook
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "Item 1", quantity: 2, price: 10 },
    { id: 2, title: "Item 2", quantity: 1, price: 15 },
    { id: 3, title: "Item 3", quantity: 3, price: 20 },
  ]);

  // Calculate total bill
  const totalBill = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Function to handle increasing quantity
  const increaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  // Function to handle decreasing quantity
  const decreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };
  // Function to handle navigation to checkout
  const handleCheckout = () => {
    navigate("/checkout"); // Navigate to "/checkout" when the "Proceed to Checkout" button is clicked
  };
  return (
    <div>
      <Header />
      <Navbar1 />
      <div className="cart-container">
        <div className="cart-content">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="cart-item">
                  <td className="item-image">
                    <img src={c1} alt="Item" />
                  </td>
                  <td className="item-title">{item.title}</td>
                  <td className="item-quantity">
                    <button
                      style={{ marginRight: "10px" }}
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      <FaMinus />
                    </button>
                    {item.quantity}
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => increaseQuantity(item.id)}
                    >
                      <FaPlus />
                    </button>
                  </td>
                  <td className="item-price">${item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total-bill">
            <h3 style={{ fontSize: "3em" }}>Total Bill: ${totalBill}</h3>
            <button
              className="btn btn-outline btn-warning hover:bg-customBlue"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
