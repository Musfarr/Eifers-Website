import './App.css';
import Home from './Components/pages/home';
import './Assets/css/uikit.css'
import './Assets/css/style.css'
import './Assets/js/uikit.js'
import { BrowserRouter , Route , Routes }  from 'react-router-dom';
import Creator from './Components/pages/creator';
import Home2 from './Components/pages/home2';
import Contact from './Components/pages/contact';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Routes>

      <Route path='/' 
      element ={
        <Home/>
      } >

      </Route>
      <Route path='/contact' 
      element ={
        <Contact/>
      } >

      </Route>
      <Route path='/creator' 
      element ={
        <Creator/>
      } >
      </Route>

      <Route path='/home2' 
      element ={
        <Home2/>
      } >
      </Route>


     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
