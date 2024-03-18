const { STATUS_MESSAGES, STATUS_CODES } = require("../Config/constant");
const postShareModel = new (require("../Models/post_shares"));

class postShareController {

    // Add post shares
    async addPostShares(req, res) {

        try {
            let data = await postShareModel.addPostShares(req?.body);

            res.handler.success(data, STATUS_MESSAGES?.POST_SHARE?.ADDED)

        } catch (error) {
            res.handler.serverError(error)
        }
    }

    // Delete post Shares
    async deletePostShares(req,res) {

        let data = await postShareModel.deletePostShares(req?.params?.id);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.POST_SHARE);
            return;
        }

        res.handler.success(data, STATUS_MESSAGES?.POST_SHARE?.REMOVED)
    }

    // Get post Shares
    async getPostSharesById(req, res) {

        let data = await postShareModel.getPostSharesById(req?.params?.id);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.POST_SHARE);
            return;
        }

        res.handler.success(data)
    }

    // Get all list post Shares
    async getAllPostSharesList(req, res) {

        let data = await postShareModel.getAllPostSharesList(req?.body);

        res.handler.success(data);
    }
}

module.exports = postShareController;