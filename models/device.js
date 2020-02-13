'use strict';
module.exports = (sequelize, DataTypes) => {
  const Device = sequelize.define('Device', {
    OS: DataTypes.STRING,
    macaddress: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Device.associate = function(models) {
    Device.belongsTo(models.User, { foreignKey: 'userId' });
    Device.hasMany(models.Occurence, { foreignKey: 'occurenceId' } );
  };
  return Device;
};