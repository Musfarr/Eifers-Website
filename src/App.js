import "./App.css";
import Home from "./Components/pages/home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Creator from "./Components/pages/creator";
import Contact from "./Components/pages/contact";
import PrivacyPolicy from "./Components/pages/Privacy";
import Faq from "./Components/pages/Faq";
import Terms from "./Components/pages/TermsandCondition";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact  path="/contact" element={<Contact />}></Route>
          <Route exact path="/creator" element={<Creator />}></Route>
          <Route exact path="/privacy" element={<PrivacyPolicy />}></Route>
          <Route exact path="/faq" element={<Faq />}></Route>
          <Route exact path="/terms-and-condition" element={<Terms />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
