import React, { ReactElement } from 'react';
import './App.css';
import Comics from './Components/Comics';

const App: React.FC = (): JSX.Element => {
  
  return (
    <div className="App">
      <header className="App-header">
        <Comics/>
      </header>
    </div>
  );
}

export default App;
