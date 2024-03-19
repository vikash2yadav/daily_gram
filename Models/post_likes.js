const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");
const { post_likes: postLikeSchema } = require("../Database/Schema");

class postLikeModel {

    // Add post like
    async addPostLike(userInfo, bodyData) {
        
        bodyData.user_id = userInfo?.id;
        return await postLikeSchema.create(bodyData);
    }

    // Update post like
    async updatePostLike(bodyData) {

        // Check Exist post like Is Or Not
        let data = await postLikeSchema.findOne({
            where: {
                id: bodyData?.id
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
            };
        }

        // Update post like
        return await postLikeSchema.update(bodyData, {
            where: {
                id: bodyData?.id
            },
        });
    }

    // Delete post like
    async deletePostLike(id) {

        // Check Exist post like Is Or Not
        let data = await postLikeSchema.findOne({
            where: {
                id,
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
            };
        }

        // Delete post like
        return await postLikeSchema.destroy({
            where: {
                id,
            },
        });
    }

    // Get post like By Id
    async getPostLikeById(id) {

        // Check Exist post like Is Or Not
        let data = await postLikeSchema.findOne({
            where: {
                id,
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
            };
        }

        // Return post like Data
        return data;
    }

    // Get All post like List
    async getAllPostLikeList(bodyData) {
        return await postLikeSchema.findAndCountAll();
    }
}

module.exports = postLikeModel;
