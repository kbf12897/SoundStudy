"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Comments",
            [
                {
                    userId: 1,
                    songId: 1,
                    commentBody:
                        "this song is too much of a banger to get work done",
                    commentOwner: 'Demo-lition',
                },
                {
                    userId: 1,
                    songId: 2,
                    commentBody: "made a whole web app listening to this song!",
                    commentOwner: 'Demo-lition',
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Comments", null, {});
    },
};
