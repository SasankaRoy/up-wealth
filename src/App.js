// import logo from "./logo.svg";
import "./App.scss";
import About from "./component/About/About";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import NewRelease from "./component/NewRelease/NewRelease";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <NewRelease />
    </div>
  );
}

export default App;
