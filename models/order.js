const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../utils");

const orderSchema = new Schema(
  {
    owner: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
    },
    userPhone: {
      type: String,
    },
    userLocation: {
      type: String,
    },
    shop: {
      type: String,
    },
    goods: {
      type: Array,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);
orderSchema.post("save", handleMongooseError);

const Order = model("order", orderSchema);

module.exports = Order;
