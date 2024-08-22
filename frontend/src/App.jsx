import React from 'react';
import NavBar from "./components/NavBar"
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Services from './components/Services';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About/>
      <Services/>
      <Contact/>
    </div>
  );
};

export default App;
