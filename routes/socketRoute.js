const express = require('express');
const router = express.Router();

const socketController = require("../controller/socketController");

router.get('/sockettutorial', socketController.socketGet);

module.exports = router;