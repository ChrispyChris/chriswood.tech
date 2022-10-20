import React, { ReactElement, useEffect, useState } from "react";
import "../sass/blog_post_aggregator.scss";

export default function BlogPostsListContainer(): ReactElement {
    const [blogPostTitles, setBlogPostTitles] = useState<string[]>(["Loading... Please wait :)."]);
    const [blogPostsArray, setBlogPostsArray] = useState<JSX.Element[]>([]);

    useEffect(() => {
        async function loadBlogPostTitles() {
            try {
                const blogPostTitlesFile: Response = await fetch("../blog_posts/blog_files.json");
                if (!blogPostTitlesFile.ok) 
                    throw "Sorry, there was a problem loading the blog posts.";
                const blogPostTitlesJsonArr = await blogPostTitlesFile.json();
                setBlogPostTitles(blogPostTitlesJsonArr);
            } 
            catch(error: unknown) {
                if (typeof error === "string") setBlogPostTitles([error]);
                else setBlogPostTitles(["Something really bad happened!"]);
            }
        }

        loadBlogPostTitles();
        setBlogPostsArray(createBlogPostsArray(blogPostTitles));
    }, [blogPostTitles]);

    function createBlogPostsArray(blogPostsArray: string[]): JSX.Element[] {
        return blogPostsArray.map((blogPost, index) => 
            <div key={index}>{blogPost}</div>
        );
    }

    function displayBlogPosts(blogPostsArray: JSX.Element[]) {
        return (
            <div>{blogPostsArray}</div>
        );
    }

    return (
        displayBlogPosts(blogPostsArray)
    );
}
