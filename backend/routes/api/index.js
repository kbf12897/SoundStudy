// backend/routes/api/index.js
const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const userMainRouter = require("./user-main.js");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/user-main", userMainRouter);

module.exports = router;
