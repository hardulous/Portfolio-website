import React from "react";
import S from "./Header.module.css";
import cv from "../../assets/cv.pdf";
import { AiFillFacebook } from "react-icons/ai";
import { FaGooglePlusSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import Typical from "react-typical";
const Header = () => {

  return (

    <div className={`${S.headerContainer}`}>
      <div className={`${S.headerParent}`}>
        <div className={`${S.headerDetails}`}>
          <div className={`${S.colz}`}>

            <div className={`${S.colzIcons}`}>
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

          </div>

          <div className={`${S.headerDetailsName}`}>
            <span className={`${S.primaryText}`}>
              {" "}
              Hello, I'M{" "}
              <span className={`${S.highlightText}`}>Aman Bisht</span>
            </span>
          </div>

          <div className={`${S.headerDetailsRole}`}>
            <span className={`${S.primaryText}`}>
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev",
                    2000,
                    "Mern Stack Dev",
                    2000,
                    "React Dev",
                    2000,
                    "Nodejs Dev",
                    2000,
                  ]}
                />
              </h1>
              <span className={`${S.headerRoleTagline}`}>
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>

          <div className={`${S.headerOptions}`}>
            <a href={cv} download className={`btn`}>Download CV</a>
            <a href="#contact" className={`btn btn-primary`}>Let's Talk</a>
          </div>
        </div>

        <div className={`${S.headerImg}`}>
          <div className={`${S.headerImgBg}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
