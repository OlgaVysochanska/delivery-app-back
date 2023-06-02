const { HttpError } = require("../../helpers");
const { Good } = require("../../models");

const getGoods = async (req, res) => {
  const { shop } = req.query;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const data = await Good.find({ shop }, "-createdAt -updatedAt", {
    skip,
    limit,
  }).sort({ date: -1 });
  if (!data) {
    throw HttpError(404, `${shop} not found`);
  }
  const count = await Good.countDocuments();
  res.status(200).json({
    data,
    totalPages: Math.ceil(count / limit),
    currentPage: page,
  });
};

module.exports = { getGoods };
