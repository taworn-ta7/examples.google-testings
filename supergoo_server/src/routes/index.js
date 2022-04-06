'use strict';
const router = require('express').Router();

router.use('/', require('./test'));
router.use('/authen', require('./authen'));
router.use('/authen/google', require('./signin/google'));
router.use('/profile', require('./profile/icon'));
router.use('/profile', require('./profile/name'));
router.use('/settings', require('./settings/locale'));
router.use('/settings', require('./settings/theme'));

module.exports = router;
