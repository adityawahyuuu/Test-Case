import express from "express"
import { BookController } from "./BookController"
import { BookRepositories } from "../business/repositories/BookRepositories/BookRepositories"

const seqBookRepository = new BookRepositories()
const bookController = new BookController(seqBookRepository)
const router = express.Router();

router.get('/books', bookController.getAllBookExceptBorrowed.bind(bookController));

export default router