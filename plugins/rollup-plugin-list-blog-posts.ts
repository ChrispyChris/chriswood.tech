import fs from "node:fs/promises"

export default function pluginListBlogPosts(options: { directory: string } = { directory : "" }){
    return {
        name: "plugin-list-blog-posts",
        async buildEnd(){
            const blogFiles: {} = await fs.readdir(options.directory)
            console.log(blogFiles);
        },
    };
};
