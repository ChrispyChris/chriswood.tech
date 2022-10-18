import fs from "node:fs/promises"

export default function pluginListBlogPosts(options: { directory: string } = { directory : "" }){
    return {
        name: "plugin-list-blog-posts",
        async buildEnd(){
            const fileName: string = "blog_files.json";
            let blogFiles: string[] = await fs.readdir(options.directory)
            blogFiles = blogFiles.filter(file => file.toString() !== fileName);
            const blogFileListJson: string = JSON.stringify(blogFiles);
            fs.writeFile("src/blog_posts/" + fileName, blogFileListJson);
            console.log("Exporting blogfiles and " + fileName + ".");
        },
    };
};
