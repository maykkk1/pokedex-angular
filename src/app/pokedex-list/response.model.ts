export class Response {
    public count: number;
    public next: string;
    public previous: string;
    public results: [];

    constructor(count: number, next: string, previous: string, results: [] ) {
        this.count = count;
        this.next = next;
        this.previous = previous;
        this.results = results;
    }
}