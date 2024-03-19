'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('story_reactions', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.BIGINT(20).UNSIGNED
			},
			story_emoji_id: {
				allowNull: false,
				type: Sequelize.BIGINT(20)
			},
			reacted_by: {
				allowNull: false,
				type: Sequelize.BIGINT(20)
			},
			story_id: {
				allowNull: false,
				type: Sequelize.BIGINT(20)
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
		await queryInterface.dropTable('story_reactions');
	}
};