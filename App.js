import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './pages/component/Header.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Service from './pages/Service.js';
import Single from './pages/Single.js';
import Gallery from './pages/Gallery.js';
import Contact from './pages/Contact.js';
import Footer from './pages/component/Footer.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
  <div>
 <Router>
 <Header/>
 <switch>
 <Route exact path='/' component={Home}/>
<Route path='/About' component={About}/>
<Route path='/Service' component={Service}/>
<Route path='/Single' component={Single}/>
<Route path='/Gallery' component={Gallery}/>
<Route path='/Contact' component={Contact}/>
  </switch>
   <Footer/>
   </Router>

    </div> 
   
   
  );
}

export default  App;
