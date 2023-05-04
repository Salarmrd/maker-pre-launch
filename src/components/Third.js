import React from "react";
import check from "../assets/icon-check.svg";
import checkfree from "../assets/checkfreeicon.svg";
import Freeicon from "../assets/icon-free.svg";
import diveicon from "../assets/icon-paid.svg";
import './Third.scss';
export default function Third() {
  return (
    <div>
      <div className="third">
        <div className="pricing">
          <h2>Our pricing plans</h2>
          <p>
            We only make money when our creators make money. Our plans are
            always affordable, and it’s completely free to get started.
          </p>
        </div>
        <div className="plans">
          <div className="free">
            <img src={Freeicon} alt="freeicon" className="img-icon" />
            <h4>Did you toe</h4>
            <p>
              Just getting started? No problem at all! Our free plan will take
              you a long way.
            </p>
            <p className="price">Free</p>
            <ul style={{ listStyleImage: `url(${checkfree})` }}>
              <li>
                <span>Unlimited products</span>
              </li>
              <li>
                <span>Basic analytics</span>
              </li>
              <li>
                <span>Limited marketplace exposure</span>
              </li>
              <li>
                <span>10% fee per transaction</span>
              </li>
            </ul>
          </div>
          <div className="monthly">
            <img src={diveicon} alt="freeicon" className="img-icon" />
            <h4>Dive right in</h4>
            <p>
              Ready for the big time? Our paid plan will help you take your
              business to the next level.
            </p>
            <p className="price">
              $25.00{" "}
              <span
                style={{ fontSize: "15px", opacity: "0.5", fontWeight: "500" }}
              >
                / month
              </span>
            </p>
            <ul style={{ listStyleImage: `url(${check})` }}>
              <li>
                <span>Custom domain</span>
              </li>
              <li>
                <span>Advanced analytics and reports</span>
              </li>
              <li>
                <span>High marketplace visibility</span>
              </li>
              <li>
                <span>5% fee per transaction</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
