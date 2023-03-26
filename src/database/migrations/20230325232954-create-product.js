'use strict';



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull:false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull:false
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      avaliableQty: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
         references: {
          model: 'Users',
          key: 'id'
         },
         field:'user_id'
      },
      productImage: {
        type: Sequelize.STRING,
        allowNull: false
      },
  
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};