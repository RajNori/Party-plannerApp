const router = require('express').Router();
const {
  createUser,
  userSignup,
  userLogin,
  userLogout,
} = require('../../controllers/user');

router.post('/', createUser);
router.post('/signup', userSignup);
router.post('/login',userLogin );
router.post('/logout', userLogout);

module.exports = router;
