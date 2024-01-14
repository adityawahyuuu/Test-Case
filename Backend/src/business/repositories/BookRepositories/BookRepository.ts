import { IBookRepository } from "./IBookRepository"
import { Book } from "../../../domain/entities/Book"
import {BookDto} from "../../../domain/dto/BookDto"
import {SequelizeBook} from "../../model/Book"

export class BookRepositories implements IBookRepository {
    async findAll(): Promise<Book[]> {
        const books = await SequelizeBook.findAll()
        const availableBooks = books.filter((book) => book.MemberCode === null)
        return availableBooks.map(avBook => new BookDto(avBook.Code, avBook.Title, avBook.Author, avBook.Stock, avBook.MemberCode))
    }
}