'use strict';
require('./config');
require('./extensions');
const { db } = require('./libs');

/**
 * A script to initial database.
 */
(async () => {
	try {
		await db.sync({ force: true });
		process.exit(0);
	}
	catch (ex) {
		console.log(ex);
		process.exit(1);
	}
})();
