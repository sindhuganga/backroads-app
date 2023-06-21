import React from "react";
import { Title } from "./Title";
import { tour } from "../data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tour.map((t) => {
          return (
            <article className="tour-card" key={t.id}>
              <div className="tour-img-container">
                <img src={t.image} className="tour-img" alt="" />
                <p className="tour-date">{t.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{t.title}</h4>
                </div>
                <p>{t.text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {t.location}
                  </p>
                  <p>{t.duration} days</p>
                  <p>from ${t.cost}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
