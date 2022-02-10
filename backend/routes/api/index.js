// backend/routes/api/index.js
const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const songsRouter = require("./songs.js");
const commentsRouter = require("./comments.js");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/songs", songsRouter);

router.use("/:songId/comments", commentsRouter);

module.exports = router;
