'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Profile', 
    [
      {
        name: 'Administrator',
        description: 'Administrador do sistema'
      },
      {
        name: 'Student',
        description: 'Estudante da escola'
      }
    ],
    {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
