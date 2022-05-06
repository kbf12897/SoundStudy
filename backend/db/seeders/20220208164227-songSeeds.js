"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Songs",
            [
                {
                    userId: 1,
                    playlistId: 1,
                    songImg: 'https://i.scdn.co/image/ab67616d0000b2733a7c2a85034338bb3bf08c8e',
                    url: "fsm-team-escp-elevator-decorator.mp3",
                    title: "Elavator Decorator",
                },
                {
                    userId: 1,
                    playlistId: 1,
                    songImg: 'https://i.scdn.co/image/ab67616d0000b273b0d9eb9f5568ea16cb0c8ee9',
                    url: "purrple-cat-a-place-to-hide.mp3",
                    title: "Place to Hide",
                },
                {
                    userId: 1,
                    playlistId: 1,
                    songImg: 'https://i1.sndcdn.com/artworks-n8NU8KqFFJx4dPUz-4b98Vg-t500x500.jpg',
                    url: "ron-gelinas-chillout-lounge-cleansing-rain.mp3",
                    title: "Place to Hide",
                },
                {
                    userId: 1,
                    playlistId: 1,
                    songImg: 'https://i.scdn.co/image/ab67616d0000b273aafe29c6ac07287a303474c5',
                    url: "popoi-east-side-manhattan.mp3",
                    title: "East Side Manhattan",
                },
                {
                    userId: 1,
                    playlistId: 1,
                    songImg: 'https://w0.peakpx.com/wallpaper/234/588/HD-wallpaper-moon-3d-aesthetic-anime-animestyle-calm-cyan-lofi-peace-studioghibli-thumbnail.jpg',
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
