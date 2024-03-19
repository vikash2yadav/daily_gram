const router = require('express').Router();
const storyReactionController = new(require('../Controllers/story_reactions'));

// Add story reaction
router.route('/add').post(storyReactionController.addStoryReaction);

// Update story reaction
router.route('/update').put(storyReactionController.updateStoryReaction);

// Delete story reaction
router.route('/delete/:id').delete(storyReactionController.deleteStoryReaction);

// Get story reaction by id
router.route('/:id').get(storyReactionController.getStoryReactionById);

// Get all list story reaction
router.route('/list').post(storyReactionController.getAllStoryReactionList);

module.exports = router;