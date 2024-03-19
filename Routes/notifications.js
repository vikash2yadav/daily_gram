const router = require('express').Router();
const notificationController = new (require('../Controllers/notifications'));
const { body } = require('express-validator');
const { STATUS_MESSAGES } = require('../Config/constant');
const validate = (require('../Middleware/validator'))?.validate;

// Add notification
router.route('/add').post(validate([
    body('description').notEmpty().withMessage(STATUS_MESSAGES?.VALIDATION?.REQUIRED?.DESCRIPTION),
    body('user_id').notEmpty().withMessage(STATUS_MESSAGES?.VALIDATION?.REQUIRED?.USER),
]), notificationController.addNotification);

// Update notification
router.route('/update').put(validate([
    body('description').notEmpty().withMessage(STATUS_MESSAGES?.VALIDATION?.REQUIRED?.DESCRIPTION),
    body('user_id').notEmpty().withMessage(STATUS_MESSAGES?.VALIDATION?.REQUIRED?.USER),
]), notificationController.updateNotification);

// Delete notification
router.route('/delete/:id').delete(notificationController.deleteNotification);

// Get notification by id
router.route('/get/:id').get(notificationController.getNotificationById);

// Get all list notification
router.route('/get/list').post(notificationController.getAllNotificationList);

module.exports = router;