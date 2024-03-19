const { STATUS_MESSAGES, STATUS_CODES } = require("../Config/constant");
const storyReactionModel = new (require("../Models/story_reactions"));

class storyReactionController {

    // Add reaction
    async addStoryReaction(req, res) {

        try {
            let data = await storyReactionModel.addStoryReaction(req?.body);

            res.handler.success(data, STATUS_MESSAGES?.REACTION?.ADDED)

        } catch (error) {
            res.handler.serverError(error)
        }
    }

    // Update reaction
    async updateStoryReaction(req, res) {

        let data = await storyReactionModel.updateStoryReaction(req?.body);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.REACTION);
            return;
        }

        res.handler.success(data, STATUS_MESSAGES?.REACTION?.UPDATED)
    }

    // Delete reaction
    async deleteStoryReaction(req,res) {

        let data = await storyReactionModel.deleteStoryReaction(req?.params?.id);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.REACTION);
            return;
        }

        res.handler.success(data, STATUS_MESSAGES?.REACTION?.DELETED)
    }

    // Get reaction
    async getStoryReactionById(req, res) {

        let data = await storyReactionModel.getStoryReactionById(req?.params?.id);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.REACTION);
            return;
        }

        res.handler.success(data)
    }

    // Get all reaction list 
    async getAllStoryReactionList(req, res) {

        let data = await storyReactionModel.getAllStoryReactionList(req?.body);

        res.handler.success(data);
    }
}

module.exports = storyReactionController;