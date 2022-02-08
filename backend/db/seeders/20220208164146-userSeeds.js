"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Users",
            [
                {
                    username: "lofiGirl",
                    email: "lofiGirl@lofi.com",
                    hashedPassword: bcrypt.hashSync("password"),
                },
                {
                    username: "lofiGuy",
                    email: "lofiGuy@lofi.com",
                    hashedPassword: bcrypt.hashSync("password"),
                },
                {
                    username: "lofiMaker",
                    email: "lofiMaker@lofi.com",
                    hashedPassword: bcrypt.hashSync("password"),
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Users", null, {});
    },
};
