const { STATUS_MESSAGES, STATUS_CODES } = require("../Config/constant");
const emojiModel = new (require("../Models/story_emojis"));

class emojiController {

    // Add emoji
    async addEmoji(req, res) {

        try {
            let data = await emojiModel.addEmoji(req?.body);

            res.handler.success(data, STATUS_MESSAGES?.EMOJI?.ADDED)

        } catch (error) {
            res.handler.serverError(error)
        }
    }

    // Update emoji
    async updateEmoji(req, res) {

        let data = await emojiModel.updateEmoji(req?.body);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.EMOJI);
            return;
        }

        res.handler.success(data, STATUS_MESSAGES?.EMOJI?.UPDATED)
    }

    // Delete emoji
    async deleteEmoji(req,res) {

        let data = await emojiModel.deleteEmoji(req?.params?.id);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.EMOJI);
            return;
        }

        res.handler.success(data, STATUS_MESSAGES?.EMOJI?.DELETED)
    }

    // Get emoji
    async getEmojiById(req, res) {

        let data = await emojiModel.getEmojiById(req?.params?.id);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.EMOJI);
            return;
        }

        res.handler.success(data)
    }

    // Get all emoji list 
    async getAllEmojiList(req, res) {

        let data = await emojiModel.getAllEmojiList(req?.body);

        res.handler.success(data);
    }
}

module.exports = emojiController;