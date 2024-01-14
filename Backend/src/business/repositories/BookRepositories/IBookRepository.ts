import {Book} from '../../../domain/entities/Book'

export interface IBookRepository {
    findAll(): Promise<Book[]>
}