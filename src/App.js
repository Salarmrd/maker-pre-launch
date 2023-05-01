import "./App.scss";
import Logo from "./assets/logo.svg";
import Scroll from "./assets/icon-scroll.svg";
import Egg from "./assets/illustration-passions.svg";
import Financial from "./assets/illustration-financial-freedom.svg";
import Lifestyle from "./assets/illustration-lifestyle.svg";
import anywhere from "./assets/illustration-work-anywhere.svg";
import check from "./assets/icon-check.svg";
import checkfree from "./assets/checkfreeicon.svg";
import Freeicon from "./assets/icon-free.svg";
import diveicon from "./assets/icon-paid.svg";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <img src={Logo} alt="logo" />
      </nav>
      <div className="first">
        <div className="content">
          <h1>
            Get paid for the work you
            <span style={{ color: "#3ee9e5", marginLeft: "7px" }}>love</span> to
            do.
          </h1>
          <p>
            The 9-5 grind is so last century. We believe in living life on your
            own terms. Whether you’re looking to escape the rat race or set up a
            side hustle, we’ve got you covered.
          </p>
          <img src={Scroll} alt="" />
        </div>
      </div>
      <div className="second">
        <div className="column">
          <div className="icons">
            <img src={Egg} alt="icons" />
          </div>

          <h3>Indulge your passions</h3>
          <p>
            Your passions shouldn't be just for the weekend. Earn a living doing
            what you love.
          </p>
        </div>
        <div className="column up">
          <div className="icons">
            <img src={Financial} alt="icons" />
          </div>

          <h3>Gain financial freedom</h3>
          <p>
            Start making money work for you. There’s nothing quite like earning
            while you sleep.
          </p>
        </div>
        <div className="column">
          <div className="icons">
            <img src={Lifestyle} alt="icons" />
          </div>
          <div>
            <h3>Choose your lifestyle</h3>
            <p>
              Own your daily schedule. Fancy a lie-in? Go for it! Take charge of
              your week.
            </p>
          </div>
        </div>
        <div className="column up">
          <div className="icons">
            <img src={anywhere} alt="icons" />
          </div>
          <h3>Work from anywhere</h3>
          <p>
            Selling online means not being pinned down. Want to work AND travel?
            Go for it!
          </p>
        </div>
      </div>
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

export default App;
