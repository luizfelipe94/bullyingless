'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    const schools = [
      {
        id: 1,
        tenantId: 1,
        name: "Escola1 grupo A"
      },
      {
        id: 2,
        tenantId: 1,
        name: "Escola2 grupo A"
      },
      {
        id: 3,
        tenantId: 1,
        name: "Escola3 grupo A"
      },
      {
        id: 4,
        tenantId: 2,
        name: "Escola1 grupo B"
      },
      {
        id: 5,
        tenantId: 2,
        name: "Escola2 grupo B"
      },
      {
        id: 6,
        tenantId: 3,
        name: "Escola1 grupo C"
      }
    ];

    return queryInterface.bulkInsert('School', schools, {});

  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkDelete('School');

  }
};
