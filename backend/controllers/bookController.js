import { Book } from "../models/bookModel.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { HTTP } from "../constants/httpStatus.js";

export const saveNewBook = asyncHandler(async (request, response) => {
  if (!request.body.name || !request.body.author || !request.body.publishYear) {
    response.status(400);
    throw new Error("Please provide the required fields");
  }
  const { name, author, publishYear } = request.body;
  const newBook = { name, author, publishYear };
  // check if the book already exists
  if (await Book.findOne({ name, author, publishYear })) {
    response.status(400);
    throw new Error("Book already exists");
  }
  const book = await Book.create(newBook);
  return response.status(201).send(book);
});

export const getAllBooks = asyncHandler(async (request, response) => {
  const books = await Book.find({});
  return response.status(HTTP.OK).json({ count: books.length, data: books });
});

export const getOneBook = asyncHandler(async (request, response) => {
  const { id } = request.params;

  const book = await Book.findById(id);

  if (!book) {
    response.status(HTTP.NOT_FOUND);
    throw new Error("Book not found");
  }
  console.log("this is your book", book);
  return response.status(HTTP.OK).json(book);
});

export const updateBook = asyncHandler(async (request, response) => {
  const { id } = request.params;

  const book = await Book.findByIdAndUpdate(id, request.body);
  if (!book) {
    return response.status(HTTP.NOT_FOUND).send({ message: "Book not found" });
  }

  return response
    .status(HTTP.OK)
    .send({ message: "Book updated successfully" });
});

export const deleteBook = asyncHandler(async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findByIdAndDelete(id);

    if (!book) {
      response.status(404);
      throw new Error("Book not found");
    }

    return response.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log("here is my error ", error.message);
    return response.status(500).send({ message: "Deleting the book failed !" });
  }
});
