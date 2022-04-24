import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BillDetails from "./components/billDetails/billDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<BillDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
