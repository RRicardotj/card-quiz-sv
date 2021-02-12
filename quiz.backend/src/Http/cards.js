const cardRouter = require('express').Router();
const { asyncHandler } = require('../common/http');
const Card = require('../db/models/Card');

const getAllCardsHandler = async (_, res) => {
  const allCards = await Card.findAll();

  return res.json(allCards);
};

cardRouter.get('/', asyncHandler(getAllCardsHandler));

module.exports = cardRouter;
