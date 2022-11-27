import blogPosts from "../src/blog_posts/blog_files.json";

const testFrontmatter = `---
Title: Authoring in Markdoc
---`

type TypeTestFunction = (char: string) => boolean;
type TypeToken = "---" | "Title:" | "Author:" | "Date:" | "Newline" | "Unknown" | null;

class TokenStream {
    private _tokenArray: Token[];
    private _streamObject: InputStream;

    public constructor(frontmatter: string) {
        this._streamObject = new InputStream(frontmatter);
        this._tokenArray = [];
    }

    public buildTokenArray(): void {
        let working = true;
        while (working) {
            const token = this.getNextToken();
            console.log(token);
            console.log(token.toString());
            if (token.tokenType === null) {
                working = false;
            }
            else {
                this._tokenArray.push(token);
            }
        }
    }

    private feedNextChar(): string {
        let char: string = this._streamObject.frontmatter[this._streamObject.streamPosition + 1];
        if (char === "\n") {
            this._streamObject.advanceLine();
            return char;
        }
        this._streamObject.advanceCol();
        return char;
    }

    private getNextToken(): Token {
        if (this._streamObject.eof()) {
            return new Token("End of file!"); // Return end of file stuff
        }
        this.parseWhile(this.testWhitespace.bind(this));
        const char = this._streamObject.peek();
        if (char === "-") {
            return (this.parseStartEndDelimiter());
        }
        if (char === "T" && this.testTitle(char)) {
            return (this.parseTitle());
        }
        if (char === "\n") {
            console.log("SHOULD NOT SEE THIS MESSAGE!");
        }
        return new Token();
    }

    private parseStartEndDelimiter(): Token {
        let token: Token = new Token();
        token.value += this.parseWhile(this.testStartEndDelimiter.bind(this));
        token.tokenType = "---";
        return token;
    }

    private parseTitle(): Token {
        let token: Token = new Token();
        token.value += this.parseWhile(this.testUntilNewLine.bind(this))
        token.tokenType = "Title:";
        return token;
    }

    private parseWhile(TestFunction: TypeTestFunction): string {
        let char = this._streamObject.peek();
        let token: string = "";
        while (!this._streamObject.eof() && TestFunction(char)) {
            token += char;
            char = this.feedNextChar();
        }
        return token;
    }

    public printTokenArray(): void {
        console.log(`Token array: ${this._tokenArray}`);
    }

    // Tests up until a newline then returns false to stop parsing.
    private testUntilNewLine(char: string): boolean {
        if (char !== "\n") {
            return true;
        }
        else {
            return false;
        }
    }

    private testStartEndDelimiter(char: string): boolean {
        if (this._streamObject.streamPosition === 0 &&
            this._streamObject.frontmatter[this._streamObject.streamPosition + 1] === "-" &&
            this._streamObject.frontmatter[this._streamObject.streamPosition + 2] === "-") {
            return true;
        }
        if (char === "-") {
            return true;
        }
        return false;
    }

    private testTitle(char: string): boolean {
        if (char === "T" &&
        this._streamObject.frontmatter[this._streamObject.streamPosition + 1] === "i" &&
        this._streamObject.frontmatter[this._streamObject.streamPosition + 2] === "t" &&
        this._streamObject.frontmatter[this._streamObject.streamPosition + 3] === "l" &&
        this._streamObject.frontmatter[this._streamObject.streamPosition + 4] === "e" &&
        this._streamObject.frontmatter[this._streamObject.streamPosition + 5] === ":") {
            this._streamObject.streamPosition += 6; // Move position to parse title value.
            return true
        }
        return false;
    }

    private testWhitespace(char: string): boolean {
        if (char === " ") {
            return true;
        }
        return false;
    }

}

class InputStream {
    public currentColumn: number;
    public currentLine: number;
    public nextColumn: number;
    public streamPosition: number;
    public frontmatter: string;

    public constructor(frontmatter: string) {
        this.currentColumn = 0;
        this.currentLine = 1;
        this.frontmatter = frontmatter;
        this.nextColumn = this.currentColumn + 1;;
        this.streamPosition = 0;
    }

    public advanceCol(): void {
       this.currentColumn += 1;
       this.nextColumn = this.currentColumn + 1;
       this.streamPosition += 1;
    }

    public advanceLine(): void {
       this.currentLine += 1;
       this.currentColumn = 0;
       this.nextColumn = this.currentColumn + 1;
       this.streamPosition += 2;
    }

    // Test for the end of the file.
    public eof(): boolean {
        return this.peek() == "";
    }

    // Return the next character without removing it from stream.
    public peek(): string {
        return this.frontmatter.charAt(this.streamPosition);
    }

}

class Token {
    public tokenType: TypeToken;
    public value: string;

    // If a value is passed in, assign the token type to Unknown as it is an
    // error token with an error message; otherwise, initialize a new token.
    public constructor(literalValue?: string){
        if (literalValue) {
            this.tokenType = "Unknown";
            this.value = literalValue;
        }
        else {
            this.tokenType = null;
            this.value = "";
        }
    }

    public toString(): string {
        return(`\nToken type: ${this.tokenType}\nToken value: ${this.value}`);
    }
}

export default function pluginParseFrontmatter(){
    return {
        name: "plugin-parse-frontmatter",
        buildEnd(){
            // Create new line for our output.
            console.log();

            let MyLexer = new TokenStream(testFrontmatter);
            MyLexer.buildTokenArray();
        },
    };
};
