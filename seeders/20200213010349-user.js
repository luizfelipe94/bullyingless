'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [
      {
        id: 1,
        name: 'teste1',
        username: 'teste1.silva',
        email: 'teste1@gmail.com',
        password: '123456',
        profileId: 1,
        schoolId: 1
      },
      {
        id: 2,
        name: 'teste2',
        username: 'teste2.silva',
        email: 'teste2@hotmail.com',
        password: '423rgfg',
        profileId: 1,
        schoolId: 1
      },
      {
        id: 3,
        name: 'teste3',
        username: 'teste2.silva',
        email: 'teste2@gmail.com',
        password: 'defsg',
        profileId: 2,
        schoolId: 2
      },
      {
        id: 4,
        name: 'teste4',
        username: 'teste4.silva',
        email: 'teste4@gmail.com',
        password: 'defsg',
        profileId: 2,
        schoolId: 6
      },
      {
        id: 5,
        name: 'teste5',
        username: 'teste5.silva',
        email: 'teste54@gmail.com',
        password: '55555555',
        profileId: 2,
        schoolId: 6
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User');
  }
};
