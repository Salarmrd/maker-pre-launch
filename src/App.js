import "./App.scss";
import Logo from "./assets/logo.svg";
import Scroll from "./assets/icon-scroll.svg";
import Egg from "./assets/illustration-passions.svg";
import Financial from "./assets/illustration-financial-freedom.svg";
import Lifestyle from "./assets/illustration-lifestyle.svg";
import anywhere from "./assets/illustration-work-anywhere.svg";

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
    </div>
  );
}

export default App;
