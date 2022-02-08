"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Songs",
            [
                {
                    userId: 1,
                    playlistId: 1,
                    url: "fsm-team-escp-elevator-decorator.mp3",
                    title: "Elavator Decorator",
                },
                {
                    userId: 1,
                    playlistId: 1,
                    url: "purrple-cat-a-place-to-hide.mp3",
                    title: "Place to Hide",
                },
                {
                    userId: 1,
                    playlistId: 1,
                    url: "ron-gelinas-chillout-lounge-cleansing-rain.mp3",
                    title: "Place to Hide",
                },
                {
                    userId: 1,
                    playlistId: 1,
                    url: "popoi-east-side-manhattan.mp3",
                    title: "East Side Manhattan",
                },
                {
                    userId: 1,
                    playlistId: 1,
                    url: "vlad-gluschenko-peace.mp3",
                    title: "Peace",
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Songs", null, {});
    },
};
