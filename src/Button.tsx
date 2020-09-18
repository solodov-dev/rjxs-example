import React from 'react';
import { Game } from './Game';

export default function Button(props: { gameInstance: Game }) {
  return (
    <button
      className="App-button"
      onClick={() => props.gameInstance.increase()}
    >
      Click me
    </button>
  );
}
