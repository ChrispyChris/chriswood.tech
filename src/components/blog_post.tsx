import React, { ReactElement, useEffect, useState } from "react";
import { marked } from "marked";
import "../sass/blog_post.scss";

type BlogPostProps = {
    blogPostTitle: string;
    key: number;
}

export default function BlogPost({ blogPostTitle }: BlogPostProps): ReactElement {
    const [blogPost, setBlogPost] = useState<string>("");

    useEffect(() => {
        const fetchBlogPost = async (blogPost: string) => {
            if (blogPost === "") {
                try {
                    const blogPostFetch = await fetch(`../blog_posts/${blogPostTitle}`);
                    let blogPostText = await blogPostFetch.text();
                    blogPostText = marked.parse(blogPostText);
                    setBlogPost(blogPostText);
                }
                catch (error) {
                    if (typeof error === "string")
                        setBlogPost(error);
                    setBlogPost("Sorry, something went wrong...");
                }
            }
        }

        fetchBlogPost(blogPost);
        }, []);

    const handleClick = () => {
       
    }

    function displayPost() {
        if (blogPost.length > 0) {
            return (
                <div onClick={handleClick} className="blog__post" dangerouslySetInnerHTML={{__html: blogPost}} />
            );
        }
        else {
            return (
                <div>Loading.</div>
            );
        }
    }

    return ( displayPost() );
}

const walkTokens = (token: any) => {
  if (token.type === 'heading') {
    token.depth += 1;
  }
}

marked.use({ walkTokens });
