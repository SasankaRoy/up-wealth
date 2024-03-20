import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import Logo from "../../assets/images/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [screenPositionY, setScreenPosiionY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScreenPosiionY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [screenPositionY]);


  return (
    <motion.nav
      initial={{
        y: -80,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.9,
        ease: "backOut",
      }}
      className="Navbar__outerWrapper"
      style={{
        backgroundColor: screenPositionY >= 5 ? "#f0f0f3" : "transparent",
        boxShadow: screenPositionY >= 5 ? "1px 1px 10px rgba(0, 0, 0, 0.2)" : "none",
        transition:' .3s ease-in-out'
      }}
    >
      <div className="Navbar__mainWrapper">
        <div className="Navbar__LogoWrapper">
          <img src={Logo} alt="logo" aria-description="company-logo" />
        </div>
        <div className="Navbar__navLinksWrapper">
          <ul>
            {["Home", "Contact Us"].map((cur, id) => (
              <li key={id}>{cur}</li>
            ))}
          </ul>
        </div>
        <button className="Navbar__LoginBtn">Log In</button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
