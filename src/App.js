// import logo from "./logo.svg";
import "./App.css";
import About from "./component/About/About";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import NewRelease from "./component/NewRelease/NewRelease";
import PreviousEdition from "./component/PreviousEdition/PreviousEdition";

import Slider1 from "./assets/images/sliderImg2.1.png";

function App() {
  return (
    <>
    <head>
      <title>Upwealth magazine</title>
    </head>
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      {/* <NewRelease />
      <PreviousEdition /> */}
    </div>
    </>
  );
}

export default App;
