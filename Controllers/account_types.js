const { STATUS_MESSAGES, STATUS_CODES } = require("../Config/constant");
const accountTypeModel = new (require("../Models/account_types"));

class accountTypeController {

    // Add account type
    async addAccountType(req, res) {

        try {
            let data = await accountTypeModel.addAccountType(req?.body);

            if (data?.status === STATUS_CODES?.ALREADY_REPORTED) {
                res.handler.notFound(undefined, STATUS_MESSAGES?.EXISTS?.ACCOUNT_TYPE);
                return;
            }

            res.handler.success(data, STATUS_MESSAGES?.ACCOUNT_TYPE?.ADDED)

        } catch (error) {
            res.handler.serverError(error)
        }
    }

    // Update account type
    async updateAccountType(req, res) {

        let data = await accountTypeModel.updateAccountType(req?.body);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.ACCOUNT_TYPE);
            return;
        }

        if (data?.status === STATUS_CODES?.ALREADY_REPORTED) {
            res.handler.validationError(undefined, STATUS_MESSAGES?.EXISTS?.ACCOUNT_TYPE);
            return;
        }

        res.handler.success(data, STATUS_MESSAGES?.ACCOUNT_TYPE?.UPDATED)
    }

    // Delete account type
    async deleteAccountType(req,res) {

        let data = await accountTypeModel.deleteAccountType(req?.params?.id);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.ACCOUNT_TYPE);
            return;
        }

        res.handler.success(data, STATUS_MESSAGES?.ACCOUNT_TYPE?.DELETED)
    }

    // Get account type
    async getAccountTypeById(req, res) {

        let data = await accountTypeModel.getAccountTypeById(req?.params?.id);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.ACCOUNT_TYPE);
            return;
        }

        res.handler.success(data)
    }

    // Get all list account type
    async getAllAccountTypeList(req, res) {

        let data = await accountTypeModel.getAllAccountTypeList(req?.body);

        res.handler.success(data);
    }
}

module.exports = accountTypeController;