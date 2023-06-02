const { ctrlWrapper } = require("../../helpers");

const { getShops } = require("./getShops");

module.exports = { getShops: ctrlWrapper(getShops) };
