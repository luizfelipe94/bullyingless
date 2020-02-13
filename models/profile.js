'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    name: {
      type: Sequelize.ENUM('Administrator', 'Student')
    },
    description: DataTypes.STRING
  }, {});
  Profile.associate = function(models) {
    Profile.hasMany(models.User);
  };
  return Profile;
};