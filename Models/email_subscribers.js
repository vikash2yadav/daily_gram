const { Op } = require("sequelize");
const { STATUS_CODES, STATUS } = require("../Config/constant");
const { email_subscribers: emailSubscriberSchema } = require("../Database/Schema");

class emailSubscriberModel {

    // Add email subscriber
    async addEmailSubscriber(bodyData) {

        let data = await emailSubscriberSchema.findOne({
            where: {
                email: bodyData?.email
            }
        })

        if (data) {
            return {
                status: STATUS_CODES?.ALREADY_REPORTED
            }
        }

        // Create email subscriber
        return await emailSubscriberSchema.create(bodyData);
    }

    // Update email subscriber
    async updateEmailSubscriber(bodyData) {

        // Check Exist email subscriber Is Or Not
        let data = await emailSubscriberSchema.findOne({
            where: {
                id: bodyData?.id,
                is_delete: STATUS.NOTDELETED
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
                
            };
        }

        let checkEmail = await emailSubscriberSchema.findOne({
            where: {
                email: bodyData?.email,
                id: { [Op.ne]: bodyData?.id }
            }
        })

        if (checkEmail) {
            return {
                status: STATUS_CODES.ALREADY_REPORTED
            }
        }

        // Update email subscriber
        return await emailSubscriberSchema.update(bodyData, {
            where: {
                id: bodyData?.id
            },
        });
    }

    // Delete email subscriber
    async deleteEmailSubscriber(id) {

        // Check Exist email subscriber Is Or Not
        let data = await emailSubscriberSchema.findOne({
            where: {
                id,
                is_delete: STATUS.NOTDELETED
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
            };
        }

        // Delete email subscriber
        return await emailSubscriberSchema.update({is_delete: STATUS.DELETED}, {
            where: {
                id,
            },
        });
    }

    // Get email subscriber By Id
    async getEmailSubscriberById(id) {

        // Check Exist email subscriber Is Or Not
        let data = await emailSubscriberSchema.findOne({
            where: {
                id,
                is_delete: STATUS.NOTDELETED
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
            };
        }

        // Return email subscriber Data
        return data;
    }

    // Get All email subscriber List
    async getAllEmailSubscriberList(bodyData) {
        return await emailSubscriberSchema.findAndCountAll({
            where: {
                is_delete: STATUS.NOTDELETED
            }
        });
    }
}

module.exports = emailSubscriberModel;
