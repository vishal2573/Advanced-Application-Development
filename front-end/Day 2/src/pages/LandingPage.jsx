import React, { useState, useEffect } from "react";
import "../assets/css/LandingPage.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

import gift from "../assets/images/gift.gif";
import bear from "../assets/images/yy3.gif";
import lord from "../assets/images/1FPS.gif";
import Footer from "../components/Footer";
import "../App.css";
import NavBar from "../components/NavBar";
import c1 from "../assets/images/c1.jpg";
import c2 from "../assets/images/c2.jpg";

import c3 from "../assets/images/c3.jpg";

import c4 from "../assets/images/c4.jpg";

import c5 from "../assets/images/c5.jpg";

import c6 from "../assets/images/c6.jpg";

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function from useNavigate hook

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = [bear, gift, lord];
  const handleExploreNowClick = () => {
    navigate("/login"); // Navigate to "/login" when "Explore Now" button is clicked
  };

  const handleGetStartedClick = () => {
    navigate("/login"); // Navigate to "/login" when "Get Started" button is clicked
  };
  useEffect(() => {
    function revealElementsOnScroll() {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        if (isElementPartiallyInViewport(element)) {
          element.classList.add("reveal");
        }
      });
    }

    function isElementPartiallyInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    }
    const handleScroll = () => {
      const textModules = document.querySelectorAll(".text-content");
      textModules.forEach((module, index) => {
        const moduleRect = module.getBoundingClientRect();
        if (
          moduleRect.top <= window.innerHeight / 2 &&
          moduleRect.bottom >= window.innerHeight / 2
        ) {
          setActiveImageIndex(index);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);

    window.addEventListener("scroll", revealElementsOnScroll);
    revealElementsOnScroll();

    return () => {
      window.removeEventListener("scroll", revealElementsOnScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <NavBar />
      <div className="central-message animate-on-scroll">
        <h1 className="main-message">
          Personalized<span className="bright-text"> Gifts</span>
          <br />
          <span>For Every Occasion.</span>
        </h1>
        <p className="sub-message">
          Add your <span className="bright-text1">Personal Touch</span> to
          create unforgettable memories.
        </p>
      </div>
      <div className="space-for-slow animate-on-scroll">
        <div className="container32 flex justify-center">
          <div className="card w-96 bg-yellow-300 shadow-xl m-4">
            <div className="card-body">
              <h2 className="card-title">Explore Unique Gifts</h2>
              <p>
                Discover a world of personalized treasures tailored just for
                you.
              </p>
              <div className="card-actions justify-end">
                <button
                  className="btn bg-customBlue border-customBlue hover:border-blue-400 hover:bg-blue-400 btn-primary"
                  onClick={handleExploreNowClick}
                >
                  Explore Now
                </button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-customPink shadow-xl m-4">
            <div className="card-body">
              <h2 className="card-title">Create Stunning Products</h2>
              <p>
                Unleash your creativity and design one-of-a-kind gifts for every
                occasion.
              </p>
              <div className="card-actions justify-end">
                <button
                  className="btn bg-customBlue border-customBlue hover:border-blue-400 hover:bg-blue-400 btn-primary"
                  onClick={handleGetStartedClick}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-page">
        <div className="left-column">
          <div className="text-content animate-on-scroll">
            <h1 className="heading">
              Crafting
              <span className="bright-text1"> Timeless Designs</span>
            </h1>
            <p className="subtext">
              Step into a world where design meets emotion. Our team of artisans
              is dedicated to crafting experiences that transcend time. From
              <span className="bright-text"> elegant aesthetics</span> to
              intuitive user interfaces, we ensure every design resonates with
              your audience, leaving an
              <span className="bright-text2"> indelible mark </span>on their
              hearts and minds.
            </p>
          </div>
          <div className="text-content animate-on-scroll">
            <h1 className="heading">
              <span className="bright-text">Seamless</span> Interactions
            </h1>
            <p className="subtext">
              {" "}
              Navigate effortlessly through a seamless digital realm. Our
              interfaces are{" "}
              <span className="bright-text2">meticulously crafted</span> to
              delight users at every touchpoint. Whether it's browsing through
              our curated collections,
              <span className="bright-text1">
                customizing your perfect gift
              </span>
              , or completing your purchase, our intuitive interactions ensure
              an effortless journey from start to finish.
            </p>
          </div>
          <div className="text-content animate-on-scroll">
            <h1 className="heading">
              Empowering <span className="bright-text2">Creativity</span>
            </h1>
            <p className="subtext">
              Unleash your imagination and let creativity flourish. With our
              platform, admins can easily add new products, update existing
              ones, and{" "}
              <span className="bright-text">
                shape the narrative of our brand.
              </span>{" "}
              Meanwhile, users have the freedom to personalize and purchase
              their perfect gifts,{" "}
              <span className="bright-text1">
                infusing them with their unique touch.
              </span>{" "}
              Join us in shaping memorable experiences and celebrating the
              beauty of individual expression.
            </p>
          </div>
        </div>
        <div className="circle-frame">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Module Illustration"
              className={`module-image ${
                activeImageIndex === index ? "active" : ""
              }`}
            />
          ))}
        </div>
      </div>
      <h1 className="heading animate-on-scroll">
        Cherish <span className="bright-text">Every Moment</span> with Your
        <span className="bright-text1"> Loved Ones</span>
      </h1>
      <p className="subtext animate-on-scroll">
        Experience the joy of giving and sharing special moments with our
        personalized gifts
      </p>
      <div className="carousel carousel-end rounded-box">
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            alt="Gift"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            alt="Gift"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            alt="Gift"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            alt="Gift"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            alt="Gift"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
            alt="Gift"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            alt="Gift"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            alt="Gift"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            alt="Gift"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            alt="Gift"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            alt="Gift"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            alt="Gift"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
            alt="Gift"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            alt="Gift"
          />
        </div>
      </div>
      <div className="statpoint">
        <h1 className="heading animate-on-scroll">Our Progress:</h1>
        <div className="statistics-container">
          <div className="stat-box animate-on-scroll">
            <h1>78+</h1>
            <p>Total Countries</p>
          </div>
          <div className="stat-box animate-on-scroll">
            <h1>10M+</h1>
            <p>Gifts Sold</p>
          </div>
          <div className="stat-box animate-on-scroll">
            <h1>5M+</h1>
            <p>Users Obtained</p>
          </div>
          <div className="stat-box animate-on-scroll">
            <h1>200K+</h1>
            <p>Creators Enrolled</p>
          </div>
          <div className="stat-box animate-on-scroll">
            <h1>25M+</h1>
            <p>Followers</p>
          </div>
          <div className="stat-box animate-on-scroll">
            <h1>100M+</h1>
            <p>Impressions</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
