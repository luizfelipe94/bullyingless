'use strict';
module.exports = (sequelize, DataTypes) => {
  const DefendentBlackList = sequelize.define('DefendentBlackList', {
    id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    schoolId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  DefendentBlackList.associate = function(models) {
    DefendentBlackList.belongsTo(models.School, { foreignKey: 'schoolId' });
    DefendentBlackList.hasMany(models.Defendent);
  };
  return DefendentBlackList;
};