const express = require("express");

const { getGoods } = require("../../controllers");

const router = express.Router();

router.get("/", getGoods);

module.exports = router;
