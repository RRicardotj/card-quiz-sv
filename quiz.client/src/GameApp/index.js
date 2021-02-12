import React from 'react';
import useGameState from './hooks/useGameState';
import DealerArea from './DealerArea';
import PlayerArea from './PlayerArea';

import './GameApp.scss';

const GameApp = () => {
  const { cardsSelected, gameCards, removeCard, selectCard } = useGameState();

  const skipCardsSelected = (card) => !cardsSelected.map((item) => item.id).includes(card.id);

  return (
    <div className='game-app'>
      <div className="game-app__game-area">
        <PlayerArea cards={cardsSelected} removeCard={removeCard} />
        <DealerArea cards={gameCards.filter(skipCardsSelected)} selectCard={selectCard} />
      </div>
    </div>
  );
};


export default GameApp;