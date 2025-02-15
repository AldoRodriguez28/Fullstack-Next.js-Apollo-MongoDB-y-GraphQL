const mongoose = require("mongoose");

require("dotenv").config({ path: "variables.env" });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
   
    });
    console.log("DB conectada");
  } catch (error) {
    console.log(`hubo un error  al conectar a la base de datos ${error}`);
    process.exit(1); //detiene la aplicacion
  }
};

module.exports = connectDB;
