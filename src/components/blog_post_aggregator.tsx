import React, { ReactElement, useEffect, useState } from "react";
import BlogPost from "./blog_post";
import "../sass/blog_post_aggregator.scss";

export default function BlogPostsListContainer(): ReactElement {
    const [blogPostTitles, setBlogPostTitles] = useState<string[]>([""]);
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
            catch (error) {
                if (Array.isArray(error))
                    setBlogPostTitles(error);
            }
        }

        loadBlogPostTitles();
    }, []);

    /**
    * function displayBlogPosts(blogPostsArray: JSX.Element[]) {
    *     return (
    *         <div>{blogPostsArray}</div>
    *     );
    * }
    */

    /**
     * Still unsure what I'm trying to do when it comes to the React way.
     * First render Loading since the length of blogPostsArray is initialized
     * to an empty array.
     */

    if ( blogPostsArray.length === 1 ) {
        return (
            <div>Loading posts.</div>
        );
    }
    else {
        return (
        <div className="blog__post-wrapper">
            {blogPostTitles.map((blogPost, index) => <BlogPost blogPostTitle={blogPost} key={index} />)}
        </div>
        );
    }
}
