import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

import './DealerArea.scss';

const DealerArea = ({ cards = [], selectCard }) => {

  return (
    <div className='dealer-area'>
      {
        cards.map((card) => (
          <Card key={card.id} imageSrc={card.url} onClick={() => selectCard(card)} />
        ))
      }
    </div>
  );
};

DealerArea.propTypes = {
  cards: PropTypes.array.isRequired,
  selectCard: PropTypes.func.isRequired
};

export default DealerArea;