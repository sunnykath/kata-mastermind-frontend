import { useState } from 'react'
import './Mastermind.css'
import Main from './Pages/Main/Main';
import Game from './Pages/Game/Game';

export default function Mastermind() {
  const [game, setGame] = useState(null);

  const URL: string = (process.env.REACT_APP_API_URL as string);

  const handleNewGame = async () => {
    const rawResponse = await fetch(URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });
    const content = await rawResponse.json();
    setGame(content);
    console.log(content);
  }

  return (
    // game ?
    <Game gameId={game} />
    // :
    // <Main onStartGame={handleNewGame} />
  );
}
