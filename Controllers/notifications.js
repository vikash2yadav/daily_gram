const { STATUS_MESSAGES, STATUS_CODES } = require("../Config/constant");
const notificationModel = new (require("../Models/notifications"));

class notificationController {

    // Add notification
    async addNotification(req, res) {

        try {
            let data = await notificationModel.addNotification(req?.body);

            res.handler.success(data, STATUS_MESSAGES?.NOTIFICATION?.ADDED)

        } catch (error) {
            res.handler.serverError(error)
        }
    }

    // Update notification
    async updateNotification(req, res) {

        let data = await notificationModel.updateNotification(req?.body);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.NOTIFICATION);
            return;
        }

        res.handler.success(data, STATUS_MESSAGES?.NOTIFICATION?.UPDATED)
    }

    // Delete notification
    async deleteNotification(req,res) {

        let data = await notificationModel.deleteNotification(req?.params?.id);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.NOTIFICATION);
            return;
        }

        res.handler.success(data, STATUS_MESSAGES?.NOTIFICATION?.DELETED)
    }

    // Get notification
    async getNotificationById(req, res) {

        let data = await notificationModel.getNotificationById(req?.params?.id);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.NOTIFICATION);
            return;
        }

        res.handler.success(data)
    }

    // Get all list notification
    async getAllNotificationList(req, res) {

        let data = await notificationModel.getAllNotificationList(req?.body);

        res.handler.success(data);
    }
}

module.exports = notificationController;