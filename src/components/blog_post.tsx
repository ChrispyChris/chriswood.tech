import React, { ReactElement, useEffect, useState } from "react";
import { marked } from "marked";
import "../sass/blog_post.scss";

export default function BlogPost({ blogPostTitle }: { blogPostTitle: string }): ReactElement {
    const [blogPost, setBlogPost] = useState<string>("");
    const [blogTitle, setBlogTitle] = useState<string>(blogPostTitle);

    const fetchBlogPost = () => {
            async () => { 
            const blogPostText = await fetch("../blog_posts/" + blogTitle).then(fetchedPost => fetchedPost.text());
            setBlogPost(blogPostText);
            }
    }

    const handleClick = () => {
        fetchBlogPost();
    }

    return (
        <div onClick={handleClick} className="blog__post" dangerouslySetInnerHTML={{__html: blogPost}}></div>
    );
}

const walkTokens = (token: any) => {
  if (token.type === 'heading') {
    token.depth += 1;
  }
}

marked.use({ walkTokens });
