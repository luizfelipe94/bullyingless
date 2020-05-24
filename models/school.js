'use strict';
module.exports = (sequelize, DataTypes) => {
  const School = sequelize.define('School', {
    id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    tenantId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  School.associate = function(models) {
    School.belongsTo(models.Tenant, { foreignKey: 'tenantId' });
    School.hasMany(models.Occurence, {as : 'Occurence', foreignKey : 'schoolId'});
    School.hasMany(models.DefendentBlackList, {as : 'DefendentBlackList', foreignKey : 'schoolId'});
    School.hasMany(models.User, {as : 'Users', foreignKey : 'schoolId'});
  };
  return School;
};