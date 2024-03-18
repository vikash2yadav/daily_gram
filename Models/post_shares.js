const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");
const { post_shares: postShareSchema } = require("../Database/Schema");

class postShareModel {

    // Add post share
    async addPostShare(bodyData) {
        return await postShareSchema.create(bodyData);
    }

    // Delete post share
    async deletePostShare(id) {

        // Check Exist post share Is Or Not
        let data = await postShareSchema.findOne({
            where: {
                id,
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
            };
        }

        // Delete post share
        return await postShareSchema.destroy({
            where: {
                id,
            },
        });
    }

    // Get post share By Id
    async getPostShareById(id) {

        // Check Exist post share Is Or Not
        let data = await postShareSchema.findOne({
            where: {
                id,
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
            };
        }

        // Return post share Data
        return data;
    }

    // Get All post share List
    async getAllPostShareList(bodyData) {
        return await postShareSchema.findAndCountAll();
    }
}

module.exports = postShareModel;
