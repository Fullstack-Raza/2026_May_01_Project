const mongoose = require("mongoose");

async function ConnectToDb() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("DB connected");
}

module.exports = ConnectToDb