import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "uikit/dist/css/uikit.css";
import "uikit/dist/js/uikit.js";
import "./Assets/css/style1.css";
import "./Assets/css/style.css";
import "./Assets/css/libraries.css";
import 'animate.css';
import 'aos/dist/aos.css'; // Import AOS styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
