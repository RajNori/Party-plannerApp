const { Comment } = require('../../models');

//create a comment
const createComment = async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      cake_id: req.body.cakeId,
    });
res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
};


module.exports = {
  createComment,
};