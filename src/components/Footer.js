import React from "react";
import "./Footer.scss";
export default function Footer() {
  return (
    <div>
      <div className="footer">
        <h2>Get notified when we launch</h2>
        <form>
          <input
            id="email-input"
            type="email"
            placeholder="Enter your email address"
          />
          <button type="submit">Get notified</button>
        </form>
      </div>
    </div>
  );
}
