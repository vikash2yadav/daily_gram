const { STATUS_MESSAGES, STATUS_CODES } = require("../Config/constant");
const postCommentReportModel = new (require("../Models/post_comment_reports"));

class postCommentReportController {

    // Add post comment reports
    async addPostCommentReports(req, res) {

        try {
            let data = await postCommentReportModel.addPostCommentReports(req?.body);

            res.handler.success(data, STATUS_MESSAGES?.POST_REPORT?.ADDED)

        } catch (error) {
            res.handler.serverError(error)
        }
    }

    // Update post comment reports
    async updatePostCommentReports(req, res) {

        let data = await postCommentReportModel.updatePostCommentReports(req?.body);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.POST_REPORT);
            return;
        }

        res.handler.success(data, STATUS_MESSAGES?.POST_REPORT?.UPDATED)
    }

    // Delete post comment reports
    async deletePostCommentReports(req,res) {

        let data = await postCommentReportModel.deletePostCommentReports(req?.params?.id);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.POST_REPORT);
            return;
        }

        res.handler.success(data, STATUS_MESSAGES?.POST_REPORT?.DELETED)
    }

    // Get post comment reports
    async getPostCommentReportsById(req, res) {

        let data = await postCommentReportModel.getPostCommentReportsById(req?.params?.id);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.POST_REPORT);
            return;
        }

        res.handler.success(data)
    }

    // Get all list post comment reports
    async getAllPostCommentReportsList(req, res) {

        let data = await postCommentReportModel.getAllPostCommentReportsList(req?.body);

        res.handler.success(data);
    }
}

module.exports = postCommentReportController;