"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Songs",
            [
                {
                    userId: 1,
                    playlistId: 1,
                    imgUrl: 'https://m.media-amazon.com/images/I/91swCZtQiaS._SS500_.jpg',
                    url: "fsm-team-escp-elevator-decorator.mp3",
                    title: "Elavator Decorator",
                },
                {
                    userId: 1,
                    playlistId: 1,
                    imgUrl: 'https://snworksceo.imgix.net/dpn-34s/f64e88d6-5d0f-4258-853d-fa33c4e3d64a.sized-1000x1000.jpg?w=1000',
                    url: "purrple-cat-a-place-to-hide.mp3",
                    title: "Place to Hide",
                },
                {
                    userId: 1,
                    playlistId: 1,
                    imgUrl: '',
                    url: "ron-gelinas-chillout-lounge-cleansing-rain.mp3",
                    title: "Place to Hide",
                },
                {
                    userId: 1,
                    playlistId: 1,
                    imgUrl: 'https://m.media-amazon.com/images/I/71U4mzMCGSL._SS500_.jpg',
                    url: "popoi-east-side-manhattan.mp3",
                    title: "East Side Manhattan",
                },
                {
                    userId: 1,
                    playlistId: 1,
                    imgUrl: 'https://cdn.vox-cdn.com/thumbor/rjThKiz00LOkB2tPLumkiZvbWck=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19912784/Screen_Shot_2020_04_20_at_10.16.38_AM.png',
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
