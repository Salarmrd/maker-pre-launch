import "./App.scss";
import Logo from "./assets/logo.svg";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <img src={Logo} alt="logo" />
      </nav>
      <First />
      <Second />
      <Third />
      <Footer />
    </div>
  );
}

export default App;
