const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");
const { post_comment_reports: postCommentReportSchema } = require("../Database/Schema");

class postCommentReportModel {

    // Add post comment reports
    async addPostCommentReports(bodyData) {
        return await postCommentReportSchema.create(bodyData);
    }

    // Update post comment reports
    async updatePostCommentReports(bodyData) {

        // Check Exist post comment reports Is Or Not
        let data = await postCommentReportSchema.findOne({
            where: {
                id: bodyData?.id
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
                message: STATUS_MESSAGES?.NOT_FOUND?.POST_REPORT,
            };
        }

        // Update post comment reports
        return await postCommentReportSchema.update(bodyData, {
            where: {
                id: bodyData?.id
            },
        });
    }

    // Delete post comment reports
    async deletePostCommentReports(id) {

        // Check Exist post comment reports Is Or Not
        let data = await postCommentReportSchema.findOne({
            where: {
                id,
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
                message: STATUS_MESSAGES?.NOT_FOUND?.POST_REPORT,
            };
        }

        // Delete post comment reports
        return await postCommentReportSchema.destroy({
            where: {
                id,
            },
        });
    }

    // Get post comment reports By Id
    async getPostCommentReportsById(id) {

        // Check Exist post comment reports Is Or Not
        let data = await postCommentReportSchema.findOne({
            where: {
                id,
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
                message: STATUS_MESSAGES?.NOT_FOUND?.POST_REPORT,
            };
        }

        // Return post comment reports Data
        return data;
    }

    // Get All post comment reports List
    async getAllPostCommentReportsList(bodyData) {
        return await postCommentReportSchema.findAndCountAll();
    }
}

module.exports = postCommentReportModel;
