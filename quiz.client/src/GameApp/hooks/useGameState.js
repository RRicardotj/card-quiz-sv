import { useState, useEffect } from 'react';
import cardService from '../../services/cardService';
import shuffle from '../../utils/shuffleCards';

const PLAYER_CARDS_LIMIT = 4;

const useGameState = () => {
  const [gameCards, setGameCards] = useState([]);
  const [cardsSelected, setCardsSelected] = useState([]);

  const selectCard = (card) => {
    if (cardsSelected.length === PLAYER_CARDS_LIMIT) {
      return setCardsSelected([]);
    }

    const alreadyExist = cardsSelected.find((cardToFind) => cardToFind.id === card.id);

    if (alreadyExist) return undefined;

    const nextCardsSelected = [...cardsSelected];
    nextCardsSelected.push(card);
    
    return setCardsSelected(nextCardsSelected);
  };

  const removeCard = (cardId) => {
    const nextCardsSelected = cardsSelected.filter((card) => card.id !== cardId);

    return setCardsSelected(nextCardsSelected);
  };

  useEffect(() => {
    const fetchCards = async () => {
      const { data: cards } = await cardService.getAllCards();

      return setGameCards(shuffle(cards));
    };

    fetchCards();
  }, []);

  return { gameCards, selectCard, removeCard, cardsSelected }
};

export default useGameState;
