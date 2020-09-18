import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import game from './Game';

function App() {
  const [value, setValue] = useState<number>();

  useEffect(() => {
    const subscriber = game.subscribe(setValue);
    return () => subscriber.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Your number is {value}</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button gameInstance={game} />
      </header>
    </div>
  );
}

export default App;
