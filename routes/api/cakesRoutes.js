const router = require('express').Router();
const withAuth = require('../../utils/auth');
const {createCake} = require('../../controllers/cake');

router.post('/', withAuth, createCake);

module.exports = router;
