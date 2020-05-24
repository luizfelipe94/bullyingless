'use strict';

const utils = require("../lib/utils");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [
      {
        id: 1,
        name: 'teste1',
        username: 'teste1.silva',
        email: 'teste1@gmail.com',
        password: utils.hash("123456"),
        profileId: 1,
        schoolId: 1
      },
      {
        id: 2,
        name: 'teste2',
        username: 'teste2.silva',
        email: 'teste2@hotmail.com',
        password: utils.hash("123456"),
        profileId: 1,
        schoolId: 1
      },
      {
        id: 3,
        name: 'teste3',
        username: 'teste3.silva',
        email: 'teste3@gmail.com',
        password: utils.hash("123456"),
        profileId: 2,
        schoolId: 2
      },
      {
        id: 4,
        name: 'teste4',
        username: 'teste4.silva',
        email: 'teste4@gmail.com',
        password: utils.hash("123456"),
        profileId: 2,
        schoolId: 6
      },
      {
        id: 5,
        name: 'teste5',
        username: 'teste5.silva',
        email: 'teste5@gmail.com',
        password: utils.hash("123456"),
        profileId: 2,
        schoolId: 6
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User');
  }
};
