const router = require("express").Router();
const {
  createItem,
  getItems,
  deleteItem,
  likeItem,
  unlikeItem,
} = require("../controllers/clothingitems");
const auth = require("../middlewares/auth");

router.get("/", getItems);
router.post("/", auth, createItem);
// router.put("/:itemId", updateItem);
router.delete("/:itemId", auth, deleteItem);
router.put("/:itemId/likes", auth, likeItem);
router.delete("/:itemId/likes", auth, unlikeItem);

module.exports = router;
