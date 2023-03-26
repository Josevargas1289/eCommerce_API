'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('product', [
      { }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('product', null, {});
     
  }
};
