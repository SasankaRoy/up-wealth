// import logo from "./logo.svg";
import "./App.scss";
import About from "./component/About/About";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import NewRelease from "./component/NewRelease/NewRelease";
import PreviousEdition from "./component/PreviousEdition/PreviousEdition";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <NewRelease />
      <PreviousEdition />
    </div>
  );
}

export default App;
