import "./App.css";
import Home from "./Components/pages/home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Creator from "./Components/pages/creator";
import Contact from "./Components/pages/contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact  path="/contact" element={<Contact />}></Route>
          <Route exact path="/creator" element={<Creator />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
