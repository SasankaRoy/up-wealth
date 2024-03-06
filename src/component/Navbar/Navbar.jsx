import React from "react";
import "./Navbar.scss";
import Logo from "../../assets/images/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
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
      className="Navbar__mainWrapper"
    >
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
    </motion.nav>
  );
};

export default Navbar;
