import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Featues from "./components/Featues";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Faq from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="features">
          <Featues />
        </div>
        <div id="product">
          <Product />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div id="faq">
          <Faq />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
