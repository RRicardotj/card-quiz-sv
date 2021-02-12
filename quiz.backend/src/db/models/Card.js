const Sequelize = require('sequelize');

const db = require('../db');

class Card extends Sequelize.Model {}

Card.init(
  {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    url: {
      type: Sequelize.STRING,
      allowNull: true
    },
  },
  {
    sequelize: db,
    modelName: 'cards',
    timestamps: false,
  },
);

module.exports = Card;
