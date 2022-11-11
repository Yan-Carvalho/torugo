const routes = require("express").Router();
const DrinkController = require("../controller/DrinkController");

routes.get("/", DrinkController.getAllDrinks);
routes.post("/create", DrinkController.createDrink);

module.exports = routes;
