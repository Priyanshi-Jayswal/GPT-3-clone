import React from 'react';

// Import components
import Article from './components/articles/articles';
import Brand from './components/brand/brand';
import CTA from './components/cta/cta';
import Feature from './components/feature/feature';
import Navbar from './components/navbar/navbar';

// Import CSS (if any)
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <h1>GPT-3</h1>
      <Article />
      <Brand />
      <CTA />
      <Feature />
    </div>
  );
}

export default App;
