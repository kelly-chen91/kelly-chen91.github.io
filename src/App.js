// import logo from './logo.svg';
import "./css/App.css";
import Home from "./components/Home.jsx";
import { NavBar } from "./components/Home.jsx";
import Courseworks from "./components/Courseworks.jsx";
import Experiences from "./components/Experiences.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./components/Error.jsx";
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <div className="bg-plant-dark">
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="/courseworks" element={<Courseworks />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
