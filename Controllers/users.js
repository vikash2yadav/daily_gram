const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");
const userModel = new (require("../Models/users"))

class userController {

    // Add User
    async addUser(req, res) {

        try {
            let data = await userModel.addUser(req?.body);

            if (data?.status === STATUS_CODES?.ALREADY_REPORTED) {
                res.handler.validationError(undefined, data?.message);
                return;
            }

            if (data?.status === STATUS_CODES?.NOT_VALID_DATA) {
                res.handler.validationError(undefined, data?.message);
                return;
            }

            res.handler.success(data, STATUS_MESSAGES?.USER?.ADDED)

        } catch (error) {
            res.handler.serverError(error)
        }
    }

    // Update User
    async updateUser(req, res) {

        let data = await userModel.updateUser(req?.body);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.notFound(undefined, STATUS_MESSAGES?.NOT_FOUND?.USER);
            return;
        }

        if (data?.status === STATUS_CODES?.ALREADY_REPORTED) {
            res.handler.validationError(undefined, STATUS_MESSAGES?.EXISTS?.USERNAME_OR_EMAIL);
            return;
        }

        res.handler.success(data, STATUS_MESSAGES?.USER?.UPDATED)
    }

    // Delete User
    async deleteUser(req, res) {

        let data = await userModel.deleteUser(req?.params?.id);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.validationError(undefined, STATUS_MESSAGES?.NOT_FOUND?.USER);
            return;
        }

        res.handler.success(data, STATUS_MESSAGES?.USER?.DELETED)
    }

    // Get User By Id
    async getUserById(req, res) {

        let data = await userModel.getUserById(req?.params?.id);

        if (data?.status === STATUS_CODES?.NOT_FOUND) {
            res.handler.validationError(undefined, STATUS_MESSAGES?.NOT_FOUND?.USER);
            return;
        }

        res.handler.success(data)
    }

    // Get All User List
    async getAllUserList(req, res) {

        let data = await userModel.getAllUserList(req?.body);

        res.handler.success(data);
    }

    // Get All Active User List
    async getAllActiveUserList(req, res) {

        let data = await userModel.getAllActiveUserList();

        res.handler.success(data);
    }

    // Get All Deleted User List
    async getAllDeletedUserList(req, res) {

        let data = await userModel.getAllDeletedUserList();

        res.handler.success(data);
    }
}

module.exports = userController