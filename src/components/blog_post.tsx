import React, { ReactElement, useEffect, useState } from "react";
import { marked } from "marked";
import "../sass/blog_post.scss";

export default function BlogPostsList(): ReactElement {
    const [blogPost, setBlogPost] = useState<string>("");

    useEffect(() => {
        async function loadBlogPostTitles(blogPostTitlesJsonURI: string): Promise<string[]>  {
        let blogPostTitlesFetch = await fetch(`../blog_posts/${blogPostTitlesJson}`);
        let blogPostsData = await blogPostTitlesFetch.text();
        setBlogPost(marked.parse(blogPostsData));
        return blogPostsData;
        }

        loadBlog("first_blog_post.md")
    });

    return (
        <div className="blog__post" dangerouslySetInnerHTML={{__html: blogPost}}></div>
    );
}

async function loadBlogPostTitles() {
    let blogPostTitles: string = await fetch("../blog_posts/blog_files.json");
    
}

const walkTokens = (token: any) => {
  if (token.type === 'heading') {
    token.depth += 1;
  }
}

marked.use({ walkTokens });
