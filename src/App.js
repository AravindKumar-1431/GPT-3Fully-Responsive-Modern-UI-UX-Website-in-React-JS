import React from 'react';

import { Footer, Blog, Possibility, Features, About, Header } from './containers';
import { Cta, Brand, Navbar,Article } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <About />
    <Features />
    <Possibility />
    <Cta />
    <Blog />
    <Footer />
  </div>
);

export default App;