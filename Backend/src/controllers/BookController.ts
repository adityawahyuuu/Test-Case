import {Request, Response, Router} from 'express'
import {BookRepositories} from "../business/repositories/BookRepositories/BookRepository";

export class BookController {
    constructor(
        private readonly repository: BookRepositories
    ){}

    async getAllBookExceptBorrowed(req: Request, res: Response) {
        const books = await this.repository.findAll()
        return res.send(books)
    }
}