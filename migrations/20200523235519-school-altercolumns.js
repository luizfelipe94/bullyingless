'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.removeColumn('School', 'studentQty');

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.addColumn('School', 'studentQty', Sequelize.INTEGER);

  }
};
