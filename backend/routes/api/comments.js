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

router.post(
    "/",
    asyncHandler(async function (req, res) {
        const comment = await db.Comment.create(req.body);
        return res.json(comment);
    })
);

router.put(
    "/:commentId",
    asyncHandler(async function (req, res) {
        const commentId = req.body.commentId;
        const comment = await db.Comment.findOne({ where: { id: commentId } });
        comment.update(req.body);
        return res.json(comment);
    })
);

router.delete(
    "/:commentId",
    asyncHandler(async function (req, res) {
        const commentId = req.params.commentId;
        await db.Comment.destroy({ where: { id: commentId } });
        return res.json("success");
    })
);

module.exports = router;
