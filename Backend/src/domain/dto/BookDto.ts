export class BookDto {
    constructor(
        public readonly Code: string,
        public Title: string,
        public Author: string,
        public Stock: number,
        public MemberCode: string,
    ) {}
}