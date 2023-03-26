'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_name: {
        type: Sequelize.STRING(30),
        allowNull:false
    
      },
      email: {
        type: Sequelize.STRING(100),
        validate:{isEmail:true} ,
        allowNull: false,       
      },
      password: {
        type: Sequelize.STRING(30),
        
      },
      avatar: {
        type: Sequelize.STRING(200),
        allowNull: false
      }
     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};