const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");
const { account_types: accountTypeSchema } = require("../Database/Schema");

class accountTypeModel {

    // Add account type
    async addAccountType(bodyData) {

        let data = await accountTypeSchema.findOne({
            where: {
                type: bodyData?.type
            }
        })

        if (data) {
            return {
                status: STATUS_CODES?.ALREADY_REPORTED
            }
        }

        // Create account type
        return await accountTypeSchema.create(bodyData);
    }

    // Update account type
    async updateAccountType(bodyData) {

        // Check Exist Account Type Is Or Not
        let data = await accountTypeSchema.findOne({
            where: {
                id: bodyData?.id
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
                
            };
        }

        let checkType = await accountTypeSchema.findOne({
            where: {
                type: bodyData?.type,
                id: { [Op.ne]: bodyData?.id }
            }
        })

        if (checkType) {
            return {
                status: STATUS_CODES.ALREADY_REPORTED,
            }
        }

        // Update Account Type
        return await accountTypeSchema.update(bodyData, {
            where: {
                id: bodyData?.id
            },
        });
    }

    // Delete account type
    async deleteAccountType(id) {

        // Check Exist Account Type Is Or Not
        let data = await accountTypeSchema.findOne({
            where: {
                id,
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
            };
        }

        // Delete account Type
        return await accountTypeSchema.destroy({
            where: {
                id,
            },
        });
    }

    // Get account Type By Id
    async getAccountTypeById(id) {

        // Check Exist account Type Is Or Not
        let data = await accountTypeSchema.findOne({
            where: {
                id,
            },
        });

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
            };
        }

        // Return account Type Data
        return data;
    }

    // Get All account Type List
    async getAllAccountTypeList(bodyData) {
        return await accountTypeSchema.findAndCountAll();
    }
}

module.exports = accountTypeModel;
