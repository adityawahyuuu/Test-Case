import express from "express"
import { BookController } from "./BookController"
import { BookRepositories } from "../business/repositories/BookRepositories/BookRepository"
import {MemberController} from "./MemberController"
import { MemberRepositories } from "../business/repositories/MemberRepositories/MemberRepository"

const seqMemberRepository = new MemberRepositories()
const seqBookRepository = new BookRepositories()
const memberController = new MemberController(seqMemberRepository)
const bookController = new BookController(seqBookRepository)
const router = express.Router();

/**
   * @openapi
   * /api/books:
   *  get:
   *     tags:
   *     - Books
   *     description: All book except borrowed
   *     responses:
   *       200:
   *         description: App is up and running
   */
router.get('/books', bookController.getAllBookExceptBorrowed.bind(bookController))
/**
   * @openapi
   * /api/members:
   *  get:
   *     tags:
   *     - Members
   *     description: All Member
   *     responses:
   *       200:
   *         description: App is up and running
   */
router.get('/members', memberController.getAllMember.bind(memberController))

/**
   * @openapi
   * '/api/borrow/{memberId}':
   *  get:
   *     tags:
   *     - Book
   *     summary: Update a Book status
   *     parameters:
   *      - name: memberId
   *        required: true
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Forbidden
   */
router.get('/members/{memberId}', memberController.putMemberBorrowwingBook.bind(memberController))

export default router