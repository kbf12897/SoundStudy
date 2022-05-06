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
                    profileImg: 'https://www.tubefilter.com/wp-content/uploads/2022/03/lofi-girl-college-scholarships-1400x825.jpg',
                },
                {
                    username: "lofiGuy",
                    email: "lofiGuy@lofi.com",
                    hashedPassword: bcrypt.hashSync("password"),
                    profileImg: 'https://i.ytimg.com/vi/8RPCP77xPak/maxresdefault.jpg'
                },
                {
                    username: "lofiMaker",
                    email: "lofiMaker@lofi.com",
                    hashedPassword: bcrypt.hashSync("password"),
                    profileImg: 'https://snworksceo.imgix.net/tsn/fde0889d-4c5c-4e32-b12d-4edd009adda9.sized-1000x1000.png?w=1000'
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Users", null, {});
    },
};
