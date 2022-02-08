"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Playlists",
            [
                {
                    userId: 1,
                    title: "MyPlaylist",
                    imageUrl:
                        "https://i1.sndcdn.com/artworks-000555002412-054ojp-t500x500.jpg",
                },
                {
                    userId: 2,
                    title: "MyPlaylist",
                    imageUrl:
                        "https://i1.sndcdn.com/artworks-000555002412-054ojp-t500x500.jpg",
                },
                {
                    userId: 3,
                    title: "MyPlaylist",
                    imageUrl:
                        "https://i1.sndcdn.com/artworks-000555002412-054ojp-t500x500.jpg",
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Playlists", null, {});
    },
};
