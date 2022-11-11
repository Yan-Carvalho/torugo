const mongoose = require("mongoose");

const drinkSchema = new mongoose.Schema({
  drink: {
    type: String,
  },
  alcohol: {
    name: String,
    mlTotal: Number,
    priceTotal: Number,
    mlDrink: Number,
    mlPrice: Number,
  },
  fruits: {
    one: {
      name: String,
      gramaTotal: Number,
      priceTotal: Number,
      gramaDrink: Number,
      gramaPrice: Number,
    },
    two: {
      name: String,
      gramaTotal: Number,
      priceTotal: Number,
      gramaDrink: Number,
      gramaPrice: Number,
    },
  },
  ingredient: {
    one: {
      name: String,
      qtdTotal: Number,
      priceTotal: Number,
      qtdDrink: Number,
      qtdPrice: Number,
    },
    two: {
      name: String,
      qtdTotal: Number,
      priceTotal: Number,
      qtdDrink: Number,
      qtdPrice: Number,
    },
  },
  decorations: {
    name: String,
    price: Number,
  },
  others: {
    one: {
      name: String,
      qtdTotal: Number,
      priceTotal: Number,
      qtdDrink: Number,
      qtdPrice: Number,
    },
    two: {
      name: String,
      qtdTotal: Number,
      priceTotal: Number,
      qtdDrink: Number,
      qtdPrice: Number,
    },
  },
  comments: {
    type: String,
  },
});

module.exports = mongoose.model("Drink", drinkSchema);
