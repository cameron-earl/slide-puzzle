import React from 'react';
import './App.css';
import SlidePuzzle from './components/SlidePuzzle';
import { populateSolutionMap } from './helpers/solver';

// populateSolutionMap();

const App: React.FC = () => {
  return (
    <div className="App">
      <SlidePuzzle></SlidePuzzle>
    </div>
  );
};

export default App;
