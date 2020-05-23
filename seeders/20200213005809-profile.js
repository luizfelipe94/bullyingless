'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Profile', 
    [
      {
        id: 1,
        name: 'Administrator',
        description: 'Administrador do sistema'
      },
      {
        id: 2,
        name: 'Student',
        description: 'Estudante da escola'
      }
    ],
    {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Profile');
  }
};
