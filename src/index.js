import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/home/Home";
import Header from "./components/home/Header";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
    <About />
    <Portfolio />
    <Contact />
    <footer>© {new Date().getFullYear()}, Built with love</footer>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
