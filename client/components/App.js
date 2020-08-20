import React from "react";
import "../css/App.css";
import Header from "../libs/header/header";
import Footer from "../libs/footer/footer";
import RouterOutlet from "../libs/router-outlet";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  document.addEventListener("resize", () => {});

  return (
    <div>
      <Router>
        <Header title="Learn Socket.io"></Header>
        <RouterOutlet />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
