import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameMenu from './components/GameMenu';
import CreateGame from './components/CreateGame';
import GameRedirector from './components/GameRedirector'; // 👈 New file
import JoinGame from './components/JoinGame';
function App() {
  return (
    <Router>
      <GameRedirector /> {/* 👈 Render this inside Router */}
      <Routes>
        <Route path="/" element={<GameMenu />} />
        <Route path="/game/create" element={<CreateGame />} />
        <Route path="/game/join" element={<JoinGame />} />
      </Routes>
    </Router>
  );
}

export default App;
