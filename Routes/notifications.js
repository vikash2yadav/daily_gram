const router = require('express').Router();
const notificationController = new(require('../Controllers/notifications'));

// Add notification
router.route('/add').post(notificationController.addNotification);

// Update notification
router.route('/update').put(notificationController.updateNotification);

// Delete notification
router.route('/delete/:id').delete(notificationController.deleteNotification);

// Get notification by id
router.route('/:id').get(notificationController.getNotificationById);

// Get all list notification
router.route('/list').post(notificationController.getAllNotificationList);

module.exports = router;