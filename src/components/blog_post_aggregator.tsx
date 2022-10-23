import React, { ReactElement, useEffect, useState } from "react";
import BlogPost from "./blog_post";
import "../sass/blog_post_aggregator.scss";

export default function BlogPostsListContainer(): ReactElement {
    const [blogPostTitles, setBlogPostTitles] = useState<string[]>([]);
    //const [blogPostsArray, setBlogPostsArray] = useState<JSX.Element[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        async function loadBlogPostTitles() {
            try {
                const blogPostTitlesFile: Response = await fetch("../blog_posts/blog_files.json");
                if (!blogPostTitlesFile.ok) 
                    throw "Sorry, there was a problem loading the blog posts.";
                const blogPostTitlesJsonArr = await blogPostTitlesFile.json();
                setBlogPostTitles(blogPostTitlesJsonArr);
                setIsLoading(false);
            }
            catch (error) {
                if (Array.isArray(error)) {
                    setBlogPostTitles(error);
                }
            }
        }

        loadBlogPostTitles();
    }, []);

    /**useEffect(() => {
        function createBlogPosts() {
            let blogArray = [];
            blogArray = blogPostTitles.map((blogPost, index) => <BlogPost blogPostTitle={blogPost} key={index} />);
            setBlogPostsArray(blogArray);
        }

        createBlogPosts();
    }, [blogPostTitles]);*/

    return (
        <div className="blog__post-wrapper"> 
            {isLoading   ?
            "Loading..." :
            blogPostTitles.map((blogPost: string, index: number) => <BlogPost blogPostTitle={blogPost} key={index} />)}
        </div>
    );
}
