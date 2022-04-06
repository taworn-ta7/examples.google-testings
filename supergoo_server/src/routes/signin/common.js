'use strict';
const { ulid } = require('ulid');
const { RestError, errors, db } = require('../../libs');
const entities = require('../../entities');

/**
 * Prepare account user for external sign-in.
 */
const userForExternalSignIn = async (email, name, locale) => {
	// check if email is exists
	let user = await entities.AccountUsers.findOne({
		where: { email },
		include: entities.AccountTokens,
	});

	// not found, create it
	if (!user) {
		// check locale
		if (locale !== 'en' && locale !== 'th')
			locale = 'en';

		// create user
		const id = ulid();
		let token;
		await db.transaction(async (t) => {
			user = await entities.AccountUsers.create({
				id,
				email,
				name,
				locale,
			}, { transaction: t });
			token = await entities.AccountTokens.create({
				id,
			}, { transaction: t });
		});
		user.accountToken = token;
		return { user, created: true };
	}
	else {
		return { user, created: false };
	}
}

// ----------------------------------------------------------------------

module.exports = {
	userForExternalSignIn,
};
