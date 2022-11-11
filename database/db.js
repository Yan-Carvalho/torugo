const mongoose = require("mongoose");
const db = process.env.DB_URI;

const connectToDb = () => {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));
};
module.exports = connectToDb;
