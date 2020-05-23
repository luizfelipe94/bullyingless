'use strict';
module.exports = (sequelize, DataTypes) => {
  const Occurence = sequelize.define('Occurence', {
    id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    local: DataTypes.STRING,
    schoolId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deviceId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    denouementId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {});
  Occurence.associate = function(models) {
    Occurence.belongsTo(models.School, { foreignKey: 'schoolId' });
    Occurence.belongsTo(models.Device, { foreignKey: 'deviceId' });
    Occurence.belongsTo(models.Denouement, { foreignKey: 'denouementId' });
    Occurence.hasMany(models.Alert);
  };
  return Occurence;
};