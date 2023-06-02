const { Order } = require("../../models");
const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const addOrder = async (req, res) => {
  const { owner, userName, userPhone, userLocation, shop, goods, totalPrice } =
    req.body;

  const isUser = await User.find({ email: owner });

  if (!isUser) {
    const result = await User.create({
      email: owner,
      name: userName,
      phone: userPhone,
      address: userLocation,
    });

    console.log(result);

    const payload = {
      id: result._id,
    };

    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "23h",
    });

    await User.findByIdAndUpdate(result._id, { token });
  }

  const data = await Order.create({
    owner,
    userName,
    userPhone,
    userLocation,
    shop,
    goods,
    totalPrice,
  });
  if (!data) {
    throw HttpError(400);
  }
  res.status(201).json(owner);
};

module.exports = { addOrder };
