const Drink = require("../models/Drink");

// let message = "";
// let type = "";

const getAllDrinks = async (req, res) => {
  try {
    // setTimeout(() => {
    //   message = "";
    // }, 1000);
    const drinkList = await Drink.find();
    return res.render("index", {drinkList});
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const createDrink = async (req, res) => {
  const drink = req.body;

  if (!drink.drink) {
    message = "Insira um texto antes de adicionar uma Drink";
    type = "danger";
    return res.redirect("/");
  }
  try {
    await Drink.create(drink);
    // message = "Tarefa criada";
    // type = "success";
    return res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAllDrinks,
  createDrink,
};
