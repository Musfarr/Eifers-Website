import "./App.css";
import Home from "./Components/pages/home";
import "uikit/dist/css/uikit.css";
import "uikit/dist/js/uikit.js";
import "./Assets/css/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Creator from "./Components/pages/creator";
import Contact from "./Components/pages/contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/creator" element={<Creator />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
