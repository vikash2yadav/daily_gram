const router = require('express').Router();
const postCommentController = new(require('../Controllers/post_comments'));

// Add post comments
router.route('/add').post(postCommentController.addPostComments);

// Update post comments
router.route('/update').put(postCommentController.updatePostComments);

// Delete post comments
router.route('/delete/:id').delete(postCommentController.deletePostComments);

// Get post comments by id
router.route('/:id').get(postCommentController.getPostCommentsById);

// Get all list post comments
router.route('/list').post(postCommentController.getAllPostCommentsList);

module.exports = router;