'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Orders.hasMany(models.ProductsInOrder, { foreignKey: "orderid"});
      Orders.belongsTo(models.Users, {foreignKey: "userId"});
    }
  }
  Orders.init({
    totaPrice: DataTypes.FLOAT,
    userId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};