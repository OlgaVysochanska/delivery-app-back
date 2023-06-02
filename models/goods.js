const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../utils");

const goodsSchema = new Schema(
  {
    title: {
      type: String,
    },
    url: {
      type: String,
    },
    price: {
      type: String,
    },
    shop: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

goodsSchema.post("save", handleMongooseError);

const Good = model("goods", goodsSchema);

module.exports = Good;
