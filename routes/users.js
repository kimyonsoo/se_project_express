const router = require("express").Router();
const { getCurrentUser } = require("../controllers/users");
const auth = require("../middlewares/auth");

router.get("/me", auth, getCurrentUser);
//router.patch("/me", modifyUser);
// // router.post("/", auth, postUser);

module.exports = router;
