import mongoose from "mongoose";
//we create a schema
const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishedYear: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
},{
    timestamps:true,
}
);


export const Book = mongoose.model("Earl", bookSchema);
 