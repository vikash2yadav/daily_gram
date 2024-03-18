const router = require('express').Router();
const postShareController = new(require('../Controllers/post_shares'));

// Add post share
router.route('/add').post(postShareController.addPostShare);

// Update post share
router.route('/update').put(postShareController.updatePostShare);

// Delete post share
router.route('/delete/:id').delete(postShareController.deletePostShare);

// Get post share id
router.route('/:id').get(postShareController.getPostShareById);

// Get all list post share
router.route('/list').post(postShareController.getAllPostShareList);

module.exports = router;