import React from 'react';
import './App.css';
import Header from './Components/header'
import Banner from './Components/Banner'
import About from './Components/About'
import Contact from './Components/Contact'



function App() {
  return (
    <div className="App">
      <Header />
      <hr />
 <div className="wrapper">
      <br />
      <Banner /> 
      <br />
      <About />
      <br />
      </div>
      <hr />
    
      <hr />
     
      <hr />
      <h1 id="contactnav" className="contact">System Messages</h1>
      <hr />
      <Contact />

    </div>
  );
}

export default App;
