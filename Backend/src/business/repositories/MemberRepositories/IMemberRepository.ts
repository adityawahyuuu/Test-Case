import {Member} from '../../../domain/entities/Member'

export interface IMemberRepository {
    findAll(): Promise<Member[]>
    memberById(id: string): Promise<Member | null>
}