import React, { ReactElement, useEffect, useState } from "react";
import "../sass/blog_post_aggregator.scss";

export default function BlogPostsListContainer(): ReactElement {
    const [blogPostTitles, setBlogPostTitles] = useState<string[]>([]);

    useEffect(() => {
        async function loadBlogPostTitles() {
            try {
                const blogPostTitlesFile: Response = await fetch("../blog_posts/blog_files.json");
                if (!blogPostTitlesFile.ok) throw "Sorry, there was a problem loading the blog posts.";
                const blogPostTitlesJsonObj = await blogPostTitlesFile.json();
                setBlogPostTitles(blogPostTitlesJsonObj);
            } 
            catch(error: unknown) {
                if (typeof error === "string") setBlogPostTitles([error]);
                else setBlogPostTitles(["Something really bad happened!"]);
            }
        }

        loadBlogPostTitles();
    }, []);

    return(
        <div>{blogPostTitles.toString()}</div>
    );
}
