import React, { ReactElement, useEffect, useState } from "react";
import BlogPost from "./blog_post";
import "../sass/blog_post_aggregator.scss";

export default function BlogPostsListContainer(): ReactElement {
    const [blogPostTitles, setBlogPostTitles] = useState<string[]>([""]);
    const [blogPostsArray, setBlogPostsArray] = useState<JSX.Element[]>([]);

    useEffect(() => {
        async function loadBlogPostTitles() {
            if ( blogPostTitles.length === 1 )
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

        function createBlogPostsArray(blogPostTitlesList: string[]): ReactElement[] {
            return blogPostTitlesList.map((blogPost, index) => 
                <BlogPost blogPostTitle={blogPost} key={index}/>
            );
        }

        loadBlogPostTitles();
        const blogArray = createBlogPostsArray(blogPostTitles);
        setBlogPostsArray(blogArray);
    }, [blogPostTitles]);

    function displayBlogPosts(blogPostsArray: JSX.Element[]) {
        if (blogPostsArray.length === 1) {
            return (
                <div>Loading...</div>
            );
        }
        else {
            return (
                <div>{blogPostsArray}</div>
            );
        }
    }

    return (
        displayBlogPosts(blogPostsArray)
    );
}
