const express = require("express");

const { getShops } = require("../../controllers");

const router = express.Router();

router.get("/", getShops);

module.exports = router;
