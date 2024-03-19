const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");
const { story_reactions: storyReactionSchema } = require("../Database/Schema");

class storyReactionModel {

    // Add story reaction
    async addStoryReaction(bodyData) {
        return await storyReactionSchema.create(bodyData);
    }

    // Update story reaction
    async updateStoryReaction(bodyData) {

        // Check Exist story reaction Is Or Not
        let data = await storyReactionSchema.findOne({
            where: {
                id: bodyData?.id
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
            };
        }

        // Update story reaction
        return await storyReactionSchema.update(bodyData, {
            where: {
                id: bodyData?.id
            },
        });
    }

    // Delete story reaction
    async deleteStoryReaction(id) {

        // Check Exist story reaction Is Or Not
        let data = await storyReactionSchema.findOne({
            where: {
                id,
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
            };
        }

        // Delete story reaction
        return await storyReactionSchema.destroy({
            where: {
                id,
            },
        });
    }

    // Get story reaction By Id
    async getStoryReactionById(id) {

        // Check Exist story reaction Is Or Not
        let data = await storyReactionSchema.findOne({
            where: {
                id,
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
            };
        }

        // Return story reaction Data
        return data;
    }

    // Get All story reaction List
    async getAllStoryReactionList(bodyData) {
        return await storyReactionSchema.findAndCountAll();
    }
}

module.exports = storyReactionModel;
