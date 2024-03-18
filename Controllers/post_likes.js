const { STATUS_MESSAGES, STATUS_CODES } = require("../Config/constant");
const postLikeModel = new (require("../Models/post_likes"));

class postLikeController {

    // Add post like
    async addPostLike(req, res) {

        try {
            let data = await postLikeModel.addPostLike(req?.body);

            res.handler.success(data, STATUS_MESSAGES?.POST_LIKE?.ADDED)

        } catch (error) {
            res.handler.serverError(error)
        }
    }

    // Update post like
    async updatePostLike(req, res) {

        let data = await postLikeModel.updatePostLike(req?.body);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.POST_LIKE);
            return;
        }

        res.handler.success(data, STATUS_MESSAGES?.POST_LIKE?.UPDATED)
    }

    // Delete post like
    async deletePostLike(req,res) {

        let data = await postLikeModel.deletePostLike(req?.params?.id);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.POST_LIKE);
            return;
        }

        res.handler.success(data, STATUS_MESSAGES?.POST_LIKE?.DELETED)
    }

    // Get post like
    async getPostLikeById(req, res) {

        let data = await postLikeModel.getPostLikeById(req?.params?.id);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.POST_LIKE);
            return;
        }

        res.handler.success(data)
    }

    // Get all list post like
    async getAllPostLikeList(req, res) {

        let data = await postLikeModel.getAllPostLikeList(req?.body);

        res.handler.success(data);
    }
}

module.exports = postLikeController;