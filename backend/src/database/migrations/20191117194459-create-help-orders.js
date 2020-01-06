module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('helporders', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      student_id: {
        type: Sequelize.INTEGER,
        // references: { model: 'students', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      question: {
        type: Sequelize.STRING,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      answer: {
        type: Sequelize.STRING,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      answered_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('helporders');
  },
};
