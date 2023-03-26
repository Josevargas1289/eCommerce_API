'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Users', [
        {user_name: "Jose Vargas", email: "jose@gmail.com", password: "12345", avatar: "hhtps:image"},
        {user_name: "fabio asteca", email: "fabio@gmail.com", password: "12345", avatar: "hhtps:image"},
        {user_name: "nelson Vargas", email: "nelson@gmail.com", password: "12345", avatar: "hhtps:image"},
        {user_name: "Hamilton Arango", email: "hamilton@gmail.com", password: "12345", avatar: "hhtps:image"},
        {user_name: "Antonio Seeders", email: "antonio@gmail.com", password: "12345", avatar: "hhtps:image"},

      ], 
      
      {});

  },

  async down (queryInterface, Sequelize) {
   

     await queryInterface.bulkDelete('Users', null, {});
     
  }
};
