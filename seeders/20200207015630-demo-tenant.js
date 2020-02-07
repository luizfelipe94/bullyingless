'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tenant', [{
      name: 'Tenant Teste',
      description: "Tenant test description"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tenant', null, {});
  }
};