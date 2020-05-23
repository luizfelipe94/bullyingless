'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    const grupoDeEscolas = [
      {
        id: 1,
        name: "Grupo A",
        description: "Grupo de escolas A"
      },
      {
        id: 2,
        name: "Grupo B",
        description: "Grupo de escolas B"
      },
      {
        id: 3,
        name: "Grupo C",
        description: "Grupo de escolas C"
      }
    ];

    return queryInterface.bulkInsert('Tenant', grupoDeEscolas, {});
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Tenant');

  }
};
