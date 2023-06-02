const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../utils");

const shopSchema = new Schema({
  name: {
    type: String,
  },
});

shopSchema.post("save", handleMongooseError);

const Shop = model("shop", shopSchema);

module.exports = Shop;
