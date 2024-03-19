const router = require('express').Router();
const postLikeController = new(require('../Controllers/post_likes'));
const Authentication = new(require('../Middleware/authentication'));
const userAuth = Authentication.userAuth;

// Add post likes
router.route('/add').post(userAuth, postLikeController.addPostLike);

// Update post likes
router.route('/update').put(postLikeController.updatePostLike);

// Delete post likes
router.route('/delete/:id').delete(postLikeController.deletePostLike);

// Get post likes by id
router.route('/get/:id').get(postLikeController.getPostLikeById);

// Get all list post likes
router.route('/get/list').post(postLikeController.getAllPostLikeList);

module.exports = router;