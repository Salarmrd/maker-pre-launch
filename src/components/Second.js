import React from "react";
import Egg from "../assets/illustration-passions.svg";
import Financial from "../assets/illustration-financial-freedom.svg";
import Lifestyle from "../assets/illustration-lifestyle.svg";
import anywhere from "../assets/illustration-work-anywhere.svg";
import "./Second.scss";
export default function Second() {
  return (
    <div>
      <div className="second">
        <div className="column right">
          <div className="icons">
            <img src={Egg} alt="icons" className="iconsize" />
          </div>
          <div className="divinfo">
            <h3>Indulge your passions</h3>
            <p>
              Your passions shouldn't be just for the weekend. Earn a living
              doing what you love.
            </p>
          </div>
        </div>
        <div className="column up">
          <div className="icons">
            <img src={Financial} alt="icons" className="iconsize" />
          </div>
          <div className="divinfo">
            <h3>Gain financial freedom</h3>
            <p>
              Start making money work for you. There’s nothing quite like
              earning while you sleep.
            </p>
          </div>
        </div>
        <div className="column right">
          <div className="icons">
            <img src={Lifestyle} alt="icons" className="iconsize" />
          </div>
          <div className="divinfo">
            <div>
              <h3>Choose your lifestyle</h3>
              <p>
                Own your daily schedule. Fancy a lie-in? Go for it! Take charge
                of your week.
              </p>
            </div>
          </div>
        </div>
        <div className="column up">
          <div className="icons">
            <img src={anywhere} alt="icons" className="iconsize work" />
          </div>
          <div className="divinfo">
            <h3>Work from anywhere</h3>
            <p>
              Selling online means not being pinned down. Want to work AND
              travel? Go for it!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
