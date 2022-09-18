import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaGooglePlusSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import S from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className={`${S.footerLogo}`}>
        AMAN BISHT
      </a>

      <ul className={`${S.permalinks}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>

      <div className={`${S.footerSocials}`}>
        <a href="https://www.facebook.com/amanbisht_089" target="_blank">
          <AiFillFacebook />
        </a>
        <a href="mailto:amanbisht123abc@gmail.com" target="_blank">
          <FaGooglePlusSquare />
        </a>
        <a href="https://www.instagram.com/super211233/" target="_blank">
          <GrInstagram />
        </a>
        <a href="https://www.linkedin.com/in/aman-bisht-24b084221/" target="_blank">
          <BsLinkedin />
        </a>
      </div>

      <div className={`${S.footerCR}`}>
        <small>&copy; AMAN BISHT. All rights reserved.</small>
      </div>

    </footer>
  );
};

export default Footer;
