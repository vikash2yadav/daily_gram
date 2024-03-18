const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");
const { post_reports: postReportSchema } = require("../Database/Schema");

class postReportModel {

    // Add post reports
    async addPostReports(bodyData) {
        return await postReportSchema.create(bodyData);
    }

    // Update post reports
    async updatePostReports(bodyData) {

        // Check Exist post reports Is Or Not
        let data = await postReportSchema.findOne({
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

        // Update post reports
        return await postReportSchema.update(bodyData, {
            where: {
                id: bodyData?.id
            },
        });
    }

    // Delete post reports
    async deletePostReports(id) {

        // Check Exist post reports Is Or Not
        let data = await postReportSchema.findOne({
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

        // Delete post reports
        return await postReportSchema.destroy({
            where: {
                id,
            },
        });
    }

    // Get post reports By Id
    async getPostReportsById(id) {

        // Check Exist post reports Is Or Not
        let data = await postReportSchema.findOne({
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

        // Return post reports Data
        return data;
    }

    // Get All post reports List
    async getAllPostReportsList(bodyData) {
        return await postReportSchema.findAndCountAll();
    }
}

module.exports = postReportModel;
