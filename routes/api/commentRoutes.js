const router = require('express').Router();
const withAuth = require('../../utils/auth');
const {createComment} = require('../../controllers/comments');

router.post('/', withAuth, createComment);

module.exports = router