import React, { ReactElement, useEffect, useState } from "react";
import BlogPost from "./blog_post";
import "../sass/blog_post_aggregator.scss";

export default function BlogPostsListContainer(): ReactElement {
    const [blogPostTitles, setBlogPostTitles] = useState<string[] | null>(null);

    useEffect(() => {
        async function loadBlogPostTitles() {
            try {
                const blogPostTitlesFile: Response = await fetch("../blog_posts/blog_files.json");
                if (!blogPostTitlesFile.ok) 
                    throw "Sorry, there was a problem loading the blog posts.";
                const blogPostTitlesJsonArr = await blogPostTitlesFile.json();
                setBlogPostTitles(blogPostTitlesJsonArr);
            }
            catch (error) {
                if (Array.isArray(error)) {
                    setBlogPostTitles(error);
                }
            }
        }

        loadBlogPostTitles();
    }, []);


    return (
        <div className="blog__post-wrapper"> 
            {!blogPostTitles ?
            "Loading..." :
            blogPostTitles.map((blogPost: string, index: number) => <BlogPost blogPostTitle={blogPost} key={index} />)}
        </div>
    );
}
