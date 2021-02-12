import React from 'react';
import PropTypes from 'prop-types';
import Card, { EmptyCard } from '../Card';

import './PlayerArea.scss';

const PLAYER_CARDS_LIMIT = 4;

const PlayerArea = ({ cards, removeCard }) => {
  const playerCards = [...cards, ...Array(PLAYER_CARDS_LIMIT - cards.length).fill({ isEmpty: true })];

  return (
    <div className='player-area'>
      {
        playerCards.map((card, index) => {
          if (card.isEmpty) {
            return <EmptyCard key={`empty-card${index}`} />
          }

          return <Card imageSrc={card.url} onClick={() => removeCard(card.id)} />
        })
      }
    </div>
  );
};

PlayerArea.propTypes = {
  cards: PropTypes.array.isRequired,
  removeCard: PropTypes.func.isRequired
};

export default PlayerArea;