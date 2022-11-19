import blogPosts from "../src/blog_posts/blog_files.json";

class Parser {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

export default function pluginParseFrontmatter(){
    return {
        name: "plugin-parse-frontmatter",
        buildEnd(){
            // Create new line for our output.
            console.log();

            const MyClass = new Parser("Chris");
            console.log(MyClass.name);
            for (const [index, blogPost] of blogPosts.entries()) {
                console.log("This is testing the parser! Oh and the blog post title is " + blogPost + `! ${index}`);
            }
        },
    };
};
