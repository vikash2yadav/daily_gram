const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");
const { post_comments: postCommentSchema } = require("../Database/Schema");

class postCommentModel {

    // Add post comments
    async addPostComments(bodyData) {
        return await postCommentSchema.create(bodyData);
    }

    // Update post comments
    async updatePostComments(bodyData) {

        // Check Exist post comments Is Or Not
        let data = await postCommentSchema.findOne({
            where: {
                id: bodyData?.id
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
                message: STATUS_MESSAGES?.NOT_FOUND?.POST_COMMENT,
            };
        }

        // Update post comments
        return await postCommentSchema.update(bodyData, {
            where: {
                id: bodyData?.id
            },
        });
    }

    // Delete post comments
    async deletePostComments(id) {

        // Check Exist post comments Is Or Not
        let data = await postCommentSchema.findOne({
            where: {
                id,
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
                message: STATUS_MESSAGES?.NOT_FOUND?.POST_COMMENT,
            };
        }

        // Delete post comments
        return await postCommentSchema.destroy({
            where: {
                id,
            },
        });
    }

    // Get post comments By Id
    async getPostCommentsById(id) {

        // Check Exist post comments Is Or Not
        let data = await postCommentSchema.findOne({
            where: {
                id,
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
                message: STATUS_MESSAGES?.NOT_FOUND?.POST_COMMENT,
            };
        }

        // Return post comments Data
        return data;
    }

    // Get All post comments List
    async getAllPostCommentsList(bodyData) {
        return await postCommentSchema.findAndCountAll();
    }
}

module.exports = postCommentModel;
