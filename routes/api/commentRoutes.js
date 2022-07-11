const router = require('express').Router();
const withAuth = require('../../utils/auth');
//POST, create a comment

router.post('/', withAuth, createComment);

module.exports = router