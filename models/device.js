'use strict';
module.exports = (sequelize, DataTypes) => {
  const Device = sequelize.define('Device', {
    OS: DataTypes.STRING,
    macaddress: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {});
  Device.associate = function(models) {
    // associations can be defined here
    Device.belongsTo(models.User);
    Device.hasMany(models.Occurence);
  };
  return Device;
};