const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");
const { story_emojis: emojiSchema } = require("../Database/Schema");

class emojiModel {

    // Add emoji
    async addEmoji(bodyData) {
        // Create emoji
        return await emojiSchema.create(bodyData);
    }

    // Update emoji
    async updateEmoji(bodyData) {

        // Check Exist emoji Is Or Not
        let data = await emojiSchema.findOne({
            where: {
                id: bodyData?.id
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
            };
        }

        // Update emoji
        return await emojiSchema.update(bodyData, {
            where: {
                id: bodyData?.id
            },
        });
    }

    // Delete emoji
    async deleteEmoji(id) {

        // Check Exist emoji Is Or Not
        let data = await emojiSchema.findOne({
            where: {
                id,
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
            };
        }

        // Delete emoji
        return await emojiSchema.destroy({
            where: {
                id,
            },
        });
    }

    // Get emoji By Id
    async getEmojiById(id) {

        // Check Exist emoji Is Or Not
        let data = await emojiSchema.findOne({
            where: {
                id,
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
            };
        }

        // Return emoji Data
        return data;
    }

    // Get All emoji List
    async getAllEmojiList(bodyData) {
        return await emojiSchema.findAndCountAll();
    }
}

module.exports = emojiModel;
