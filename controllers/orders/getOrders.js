const { HttpError } = require("../../helpers");
const { Order } = require("../../models");

const getOrders = async (req, res) => {
  const { email } = req.body;

  const data = await Order.find({ owner: email });

  if (!data) {
    throw HttpError(404, "Make your first order!");
  }

  res.status(200).json(data);
};

module.exports = { getOrders };
