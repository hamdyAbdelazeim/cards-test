import React from "react";
import "./cards.css";
import data from "../../data.js";
function Cards() {
  return (
    <div className="cards">
      {data.map((card) => {
        console.log(card.background);
        return (
          <div key={card.id} className="card">
            <div
              className="card-top"
              style={{ backgroundColor: card.background }}
            ></div>
            <div className="card-bottom">
              <div className="card-bottom-top">
                <p>{card.category}</p>
                <p>...</p>
              </div>
              <div className="card-bottom-footer">
                <h2>{card.price}$</h2>
                <div className="footer">
                  <p className="title">{card.title}</p>
                  <p className="rating">
                    <p>inStore</p>
                    <p>{card.rating.count}</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
