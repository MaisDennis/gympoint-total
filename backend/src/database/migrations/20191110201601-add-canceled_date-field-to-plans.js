module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('plans', 'canceled_at', {
      type: Sequelize.DATE,
      onUpdate: 'SET NULL',
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('plans', 'canceled_at');
  },
};
