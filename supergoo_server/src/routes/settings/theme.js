'use strict';
const { StatusCodes } = require('http-status-codes');
const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Joi, validate } = require('express-validation');
const entities = require('../../entities');
const validators = require('../../validators');
const { dump, authen } = require('../../middlewares');

/**
 * Change the theme.
 */
router.put('/theme', [
	authen.required,
	dump.body,
	validate({
		body: Joi.object({
			user: Joi.object({
				theme: validators.AccountUsers.theme.required(),
			}),
		}),
	}),
], asyncHandler(async (req, res, next) => {
	// get request
	const json = req.body.user;

	// update
	await req.user.update({
		theme: json.theme,
	});

	// success
	res.ret = {
		user: await entities.AccountUsers.findByPk(req.user.id),
	};
	res.status(StatusCodes.OK).send(res.ret);
	next();
}));

module.exports = router;
