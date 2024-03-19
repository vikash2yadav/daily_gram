const router = require('express').Router();
const accountTypeController = new(require('../Controllers/account_types'));
const { body } = require('express-validator');
const { STATUS_MESSAGES } = require('../Config/constant');
const validate = (require('../Middleware/validator'))?.validate;

// Add account type
router.route('/add').post(validate([body('type').notEmpty().withMessage(STATUS_MESSAGES?.VALIDATION?.REQUIRED?.ACCOUNT_TYPE),
]), accountTypeController.addAccountType);

// Update account type
router.route('/update').put(validate([body('type').notEmpty().withMessage(STATUS_MESSAGES?.VALIDATION?.REQUIRED?.ACCOUNT_TYPE),
]), accountTypeController.updateAccountType);

// Delete account type
router.route('/delete/:id').delete(accountTypeController.deleteAccountType);

// Get account type by id
router.route('/get/:id').get(accountTypeController.getAccountTypeById);

// Get all list account type
router.route('/get/list').post(accountTypeController.getAllAccountTypeList);

module.exports = router;