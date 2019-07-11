// Example model generated by 
// npx sequelize-cli model:generate --name People --attributes firstName:string,lastName:string,email:string
'use strict';
module.exports = (sequelize, DataTypes) => {
  const People = sequelize.define('People', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  People.associate = function(models) {
    // associations can be defined here
  };
  return People;
};