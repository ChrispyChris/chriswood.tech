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
        async function fetchBlogPost() {
            if (blogPost.length === 0) {
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

        fetchBlogPost();
    }, []);

    return (
        <div className="blog__post" dangerouslySetInnerHTML={blogPost.length ? {__html: blogPost} : undefined} />
    );
}

const walkTokens = (token: any) => {
  if (token.type === 'heading') {
    token.depth += 1;
  }
}

marked.use({ walkTokens });
