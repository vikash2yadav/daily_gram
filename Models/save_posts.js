const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");
const { save_posts: savePostSchema } = require("../Database/Schema");

class savePostModel {

    // Add saved post 
    async addPostReports(bodyData) {
        return await savePostSchema.create(bodyData);
    }

    // Update saved post
    async updateSavePost(bodyData) {

        // Check Exist save post Is Or Not
        let data = await savePostSchema.findOne({
            where: {
                id: bodyData?.id
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND
            };
        }

        // Update save post 
        return await savePostSchema.update(bodyData, {
            where: {
                id: bodyData?.id
            },
        });
    }

    // Delete save post
    async deleteSavePost(id) {

        // Check Exist save post Is Or Not
        let data = await savePostSchema.findOne({
            where: {
                id,
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
                message: STATUS_MESSAGES?.NOT_FOUND?.SAVED_POST,
            };
        }

        // Delete save post
        return await savePostSchema.destroy({
            where: {
                id,
            },
        });
    }

    // Get saved post By Id
    async getPostReportsById(id) {

        // Check Exist saved post Is Or Not
        let data = await savePostSchema.findOne({
            where: {
                id,
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
            };
        }

        // Return save post Data
        return data;
    }

    // Get All save post List
    async getAllSavePostList(bodyData) {
        return await savePostSchema.findAndCountAll();
    }
}

module.exports = savePostModel;
