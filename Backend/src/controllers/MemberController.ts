import {Request, Response} from 'express'
import {MemberRepositories} from "../business/repositories/MemberRepositories/MemberRepository";
import {BookRepositories} from "../business/repositories/BookRepositories/BookRepository";
import { SequelizeBook } from '../business/model/Book';

export class MemberController {
    constructor(
        private readonly memberRepository: MemberRepositories
    ){}

    async getAllMember(req: Request, res: Response) {
        const members = await this.memberRepository.findAll()
        return res.send(members)
    }

    async putMemberBorrowwingBook(req: Request, res: Response){
        const memberId = req.params.memberId
        const memberById = await this.memberRepository.memberById(memberId)

        return res.send(memberById)

        // if (memberById?.Code){
        //     const filteredBooks = availableBooks.filter(book => {
        //         book.MemberCode == memberById.Code
        //     })

        //     if (filteredBooks.length == 2) {
        //         res.status(400).send(`Balikin lagi yg kemarin bro ${memberById.Name}`)
        //     } else if (filteredBooks.length < 2) {
        //         const borrowedBook = availableBooks.filter(book => {
        //             book.Title == title
        //         })

        //         borrowedBook[0].MemberCode = memberId

        //         // await SequelizeBook.afterSave()

        //         res.status(200).send(`Dipinjam oleh ${memberById.Name}`)
        //     }
        // }
    }
}