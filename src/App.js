import React,{useState} from 'react';
import './App.css';
import Entry from '../src/pages/Entry'
import Game from '../src/pages/Game'
function App() {
  const [playerName, setPlayerName] = useState('');
  const [difficulty, setDifficulty] = useState(1);
  const [page,setPage] = useState(0);
  return (
    <div className="App">
      { page ===0  && <Entry playerName={playerName} setPlayerName={setPlayerName} setDifficulty={setDifficulty} setPage={setPage} />}
      { page ===1 && <Game playerName={playerName} difficulty={difficulty} setDifficulty={setDifficulty} setPage={setPage} /> }
    </div>
  );
}

export default App;
