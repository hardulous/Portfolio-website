import React from "react";
import S from "./Portfolio.module.css";
import p1 from "../../assets/portfolio1.jpg";
import p2 from "../../assets/portfolio2.jpg";
import p3 from "../../assets/portfolio3.jpg";
import p4 from "../../assets/portfolio4.jpg";
import { PORTFOLIO_DATA } from "../DATA/PortfolioData.js";

const Portfolio = () => {

  return (

    <section id="portfolio">

      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className={`container ${S.portfolioContainer}`}>

        {PORTFOLIO_DATA.map(({ id, image, title, github, demo, link }) => {

          return (

            <article className={`${S.portfolioItem}`} key={id}>
              <div className={`${S.portfolioItemImg}`}>
                <img src={image} alt="portfolio.jpg" />
              </div>
              <h3>{title}</h3>
              <div className={`${S.portfolioItemCTA}`}>
                <a href={github} className="btn" target="_blank" style={
                  link?{}:{
                    pointerEvents:"none"
                  }
                }>
                  {link?"GitHub":"Private Repo"}
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>

          );

        })}

      </div>
    </section>
  );
};

export default Portfolio;
