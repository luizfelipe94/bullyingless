'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    const schools = [
      {
        id: 1,
        tenantId: 1,
        name: "Escola1 grupo A",
        studentQty: 250
      },
      {
        id: 2,
        tenantId: 1,
        name: "Escola2 grupo A",
        studentQty: 800
      },
      {
        id: 3,
        tenantId: 1,
        name: "Escola3 grupo A",
        studentQty: 1258
      },
      {
        id: 4,
        tenantId: 2,
        name: "Escola1 grupo B",
        studentQty: 170
      },
      {
        id: 5,
        tenantId: 2,
        name: "Escola2 grupo B",
        studentQty: 150
      },
      {
        id: 6,
        tenantId: 3,
        name: "Escola1 grupo C",
        studentQty: 80
      }
    ];

    return queryInterface.bulkInsert('School', schools, {});

  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkDelete('School');

  }
};
