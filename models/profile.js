'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.ENUM('Administrator', 'Student')
    },
    description: DataTypes.STRING
  }, {});
  Profile.associate = function(models) {
  };
  return Profile;
};