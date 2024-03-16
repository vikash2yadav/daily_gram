'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('product_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(20)
      },
      title: {
        allowNull:false,
        type: Sequelize.STRING(250)
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      product_price: {
        allowNull:false,
        type: Sequelize.BIGINT(20)
      },
      creator_id: {
        allowNull:false,
        type: Sequelize.BIGINT(20)
      },
      product_category: {
        allowNull: true,
        type: Sequelize.STRING(250)
      },
      content:{
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('product_details');
  }
};