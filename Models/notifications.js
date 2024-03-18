const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");
const { notifications: notificationSchema } = require("../Database/Schema");

class notificationModel {

    // Add notification
    async addNotification(bodyData) {

        let data = await notificationSchema.findOne({
            where: {
                type: bodyData?.type
            }
        })

        if (data) {
            return {
                status: STATUS_CODES?.ALREADY_REPORTED
            }
        }

        // Create notification
        return await notificationSchema.create(bodyData);
    }

    // Update notification
    async updateNotification(bodyData) {

        // Check Exist notification Is Or Not
        let data = await notificationSchema.findOne({
            where: {
                id: bodyData?.id
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
            };
        }

        // Update notification
        return await notificationSchema.update(bodyData, {
            where: {
                id: bodyData?.id
            },
        });
    }

    // Delete notification
    async deleteNotification(id) {

        // Check Exist notification Is Or Not
        let data = await notificationSchema.findOne({
            where: {
                id,
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
            };
        }

        // Delete notification
        return await notificationSchema.destroy({
            where: {
                id,
            },
        });
    }

    // Get notification By Id
    async getNotificationById(id) {

        // Check Exist notification Is Or Not
        let data = await notificationSchema.findOne({
            where: {
                id,
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
            };
        }

        // Return notification Data
        return data;
    }

    // Get All notification List
    async getAllNotificationList(bodyData) {
        return await notificationSchema.findAndCountAll();
    }
}

module.exports = notificationModel;
