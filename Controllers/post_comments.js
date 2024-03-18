const { STATUS_MESSAGES, STATUS_CODES } = require("../Config/constant");
const postCommentModel = new (require("../Models/post_comments"));

class postCommentController {

    // Add post comments
    async addPostComments(req, res) {

        try {
            let data = await postCommentModel.addPostComments(req?.body);

            res.handler.success(data, STATUS_MESSAGES?.POST_COMMENT?.ADDED)

        } catch (error) {
            res.handler.serverError(error)
        }
    }

    // Update post comments
    async updatePostComments(req, res) {

        let data = await postCommentModel.updatePostComments(req?.body);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.POST_COMMENT);
            return;
        }

        res.handler.success(data, STATUS_MESSAGES?.POST_COMMENT?.UPDATED)
    }

    // Delete post comments
    async deletePostComments(req,res) {

        let data = await postCommentModel.deletePostComments(req?.params?.id);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.POST_COMMENT);
            return;
        }

        res.handler.success(data, STATUS_MESSAGES?.POST_COMMENT?.DELETED)
    }

    // Get post comments
    async getPostCommentsById(req, res) {

        let data = await postCommentModel.getPostCommentsById(req?.params?.id);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.POST_COMMENT);
            return;
        }

        res.handler.success(data)
    }

    // Get all list post comments
    async getAllPostCommentsList(req, res) {

        let data = await postCommentModel.getAllPostCommentsList(req?.body);

        res.handler.success(data);
    }
}

module.exports = postCommentController;