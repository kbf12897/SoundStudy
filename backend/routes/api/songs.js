const express = require("express");
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");

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
    asyncHandler(async function (req, res) {
        const song = await db.Song.create(req.body);
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
