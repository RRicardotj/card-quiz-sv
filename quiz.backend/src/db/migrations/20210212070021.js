module.exports = {
  up(queryInterface, Sequelize) {
    const tableFields = {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      url: {
        type: Sequelize.STRING,
        allowNull: true,
      }
    };

    return queryInterface.createTable('cards', tableFields);
  },

  down(queryInterface) {
    return queryInterface.dropTable('cards');
  },
};
