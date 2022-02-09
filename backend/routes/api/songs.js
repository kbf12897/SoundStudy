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

router.delete("/");

module.exports = router;
