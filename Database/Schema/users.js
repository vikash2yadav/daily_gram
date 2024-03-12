'use strict';
const {
	Model
} = require('sequelize');
const { STATUS, USER_ACCOUNT_TYPE } = require('../../Config/constant');
module.exports = (sequelize, DataTypes) => {
	class users extends Model {
		static associate(models) {
			// define association here
		}
	}
	users.init({
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.BIGINT(20).UNSIGNED
		},
		first_name: {
			allowNull: false,
			type: DataTypes.STRING(255)
		},
		last_name: {
			allowNull: false,
			type: DataTypes.STRING(255)
		},
		full_name: {
			allowNull: false,
			type: DataTypes.STRING(255)
		},
		email: {
			allowNull: false,
			type: DataTypes.STRING(255)
		},
		username: {
			allowNull: false,
			type: DataTypes.STRING(255)
		},
		password: {
			allowNull: false,
			type: DataTypes.STRING(255)
		},
		birth_date: {
			allowNull: false,
			type: DataTypes.DATE
		},
		gender: {
			allowNull: false,
			type: DataTypes.STRING(255)
		},
		profile_image: {
			allowNull: true,
			type: DataTypes.STRING(500)
		},
		cover_image: {
			allowNull: true,
			type: DataTypes.STRING(500)
		},
		country_code: {
			allowNull: false,
			type: DataTypes.STRING(5)
		},
		contact_no: {
			allowNull: false,
			type: DataTypes.STRING(255)
		},
		alternative_country_code: {
			allowNull: true,
			type: DataTypes.STRING(5)
		},
		alternative_contact_no: {
			allowNull: true,
			type: DataTypes.STRING(255)
		},
		bio: {
			allowNull: true,
			type: DataTypes.TEXT     
		},
		location: {
			allowNull: true,
			type: DataTypes.TEXT
		},
		account_type: {
			allowNull: false,
			type: DataTypes.TINYINT(1),
			defaultValue: USER_ACCOUNT_TYPE?.PUBLIC,
		},
		is_verified: {
			allowNull: false,
			type: DataTypes.BOOLEAN,
			defaultValue: STATUS?.FALSE,
			comment: "0 => Not Verified 1 => Verified"
		},
		status: {
			allowNull: false,
			type: DataTypes.TINYINT(1),
			defaultValue: STATUS?.ACTIVE,
			comment: "0 => In Active 1 => Active"
		},
		is_delete: {
			allowNull: false,
			type: DataTypes.TINYINT(1),
			defaultValue: STATUS?.NOTDELETED,
			comment: "0 => Not Deleted 1 => Deleted"
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
		modelName: 'users',
	});
	return users;
};