const { STATUS_MESSAGES, STATUS_CODES } = require("../Config/constant");
const postReportModel = new (require("../Models/post_reports"));

class postReportController {

    // Add post reports
    async addPostReports(req, res) {

        try {
            let data = await postReportModel.addPostReports(req?.body);

            res.handler.success(data, STATUS_MESSAGES?.POST_REPORT?.ADDED)

        } catch (error) {
            res.handler.serverError(error)
        }
    }

    // Update post reports
    async updatePostReports(req, res) {

        let data = await postReportModel.updatePostReports(req?.body);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.POST_REPORT);
            return;
        }

        res.handler.success(data, STATUS_MESSAGES?.POST_REPORT?.UPDATED)
    }

    // Delete post reports
    async deletePostReports(req,res) {

        let data = await postReportModel.deletePostReports(req?.params?.id);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.POST_REPORT);
            return;
        }

        res.handler.success(data, STATUS_MESSAGES?.POST_REPORT?.DELETED)
    }

    // Get post reports
    async getPostReportsById(req, res) {

        let data = await postReportModel.getPostReportsById(req?.params?.id);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.POST_REPORT);
            return;
        }

        res.handler.success(data)
    }

    // Get all list post reports
    async getAllPostReportsList(req, res) {

        let data = await postReportModel.getAllPostReportsList(req?.body);

        res.handler.success(data);
    }
}

module.exports = postReportController;