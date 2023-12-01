// Importing the necessary modules using ES module syntax
import express from "express";
import mongoose from "mongoose";

// Importing the named export from the "config.js" file
import { PORT } from "./config.js";

// Creating an instance of the Express application
const app = express();

// Listening on the specified port
app.listen(PORT, () => {
  console.log(`The app is listening to ${PORT}`);
  
});
