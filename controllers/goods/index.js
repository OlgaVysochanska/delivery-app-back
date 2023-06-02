const { ctrlWrapper } = require("../../helpers");

const { getGoods } = require("./getGoods");

module.exports = { getGoods: ctrlWrapper(getGoods) };
