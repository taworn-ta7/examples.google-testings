'use strict';
const { DataTypes } = require('sequelize');
const db = require('../libs/db');

module.exports = db.define('AccountUsers', {
	// id
	id: {
		type: DataTypes.STRING(50),
		primaryKey: true,
	},

	// email
	email: {
		type: DataTypes.STRING(254),
		allowNull: false,
		unique: true,
		validate: {
			is: /^[^ \t@]+@[^ \t@.]+\.[^ \t@]+$/,
		},
	},

	// ----------------------------------------------------------------------

	// display name
	name: {
		type: DataTypes.STRING(100),
		allowNull: false,
		field: 'name',
		validate: {
			len: 1,
		},
	},

	// current locale
	locale: {
		type: DataTypes.STRING(10),
		allowNull: false,
		defaultValue: 'en',
		validate: {
			isIn: [['en', 'th']],
		},
	},

	// current theme
	theme: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0,
		validate: {
			min: 0,
			max: 15,
		},
	},

	// ----------------------------------------------------------------------

	// access token
	accessToken: {
		type: DataTypes.STRING(1024),
		allowNull: true,
		field: 'access_token',
	},

	// ----------------------------------------------------------------------

	// last login
	begin: {
		type: DataTypes.DATE,
		allowNull: true,
	},

	// last logout
	end: {
		type: DataTypes.DATE,
		allowNull: true,
	},

	// expiration time
	expire: {
		type: DataTypes.DATE,
		allowNull: true,
	},
}, {
	name: {
		singular: 'accountUser',
		plural: 'accountUsers',
	},
	tableName: 'account_users',
});
