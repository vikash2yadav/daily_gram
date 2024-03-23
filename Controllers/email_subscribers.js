const { STATUS_MESSAGES, STATUS_CODES } = require("../Config/constant");
const emailSubscriberModel = new (require("../models/email_subscribers"));

class emailSubscriberController {

    // Add email subscriber
    async addEmailSubscriber(req, res) {

        try {
            let data = await emailSubscriberModel.addEmailSubscriber(req?.body);

            if (data?.status === STATUS_CODES?.ALREADY_REPORTED) {
                res.handler.notFound(undefined, STATUS_MESSAGES?.EXISTS?.EMAIL_SUBSCRIBER);
                return;
            }

            res.handler.success(data, STATUS_MESSAGES?.EMAIL_SUBSCRIBER?.ADDED)

        } catch (error) {
            res.handler.serverError(error)
        }
    }

    // Update email subscriber
    async updateEmailSubscriber(req, res) {

        let data = await emailSubscriberModel.updateEmailSubscriber(req?.body);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.EMAIL_SUBSCRIBER);
            return;
        }

        if (data?.status === STATUS_CODES?.ALREADY_REPORTED) {
            res.handler.validationError(undefined, STATUS_MESSAGES?.EXISTS?.EMAIL_SUBSCRIBER);
            return;
        }

        res.handler.success(data, STATUS_MESSAGES?.EMAIL_SUBSCRIBER?.UPDATED)
    }

    // Delete email subscriber
    async deleteEmailSubscriber(req,res) {

        let data = await emailSubscriberModel.deleteEmailSubscriber(req?.params?.id);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.EMAIL_SUBSCRIBER);
            return;
        }

        res.handler.success(data, STATUS_MESSAGES?.EMAIL_SUBSCRIBER?.DELETED)
    }

    // Get email subscriber
    async getEmailSubscriberById(req, res) {

        let data = await emailSubscriberModel.getEmailSubscriberById(req?.params?.id);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.EMAIL_SUBSCRIBER);
            return;
        }

        res.handler.success(data)
    }

    // Get all list email subscriber
    async getAllEmailSubscriberList(req, res) {

        let data = await emailSubscriberModel.getAllEmailSubscriberList(req?.body);

        res.handler.success(data);
    }
}

module.exports = emailSubscriberController;