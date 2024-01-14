export class Book {
    public Code: string
    public Title: string
    public Author: string
    public Stock: number
    // public MemberId: string

    constructor(Code: string, Title: string, Author: string, Stock: number){
        this.Code = Code
        this.Title = Title
        this.Author = Author
        this.Stock = Stock
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
