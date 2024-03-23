const router = require('express').Router();
const emailSubscriberController = new(require('../Controllers/email_subscribers'));
const { body } = require('express-validator');
const { STATUS_MESSAGES } = require('../Config/constant');
const validate = (require('../Middleware/validator'))?.validate;

// Add email subscriber
router.route('/add').post(validate([body('email').notEmpty().withMessage(STATUS_MESSAGES?.VALIDATION?.REQUIRED?.EMAIL),
body('email').isEmail().withMessage(STATUS_MESSAGES?.VALIDATION?.REQUIRED?.INVALID_EMAIL),
]), emailSubscriberController.addEmailSubscriber);

// Update email subscriber
router.route('/update').put(validate([body('email').notEmpty().withMessage(STATUS_MESSAGES?.VALIDATION?.REQUIRED?.ACCOUNT_TYPE),
body('email').isEmail().withMessage(STATUS_MESSAGES?.VALIDATION?.REQUIRED?.INVALID_EMAIL),
]), emailSubscriberController.updateEmailSubscriber);

// Delete email subscriber
router.route('/delete/:id').delete(emailSubscriberController.deleteEmailSubscriber);

// Get email subscriber by id
router.route('/get/:id').get(emailSubscriberController.getEmailSubscriberById);

// Get all list email subscriber
router.route('/get/list').post(emailSubscriberController.getAllEmailSubscriberList);

module.exports = router;