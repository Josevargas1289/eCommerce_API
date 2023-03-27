'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductsIncars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      carId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'Cars',
          key: 'id'
        }
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'Products',
          key: 'id'
        }
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull:false
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull:false
      },
    
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProductsIncars');
  }
};