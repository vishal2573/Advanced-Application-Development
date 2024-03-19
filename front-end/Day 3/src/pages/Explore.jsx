// Explore.jsx
import React from "react";
import Header from "../components/Header";
import Navbar1 from "../components/NavBar1";
import "../assets/css/Explore.css";
import { FaShoppingCart } from "react-icons/fa";
import c1 from "../assets/images/c1.jpg";
import c2 from "../assets/images/c2.jpg";
import c3 from "../assets/images/c3.jpg";
import c4 from "../assets/images/c4.jpg";
import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p4.jpg";

import j1 from "../assets/images/j1.jpg";
import j2 from "../assets/images/j2.jpg";
import j3 from "../assets/images/j3.jpg";
import j4 from "../assets/images/j4.jpg";
import h1 from "../assets/images/h1.jpg";
import h2 from "../assets/images/h2.jpg";
import h3 from "../assets/images/h3.jpg";
import h4 from "../assets/images/h4.jpg";

const Explore = () => {
  const cakes = [
    {
      imageUrl: c1,
      title: "Vanilla Cake",
      price: "$20",
    },
    {
      imageUrl: c2,
      title: "Chocolate Cake",
      price: "$20",
    },
    {
      imageUrl: c3,
      title: "Strawberry Cake",
      price: "$20",
    },
    {
      imageUrl: c4,
      title: "Butterscotch Cake",
      price: "$20",
    },
  ];

  const jewelry = [
    {
      imageUrl: j2,
      title: "Earrings",
      price: "$20",
    },
    {
      imageUrl: j4,
      title: "Bracelet",
      price: "$20",
    },
    {
      imageUrl: j1,
      title: "Necklace",
      price: "$20",
    },
    {
      imageUrl: j3,
      title: "Ring",
      price: "$20",
    },
  ];

  const perfumes = [
    {
      imageUrl: p1,
      title: "Floral Perfume",
      price: "$20",
    },
    {
      imageUrl: p2,
      title: "Citrus Perfume",
      price: "$20",
    },
    {
      imageUrl: p3,
      title: "Woody Perfume",
      price: "$20",
    },
    {
      imageUrl: p4,
      title: "Spicy Perfume",
      price: "$20",
    },
  ];

  const chocolates = [
    {
      imageUrl: h1,
      title: "Dark Chocolate",
      price: "$20",
    },
    {
      imageUrl: h3,
      title: "Milk Chocolate",
      price: "$20",
    },
    {
      imageUrl: h2,
      title: "White Chocolate",
      price: "$20",
    },
    {
      imageUrl: h4,
      title: "Chocolate Truffles",
      price: "$20",
    },
  ];

  return (
    <div>
      <Header />
      <Navbar1 />
      <div className="container-explore mx-auto">
        <div className="category-explore">
          <h2 className="category-explore-label">Cakes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cakes.map((cake, index) => (
              <div key={index} className="card w-96 bg-gray-500 shadow-xl">
                <figure>
                  <img
                    className="card-image"
                    src={cake.imageUrl}
                    alt={cake.title}
                  />
                </figure>
                <div className="card-body" style={{ color: "white" }}>
                  <h2 className="card-title" style={{ color: "white" }}>
                    {cake.title}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>

                  <p className="font-semibold" style={{ color: "white" }}>
                    {cake.price}
                  </p>

                  <div className="card-actions justify-end">
                    <div
                      className="badge badge-outline"
                      style={{ color: "white" }}
                    >
                      Pastries
                    </div>
                    <button className="btn btn-sm btn-primary">
                      <FaShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="category-explore">
          <h2 className="category-explore-label">Jewelry</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {jewelry.map((item, index) => (
              <div key={index} className="card w-96 bg-gray-500 shadow-xl">
                <figure>
                  <img src={item.imageUrl} alt={item.title} />
                </figure>
                <div className="card-body" style={{ color: "white" }}>
                  <h2 className="card-title" style={{ color: "white" }}>
                    {item.title}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>

                  <p className="font-semibold" style={{ color: "white" }}>
                    {item.price}
                  </p>

                  <div className="card-actions justify-end">
                    <div
                      className="badge badge-outline"
                      style={{ color: "white" }}
                    >
                      Jewelry
                    </div>
                    <button className="btn btn-sm btn-primary">
                      <FaShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="category-explore">
          <h2 className="category-explore-label">Perfumes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {perfumes.map((item, index) => (
              <div key={index} className="card w-96 bg-gray-500 shadow-xl">
                <figure>
                  <img
                    className="card-image"
                    src={item.imageUrl}
                    alt={item.title}
                  />
                </figure>
                <div className="card-body" style={{ color: "white" }}>
                  <h2 className="card-title" style={{ color: "white" }}>
                    {item.title}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>

                  <p className="font-semibold" style={{ color: "white" }}>
                    {item.price}
                  </p>

                  <div className="card-actions justify-end">
                    <div
                      className="badge badge-outline"
                      style={{ color: "white" }}
                    >
                      Cosmetics
                    </div>
                    <button className="btn btn-sm btn-primary">
                      <FaShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="category-explore">
          <h2 className="category-explore-label">Chocolates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {chocolates.map((item, index) => (
              <div key={index} className="card w-96 bg-gray-500 shadow-xl">
                <figure>
                  <img src={item.imageUrl} alt={item.title} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title" style={{ color: "white" }}>
                    {item.title}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>

                  <p className="font-semibold" style={{ color: "white" }}>
                    {item.price}
                  </p>

                  <div className="card-actions justify-end">
                    <div
                      className="badge badge-outline"
                      style={{ color: "white" }}
                    >
                      Delicacies
                    </div>
                    <button className="btn btn-sm btn-primary">
                      <FaShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
