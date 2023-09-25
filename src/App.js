import logo from './logo.svg';
import './App.css';
// import React from './components/login'
//import Login from './components/login_modal'
//import First from './components/first';
//import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
 import  Carousel from './components/carousel';
 import API from './components/API';
// import Lifecycle from './components/lifecycle';
import APPI from './components/APPI';
function App() {
  return (
    <div classname="App">
      
      {/* <Router>
        <Routes>
          <Route path="/first" element={<First/>}></Route>
        </Routes>
      </Router> */}
     
      {/* <React></React>
      <Login></Login> */}
      {/* {<><React></React><Carousel></Carousel></>} */}
      <Carousel></Carousel>
      {/* <Lifecycle></Lifecycle> */}
      <APPI></APPI>
      {/* <Api_axios></Api_axios> */}
      
    </div>
  );
}

export default App;
