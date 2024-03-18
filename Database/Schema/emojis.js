'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class emojis extends Model {
		static associate(models) {
			// define association here
		}
	}
	emojis.init({
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.BIGINT(20).UNSIGNED
		},
		emoji: {
			allowNull: false,
			type: DataTypes.TEXT
		},
		createdAt: {
			allowNull: false,
			type: DataTypes.DATE
		},
		updatedAt: {
			allowNull: false,
			type: DataTypes.DATE
		}
	}, {
		sequelize,
		modelName: 'emojis',
	});
	return emojis;
};