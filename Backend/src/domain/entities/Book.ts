export class Book {
    public Code: string
    public Title: string
    public Author: string
    public Stock: number
    public MemberCode: string

    constructor(Code: string, Title: string, Author: string, Stock: number, MemberCode: string){
        this.Code = Code
        this.Title = Title
        this.Author = Author
        this.Stock = Stock
        this.MemberCode = MemberCode
    }

    // get bookTitle(): string {
    //     return this.Title
    // }

    // get bookAuthor(): string {
    //     return this.Author
    // }

    // get bookStock(): number {
    //     return this.Stock
    // }
}
