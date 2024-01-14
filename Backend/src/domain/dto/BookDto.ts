export class BookDto {
    constructor(
        public readonly BookId: string,
        public Title: string,
        public Author: string,
        public Stock: number,
        // public MemberId: string,
    ) {}
}