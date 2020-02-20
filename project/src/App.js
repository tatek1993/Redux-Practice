import React from 'react';
import PlayerList from './components/PlayerList';
import PlayerForm from './components/PlayerForm';

import './App.css';

function App() {
  return (
    <div className="center">
      <h1>Soccer Players</h1>
      <PlayerForm />
      <PlayerList />
    </div>
  );
}

export default App;
