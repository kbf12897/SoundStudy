const express = require("express");
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");

const router = express.Router();

router.get(
    "/",
    asyncHandler(async function (req, res) {
        const comments = await db.Comment.findAll();
        return res.json(comments);
    })
);

module.exports = router;
