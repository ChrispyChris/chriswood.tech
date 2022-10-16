import React, { ReactElement, useEffect, useState } from "react";
import { marked } from "marked";

function BlogPost(): ReactElement {
    const [blogPost, setBlogPost] = useState<string>("");

    useEffect(() => {
        async function loadBlog(blogFile: string): Promise<string>  {
        let blogFetch = await fetch(`../blog_posts/${blogFile}`);
        let blogData = await blogFetch.text();
        setBlogPost(marked.parse(blogData));
        return blogData;
        }

        loadBlog("first_blog_post.md")
    });

    return (
        <div className="blog__post" dangerouslySetInnerHTML={{__html: blogPost}}></div>
    );
};

export default BlogPost;
