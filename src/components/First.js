import "./First.scss";
import Scroll from "../assets/icon-scroll.svg";
export default function First() {
  return (
    <div>
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
    </div>
  );
}
