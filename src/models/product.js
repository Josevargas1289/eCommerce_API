'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      products.hasMany(models.productInOrders, {foreignKey: "productId"});
      products.belongsTo(models.Users, {foreignKey: 'userId'});
   
      
    }
  }
  products.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    avaliableQty: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    productImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};