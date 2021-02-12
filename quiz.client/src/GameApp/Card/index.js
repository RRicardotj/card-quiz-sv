import React from 'react';
import PropTypes from 'prop-types';
import EmptyCard from './EmptyCard';

import './Card.scss';

const Card = ({ onClick, imageSrc }) => {
  return (
    <button className='card' type='button' onClick={onClick}>
      <img src={imageSrc} alt='card' />
    </button>
  );
};

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  imageSrc: PropTypes.string.isRequired
};

export { EmptyCard };

export default Card;