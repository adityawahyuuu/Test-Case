import { IMemberRepository } from "./IMemberRepository"
import { Member } from "../../../domain/entities/Member"
import {MemberDto} from "../../../domain/dto/MemberDto"
import {SequelizeMember} from "../../model/Member"
import {SequelizeBook} from "../../model/Book"

export class MemberRepositories implements IMemberRepository {
    async findAll(): Promise<Member[]> {
        const members = await SequelizeMember.findAll()
        return members.map(member => new MemberDto(member.Code, member.Name))
    }

    async memberById(id: string): Promise<Member | null> {
        const books = await SequelizeMember.findByPk(id)
        return books
    }
}