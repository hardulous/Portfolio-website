import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import S from "./Experience.module.css";

const Experience = () => {
  return (

    <section id="experience">

      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className={`container ${S.expContainer}`}>

        <div className={`${S.expFrontend}`}>
          <h3>Frontend Development</h3>
          <div className={`${S.expContent}`}>
            <article className={`${S.expDetails}`}>
              <BsPatchCheckFill className={`${S.expDetailIcon}`}/>
              <div>
                <h4>Html</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={`${S.expDetails}`}>
              <BsPatchCheckFill className={`${S.expDetailIcon}`}/>
              <div>
                <h4>Css</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={`${S.expDetails}`}>
              <BsPatchCheckFill className={`${S.expDetailIcon}`}/>
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={`${S.expDetails}`}>
              <BsPatchCheckFill className={`${S.expDetailIcon}`}/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={`${S.expDetails}`}>
              <BsPatchCheckFill className={`${S.expDetailIcon}`}/>
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className={`${S.expBackend}`}>
          <h3>Backend Development</h3>
          <div className={`${S.expContent}`}>
            <article className={`${S.expDetails}`}>
              <BsPatchCheckFill className={`${S.expDetailIcon}`}/>
              <div>
                <h4>Nodejs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={`${S.expDetails}`}>
              <BsPatchCheckFill className={`${S.expDetailIcon}`}/>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className={`${S.expDetails}`}>
              <BsPatchCheckFill className={`${S.expDetailIcon}`}/>
              <div>
                <h4>Express</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={`${S.expDetails}`}>
              <BsPatchCheckFill className={`${S.expDetailIcon}`}/>
              <div>
                <h4>MySql</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className={`${S.expDetails}`}>
              <BsPatchCheckFill className={`${S.expDetailIcon}`}/>
              <div>
                <h4>Mongoose</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Experience;
