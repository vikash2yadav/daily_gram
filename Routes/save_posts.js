const router = require('express').Router();
const savePostController = new(require('../Controllers/save_posts'));

// Add saved post 
router.route('/add').post(savePostController.addPost);

// Update saved post 
router.route('/update').put(savePostController.updateSavePost);

// Delete saved post 
router.route('/delete/:id').delete(savePostController.deleteSavePost);

// Get saved post id
router.route('/:id').get(savePostController.getSavePostById);

// Get all list saved post 
router.route('/list').post(savePostController.getAllSavePostList);

module.exports = router;