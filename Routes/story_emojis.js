const router = require('express').Router();
const emojiController = new(require('../Controllers/story_emojis'));

// Add story emoji
router.route('/add').post(emojiController.addEmoji);

// Update story emoji
router.route('/update').put(emojiController.updateEmoji);

// Delete story emoji
router.route('/delete/:id').delete(emojiController.deleteEmoji);

// Get story emoji by id
router.route('/:id').get(emojiController.getEmojiById);

// Get all list story emoji
router.route('/list').post(emojiController.getAllEmojiList);

module.exports = router;