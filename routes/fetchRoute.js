const express = require("express");
const router = express.Router();

const fetchController = require("../controller/fetchController");

router.get("/fetchut", fetchController.fetchGet);

module.exports = router;