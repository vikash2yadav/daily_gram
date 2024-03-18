const router = require('express').Router();
const postLikeController = new(require('../Controllers/post_likes'));

// Add post likes
router.route('/add').post(postLikeController.addPostLike);

// Update post likes
router.route('/update').put(postLikeController.updatePostLike);

// Delete post likes
router.route('/delete/:id').delete(postLikeController.deletePostLike);

// Get post likes by id
router.route('/:id').get(postLikeController.getPostLikeById);

// Get all list post likes
router.route('/list').post(postLikeController.getAllPostLikeList);

module.exports = router;