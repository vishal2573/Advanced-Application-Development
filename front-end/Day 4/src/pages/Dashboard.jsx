import React, { useEffect, useState } from "react";
import "../assets/css/Dashboard.css";
import "../App.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import ye from "../assets/images/customer.jpg";
import {
  FaGift,
  FaChartLine,
  FaPlus,
  FaEye,
  FaCog,
  FaSignOutAlt,
  FaHeart,
  FaCashRegister,
  FaMoneyBill,
} from "react-icons/fa";

const Dashboard = () => {
  const [showAddProductForm, setShowAddProductForm] = useState(false);

  const handleAddProductClick = () => {
    setShowAddProductForm(true);
  };

  const handleCloseForm = () => {
    setShowAddProductForm(false);
  };
  useEffect(() => {
    // add hovered class to selected list item
    let list = document.querySelectorAll(".navigation li");

    function activeLink() {
      list.forEach((item) => {
        item.classList.remove("hovered");
      });
      this.classList.add("hovered");
    }

    list.forEach((item) => item.addEventListener("mouseover", activeLink));

    let toggle = document.querySelector(".toggle");
    let navigation = document.querySelector(".navigation");
    let main = document.querySelector(".main");

    toggle.onclick = function () {
      navigation.classList.toggle("active");
      main.classList.toggle("active");
    };
  }, []);
  return (
    <div>
      <NavBar />
      <div className="container11">
        <div className="navigation">
          <ul>
            <li>
              <a href="#">
                <span class="icon23"></span>
                <span class="title">Dashboard</span>
              </a>
            </li>

            <li onClick={handleAddProductClick}>
              <a href="#">
                <span class="icon23"></span>
                <span class="title">Add Product</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span class="icon23"></span>
                <span class="title">View Products</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span class="icon23"></span>
                <span class="title">Settings</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span class="icon23"></span>
                <span class="title">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="main">
          <div className="topbar">
            <input type="checkbox" className="toggle toggle-warning" />
            <div className="search"></div>
            <div className="user">
              <img src={ye} alt="" />
            </div>
          </div>

          {/* Cards */}
          <div className="cardBox">
            <div class="card1">
              <div>
                <div class="numbers">78,924</div>
                <div class="cardName">Impressions</div>
              </div>

              <div class="iconBx">
                <FaEye />
              </div>
            </div>

            <div class="card1">
              <div>
                <div class="numbers">722</div>
                <div class="cardName">Sales</div>
              </div>

              <div class="iconBx">
                <FaCashRegister />
              </div>
            </div>

            <div class="card1">
              <div>
                <div class="numbers">244</div>
                <div class="cardName">Likes</div>
              </div>

              <div class="iconBx">
                <FaHeart />
              </div>
            </div>

            <div class="card1">
              <div>
                <div class="numbers">$27,951</div>
                <div class="cardName">Earning</div>
              </div>

              <div class="iconBx">
                <FaMoneyBill />
              </div>
            </div>
          </div>

          {/* Order Details List */}
          <div className="details">
            {/* Recent Orders */}
            <div class="recentOrders">
              <div class="cardHeader">
                <h2>Recent Orders</h2>
                <a href="#" class="btn">
                  View All
                </a>
              </div>

              <table>
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Payment</td>
                    <td>Status</td>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Chocolate Cake</td>
                    <td>$110</td>
                    <td>Paid</td>
                    <td>
                      <span class="status delivered">Delivered</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Earring</td>
                    <td>$120</td>
                    <td>Due</td>
                    <td>
                      <span class="status pending">Pending</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Chain</td>
                    <td>$20</td>
                    <td>Paid</td>
                    <td>
                      <span class="status return">Return</span>
                    </td>
                  </tr>

                  <tr>
                    <td> Shoes</td>
                    <td>$690</td>
                    <td>Due</td>
                    <td>
                      <span class="status inProgress">In Progress</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Chocolates</td>
                    <td>$30</td>
                    <td>Paid</td>
                    <td>
                      <span class="status delivered">Delivered</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Caramel</td>
                    <td>$20</td>
                    <td>Due</td>
                    <td>
                      <span class="status pending">Pending</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Watch</td>
                    <td>$180</td>
                    <td>Paid</td>
                    <td>
                      <span class="status return">Return</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Wedding Cake</td>
                    <td>$190</td>
                    <td>Due</td>
                    <td>
                      <span class="status inProgress">In Progress</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Recent Customers */}
            <div className="recentCustomers">
              <div class="cardHeader">
                <h2>Recent Customers</h2>
              </div>

              <table>
                <tr>
                  <td width="60px">
                    <div class="imgBx">
                      <img src={ye} alt="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      David <br /> <span>India</span>
                    </h4>
                  </td>
                </tr>

                <tr>
                  <td width="60px">
                    <div class="imgBx">
                      <img src={ye} alt="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      Trav <br /> <span>India</span>
                    </h4>
                  </td>
                </tr>

                <tr>
                  <td width="60px">
                    <div class="imgBx">
                      <img src={ye} alt="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      John <br /> <span>India</span>
                    </h4>
                  </td>
                </tr>

                <tr>
                  <td width="60px">
                    <div class="imgBx">
                      <img src={ye} alt="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      Shawn <br /> <span>Canada</span>
                    </h4>
                  </td>
                </tr>

                <tr>
                  <td width="60px">
                    <div class="imgBx">
                      <img src={ye} alt="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      Arthur <br /> <span>India</span>
                    </h4>
                  </td>
                </tr>

                <tr>
                  <td width="60px">
                    <div class="imgBx">
                      <img src={ye} alt="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      Kumar <br /> <span>India</span>
                    </h4>
                  </td>
                </tr>

                <tr>
                  <td width="60px">
                    <div class="imgBx">
                      <img src={ye} alt="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      Paul <br /> <span>USA</span>
                    </h4>
                  </td>
                </tr>

                <tr>
                  <td width="60px">
                    <div class="imgBx">
                      <img src={ye} alt="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      Vishal <br /> <span>India</span>
                    </h4>
                  </td>
                </tr>
              </table>
              {showAddProductForm && (
                <div className="popup">
                  <div className="popup-content">
                    <h3 className="modal-title">Add Product</h3>
                    <button className="btn btn-ghost" onClick={handleCloseForm}>
                      Close
                    </button>
                    {/* Form for adding a product */}
                    <form>
                      <div className="form-control">
                        <label htmlFor="title" className="label">
                          Title
                        </label>
                        <input
                          type="text"
                          id="title"
                          name="title"
                          className="input input-bordered "
                          placeholder="Enter title"
                          style={{ color: "white" }}
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label htmlFor="price" className="label">
                          Price
                        </label>
                        <input
                          type="number"
                          id="price"
                          name="price"
                          className="input input-bordered"
                          placeholder="Enter price"
                          style={{ color: "white" }}
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label htmlFor="image" className="label">
                          Image
                        </label>
                        <input
                          type="file"
                          id="image"
                          name="image"
                          className="input input-bordered"
                          style={{ color: "white" }}
                          required
                        />
                      </div>
                      <div className="form-actions">
                        <button type="submit" className="btn btn-primary">
                          Add
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
