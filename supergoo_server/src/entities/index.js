'use strict';
const AccountUsers = require('./AccountUsers');
const AccountTokens = require('./AccountTokens');

// AccountUsers => AccountTokens
AccountUsers.hasOne(AccountTokens, { foreignKey: 'id' });
AccountTokens.belongsTo(AccountUsers, { foreignKey: 'id' });

module.exports = {
	AccountUsers,
	AccountTokens,
};
