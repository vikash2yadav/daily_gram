const router = require('express').Router();
const postCommentReportController = new(require('../Controllers/post_comment_reports'));

// Add post Comment reports
router.route('/add').post(postCommentReportController.addPostCommentReports);

// Update post Comment reports
router.route('/update').put(postCommentReportController.updatePostCommentReports);

// Delete post Comment reports
router.route('/delete/:id').delete(postCommentReportController.deletePostCommentReports);

// Get post Comment reports by id
router.route('/:id').get(postCommentReportController.getPostCommentReportsById);

// Get all list post Comment reports
router.route('/list').post(postCommentReportController.getAllPostCommentReportsList);

module.exports = router;