'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Tenant', [
      { name: 'Tenant test1', description: 'Test description1' },
      { name: 'Tenant test2', description: 'Test description2' }
    ], {});

    const tenants = await queryInterface.sequelize.query(
      `SELECT id from Tenant WHERE name LIKE '%Tenant test%';`
    );

    const schools = tenants.map((t, i) => {
      return { tenantId: t.id, name: `Escola teste${i}`, studentQty: 20 + i }
    });

    await queryInterface.bulkInsert('School', schools, {});

  }, 

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('School', null, {});
  }
};