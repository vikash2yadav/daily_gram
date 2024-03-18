const router = require('express').Router();
const emojiController = new(require('../Controllers/emojis'));

// Add emoji
router.route('/add').post(emojiController.addEmoji);

// Update emoji
router.route('/update').put(emojiController.updateEmoji);

// Delete emoji
router.route('/delete/:id').delete(emojiController.deleteEmoji);

// Get emoji by id
router.route('/:id').get(emojiController.getEmojiById);

// Get all list emoji
router.route('/list').post(emojiController.getAllEmojiList);

module.exports = router;