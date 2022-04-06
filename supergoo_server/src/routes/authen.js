'use strict';
const { StatusCodes } = require('http-status-codes');
const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { db } = require('../libs');
const entities = require('../entities');
const { authen } = require('../middlewares');

/**
 * Logout from the system.
 */
router.put('/logout', [
	authen.required,
], asyncHandler(async (req, res, next) => {
	// save id
	const id = req.user.id;

	// update
	await db.transaction(async (t) => {
		await req.user.update({
			end: new Date(),
		}, { transaction: t });
		await req.user.accountToken.update({
			token: null,
		}, { transaction: t });
	});
	req.user = undefined;

	// success
	res.ret = {
		user: await entities.AccountUsers.findByPk(id),
	};
	res.status(StatusCodes.OK).send(res.ret);
	next();
}));

/**
 * Check login status and renew expiry token.
 */
router.get('/check', [
	authen.required,
], asyncHandler(async (req, res, next) => {
	// success
	res.ret = {
		user: await entities.AccountUsers.findByPk(req.user.id),
	};
	res.status(StatusCodes.OK).send(res.ret);
	next();
}));

module.exports = router;
