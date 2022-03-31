import React from "react";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/HomePage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUsers: null
    };
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route exact path="signin" element={<SignIn />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    );
  }
}
export default App;
