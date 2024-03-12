const { users: userSchema } = require("../Database/Schema")
const { STATUS_CODES, STATUS_MESSAGES, STATUS, IMG_FOLDER_NAME } = require('../Config/constant');
const  bcrypt  = require('bcrypt');
const { Op } = require("sequelize");
const file_manager = new (require("../Utils/file_manager"))
const { unlinkRemoveFile } = require("../Utils/helpers");

class userModel {

    // Add User
    async addUser(bodyData) {

        // Check Exist Email Address
        let existEmail = await userSchema.findOne({
            where: {
                email: bodyData?.email
            }
        });

        if (existEmail) {
            return {
                status: STATUS_CODES?.ALREADY_REPORTED,
                message: STATUS_MESSAGES?.EXISTS?.EMAIL_ALREADY_EXISTS
            }
        }

        // Check Exist Username 
        let existUserName = await userSchema.findOne({
            where: {
                username: bodyData?.username
            }
        });

        if (existUserName) {
            return {
                status: STATUS_CODES?.ALREADY_REPORTED,
                message: STATUS_MESSAGES?.EXISTS?.USERNAME
            }
        }

        // Check Password And Confirm Password 
        if (bodyData?.password !== bodyData?.confirm_password) {
            return {
                status: STATUS_CODES?.NOT_VALID_DATA,
                message: STATUS_MESSAGES?.PASSWORD?.NOT_SAME,
            };
        }

        // Hashing Password 
        bodyData.password = await bcrypt.hash(bodyData?.password, 10);

        // Profile Upload
        if (bodyData?.profile_image && typeof bodyData?.profile_image === "object") {
            let imageUrl = file_manager.createLiveImageURL(bodyData?.profile_image, IMG_FOLDER_NAME.USER_PROFILE, 'single');
            bodyData.profile_image = imageUrl;
        }

        // Cover Image Upload
        if (bodyData?.cover_image && typeof bodyData?.cover_image === "object") {
            let coverUrl = file_manager.createLiveImageURL(bodyData?.cover_image, IMG_FOLDER_NAME.COVER_PROFILE, 'single');
            bodyData.cover_image = coverUrl;
        }

        // Create User
        return await userSchema.create(bodyData);
    }

    // Update User
    async updateUser(bodyData) {

        // Check User Is Exist Or Not
        let checkUser = await userSchema.findOne({
            where: {
                id: bodyData?.id,
                is_delete: STATUS?.NOTDELETED
            }
        });

        if (!checkUser) {
            return {
                status: STATUS_CODES?.NOT_FOUND
            }
        }

        // Check Username Or Email
        let ExistUser = await userSchema.findOne({
            where: {
                id: { [Op.ne]: bodyData?.id },
                [SEQUELIZE.Op.or]: [
                    { email: bodyData?.email },
                    { username: bodyData?.username }
                ]
            }
        });

        if (ExistUser) {
            return {
                status: STATUS_CODES?.ALREADY_REPORTED
            }
        }

         // Unlink and upload new profile image
         if (bodyData?.profile_image && typeof bodyData?.profile_image === "object") {
            if (checkUser?.profile_image !== null) {
                unlinkRemoveFile(IMG_FOLDER_NAME?.USER_PROFILE, checkUser?.profile_image)
            }
            let imageUrl = file_manager.createLiveImageURL(bodyData?.profile_image, IMG_FOLDER_NAME?.USER_PROFILE, 'single');
            bodyData.profile_image = imageUrl;
        }

        // Unlink and upload new cover profile img
        if (bodyData?.cover_image && typeof bodyData?.cover_image === "object") {
            if (checkUser?.cover_image !== null) {
                unlinkRemoveFile(IMG_FOLDER_NAME?.COVER_PROFILE, checkUser?.cover_image)
            }
            let logoUrl = file_manager.createLiveImageURL(bodyData?.cover_image, IMG_FOLDER_NAME?.COVER_PROFILE, 'single');
            bodyData.cover_image = logoUrl;
        }

        // Update User  
        let updatedUserData = await userSchema.update(bodyData, {
            where: {
                id: bodyData?.id
            }
        })

        // Return Updated User
        if (updatedUserData) {
            return await this.getUserById(bodyData?.id);
        }

    }

    // Delete User
    async deleteUser(id) {

        // Check Exist User Is Or Not
        let data = await userSchema.findOne({
            where: {
                id,
                is_delete: STATUS?.NOTDELETED
            }
        })

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
                message: STATUS_MESSAGES?.USER
            }
        }

        // Delete User
        return await userSchema.update({ is_delete: STATUS?.DELETED },
            {
                where: {
                    id
                }
            }
        )
    }

    // Get User By Id
    async getUserById(id) {

        // Check Exist User Is Or Not
        let data = await userSchema.findOne({
            where: {
                id: id,
                is_delete: STATUS?.NOTDELETED
            }
        })

        if (!data) {
            return {
                status: STATUS_CODES?.NOT_FOUND,
                message: STATUS_MESSAGES?.USER
            }
        }

        // Return User Data
        return data;
    }

    // Get All User List
    async getAllUserList(bodyData) {

        return await userSchema.findAndCountAll({
            where: {
                is_delete: STATUS?.NOTDELETED
            }
        })

    }

    // Get All Active User List
    async getAllActiveUserList() {

        return await userSchema.findAndCountAll({
            where: {
                [SEQUELIZE.Op.or]: [
                    { status: STATUS?.ACTIVE },
                    { is_delete: STATUS?.NOTDELETED }
                ]
            }
        })
    }

    // Get All Deleted User List
    async getAllDeletedUserList() {

        return await userSchema.findAndCountAll({
            where: {
                is_delete: STATUS?.DELETED
            }
        })
    }
}

module.exports = userModel