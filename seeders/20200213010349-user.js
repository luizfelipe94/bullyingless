'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [
      {
        name: 'teste1',
        username: 'teste1.silva',
        email: 'teste1@gmail.com',
        password: '123456',
        profileId: 1
      },
      {
        name: 'teste2',
        username: 'teste2.silva',
        email: 'teste2@hotmail.com',
        password: '423rgfg',
        profileId: 1
      },
      {
        name: 'teste2',
        username: 'teste2.silva',
        email: 'teste2@gmail.com',
        password: 'defsg',
        profileId: 2
      }
    ], {});
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
