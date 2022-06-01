const express = require("express");
const asyncHandler = require("express-async-handler");
const { singleMulterUpload, singlePublicFileUpload } = require('../../awsS3');
const db = require("../../db/models");
const { setTokenCookie } = require('../../utils/auth')

const router = express.Router();

router.get(
    "/",
    asyncHandler(async function (req, res) {
        const songs = await db.Song.findAll();
        return res.json(songs);
    })
);

router.post(
    "/",
    singleMulterUpload('url'),
    asyncHandler(async function (req, res) {
        const { userId, playlistId, songImg, title } = req.body;
        const url = await singlePublicFileUpload(req.file);
        const song = await db.Song.create({ userId, playlistId, songImg, url, title });

        setTokenCookie(res, song);

        return res.json(song);
    })
);

router.get(
    "/:songId",
    asyncHandler(async function (req, res) {
        const songs = await db.Song.findAll();
        return res.json(songs);
    })
);

router.delete(
    "/:songId",
    asyncHandler(async function (req, res) {
        const songId = req.params.songId;
        await db.Song.destroy({ where: { id: songId } });
        return res.json("success");
    })
);

router.put(
    "/:songId",
    asyncHandler(async function (req, res) {
        const songId = req.params.songId;
        const song = await db.Song.findOne({ where: { id: songId } });
        song.update(req.body);
        return res.json(song);
    })
);

module.exports = router;
