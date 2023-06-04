const express = require("express");

const { getOrders, addOrder } = require("../../controllers");

const router = express.Router();

router.get("/", getOrders);

router.post("/", addOrder);

module.exports = router;
