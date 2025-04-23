const router = require("express").Router();
const { NOT_FOUND } = require("../utils/errors");

const userRouter = require("./users");
const itemRouter = require("./clothingitems");

const { login, postUser } = require("../controllers/users");

router.post("/signin", login);
router.post("/signup", postUser);

router.use("/users", userRouter);
router.use("/items", itemRouter);

router.use((req, res) => {
  res.status(NOT_FOUND).send({ message: "Page not found" });
});

module.exports = router;
