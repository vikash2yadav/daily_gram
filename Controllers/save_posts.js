const { STATUS_MESSAGES, STATUS_CODES } = require("../Config/constant");
const savePostModel = new (require("../Models/save_posts"));

class savePostController {

    // Add saved post 
    async addSavePost(req, res) {

        try {
            let data = await savePostModel.addSavePost(req?.body);

            res.handler.success(data, STATUS_MESSAGES?.SAVED_POST?.ADDED)

        } catch (error) {
            res.handler.serverError(error)
        }
    }

    // Update saved post 
    async updateSavePost(req, res) {

        let data = await savePostModel.updateSavePost(req?.body);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.SAVED_POST);
            return;
        }

        res.handler.success(data, STATUS_MESSAGES?.SAVED_POST?.UPDATED)
    }

    // Delete saved post 
    async deleteSavePost(req,res) {

        let data = await savePostModel.deleteSavePost(req?.params?.id);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.SAVED_POST);
            return;
        }

        res.handler.success(data, STATUS_MESSAGES?.SAVED_POST?.REMOVED)
    }

    // Get saved post 
    async getSavePostById(req, res) {

        let data = await savePostModel.getSavePostById(req?.params?.id);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.SAVED_POST);
            return;
        }

        res.handler.success(data)
    }

    // Get all list saved post 
    async getAllSavePostList(req, res) {

        let data = await savePostModel.getAllSavePostList(req?.body);

        res.handler.success(data);
    }
}

module.exports = savePostController;