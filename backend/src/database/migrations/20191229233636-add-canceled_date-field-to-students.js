module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('students', 'canceled_at', {
      type: Sequelize.DATE,
      onUpdate: 'SET NULL',
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('students', 'canceled_at');
  },
};
