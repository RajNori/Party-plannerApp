const router = require('express').Router();
const withAuth = require('../../utils/auth');

//POST route to create a cake
router.post('/', withAuth, createCake);

module.exports = router;
