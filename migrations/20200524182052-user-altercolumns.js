'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
    return Promise.all([
      queryInterface.changeColumn("User", "username", { type: Sequelize.STRING, allowNull: false, unique: true }),
      queryInterface.changeColumn("User", "email",    { type: Sequelize.STRING, allowNull: false }),
      queryInterface.changeColumn("User", "name",     { type: Sequelize.STRING, allowNull: false }),
      queryInterface.changeColumn("User", "password", { type: Sequelize.STRING, allowNull: false })
    ]);

  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn("User", "username", { type: Sequelize.STRING, allowNull: true, unique: false }),
      queryInterface.changeColumn("User", "email",    { type: Sequelize.STRING, allowNull: true }),
      queryInterface.changeColumn("User", "name",     { type: Sequelize.STRING, allowNull: true }),
      queryInterface.changeColumn("User", "password", { type: Sequelize.STRING, allowNull: true })
    ]);
  }
};
