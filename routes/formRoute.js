const express = require("express");
const router = express.Router();

const bookController = require("../controller/bookFormController");

router.get("/bookform", bookController.formGet);
router.post("/bookform", bookController.formPost);

module.exports = router;