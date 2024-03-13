'use strict';

const { STATUS } = require('../../Config/constant');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(20).UNSIGNED
      },
      title:{
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      content:{
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      title_description:{
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      location:{
        allowNull: true,
        type: Sequelize.STRING(500)
      },
      user_id: {
        allowNull: false,
        type: Sequelize.BIGINT(20).UNSIGNED
      },
      is_like:{
        allowNull: true,
        type: Sequelize.TINYINT(1),
        defaultValue: '1',
        comment: "0 => Not allowed 1 => allowed"
      },
      is_comment:{
        allowNull: true,
        type: Sequelize.TINYINT(1),
        defaultValue: '1',
        comment: "0 => Not allowed 1 => allowed"
      },
      is_share:{
        allowNull: true,
        type: Sequelize.TINYINT(1),
        defaultValue: '1',
        comment: "0 => Not allowed 1 => allowed"
      },
      status: {
        allowNull: false,
        type: Sequelize.TINYINT(1),
        defaultValue: STATUS?.ACTIVE,
        comment: "0 => In Active 1 => Active"
      },
      is_delete: {
        allowNull: false,
        type: Sequelize.TINYINT(1),
        defaultValue: STATUS?.NOTDELETED,
        comment: "0 => Not Deleted 1 => Deleted"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('posts');
  }
};