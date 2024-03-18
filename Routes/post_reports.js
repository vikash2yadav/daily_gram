const router = require('express').Router();
const postReportController = new(require('../Controllers/post_reports'));

// Add post reports
router.route('/add').post(postReportController.addPostReports);

// Update post reports
router.route('/update').put(postReportController.updatePostReports);

// Delete post reports
router.route('/delete/:id').delete(postReportController.deletePostReports);

// Get post reports by id
router.route('/:id').get(postReportController.getPostReportsById);

// Get all list post reports
router.route('/list').post(postReportController.getAllPostReportsList);

module.exports = router;