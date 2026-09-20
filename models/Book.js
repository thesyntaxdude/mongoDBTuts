import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    year: { type: Number, required: true },
    genre: { type: String, required: true, trim: true },
    deleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
