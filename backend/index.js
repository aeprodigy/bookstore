// Importing the Express.js framework
import express from "express";
import mongoose from "mongoose";
// Importing the PORT constant from the "config" file in the same directory
import { PORT, mongoDBURL } from "./config.js";
import { Book } from "./models/bookmodels.js";
// Creating an instance of the Express application
const app = express();

//middleware for parsin request data
app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(235).send("The first MERN stack!!");
});

//Route to save the new book to the database
app.post("/books", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
        return response.status(400).send({
            message: "Send all required fields: title, author, publishYear",
        });
    }
    const newBook = {
        title: request.body.title,
        author: request.body.author,
        publishYear: request.body.publishYear
    };
    const book = await Book.create(newBook);//creating a new book.
    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App is connected to the database");

    app.listen(PORT, () => {
      console.log(`The port is live on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
