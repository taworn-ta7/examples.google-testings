'use strict';
const { DataTypes } = require('sequelize');
const db = require('../libs/db');

module.exports = db.define('AccountTokens', {
	// id
	id: {
		type: DataTypes.STRING(50),
		primaryKey: true,
	},

	// ----------------------------------------------------------------------

	// encrypted password
	token: {
		type: DataTypes.STRING(4096),
		allowNull: true,
	},

	// ----------------------------------------------------------------------

	// refresh token
	refreshToken: {
		type: DataTypes.STRING(1024),
		allowNull: true,
		field: 'refresh_token',
	},
}, {
	name: {
		singular: 'accountToken',
		plural: 'accountTokens',
	},
	tableName: 'account_tokens',
});
