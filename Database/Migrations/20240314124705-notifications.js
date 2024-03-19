'use strict';

const { STATUS, NOTIFICATION_TYPE } = require('../../Config/constant');
/** @type {import('sequelize-cli').Migration} */

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('notifications', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.BIGINT(20).UNSIGNED
			},
			description: {
				allowNull: false,
				type: Sequelize.STRING(500)
			},
			notification_type: {
				allowNull: false,
				type: Sequelize.STRING(500),
				defaultValue: NOTIFICATION_TYPE?.INFORMATION
			},
			user_id: {
				allowNull: false,
				type: Sequelize.BIGINT(20).UNSIGNED
			},
			archived: {
				allowNull: true,
				type: Sequelize.TINYINT(1),
				defaultValue: STATUS?.NO,
			},
			status: {
				allowNull: false,
				type: Sequelize.TINYINT(1),
				defaultValue: STATUS?.UNREAD,
				comment: "0 => unread 1 => read"
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
		await queryInterface.dropTable('notifications');
	}
};