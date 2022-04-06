'use strict';
const path = require('path');
const logger = require('../libs/logger');
const deleteLogs = require('./delete-logs');

const deleteLogTimer = async (parameter) =>
	await deleteLogs(parameter.daysToKeep, parameter.logPath);

/**
* Install all background tasks.
*/
(() => {
	try {
		const delayTime = 10 * 1000;
		const intervalTime = 8 * 60 * 60 * 1000;
		const logPath = path.resolve(path.join(__dirname, '..', '..', process.env.LOG_DIR));
		logger.info(`log path: ${logPath}`);

		{
			// logs
			const daysToKeep = +process.env.DAYS_TO_KEEP_LOGS;
			logger.info(`days to keep logs: ${daysToKeep} day(s)`);
			setTimeout(deleteLogTimer, delayTime, { daysToKeep, logPath });
			setInterval(deleteLogTimer, intervalTime, { daysToKeep, logPath });
		}
	}
	catch (ex) {
		logger.error(ex);
	}
})();
