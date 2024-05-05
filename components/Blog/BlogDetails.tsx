"use client"

import { Blog } from "@/types/blog"
import { useEffect, useState } from "react"

const BlogDetails = ({blogId}: {blogId: Number}) => {
    const [blog, setBlog] = useState<Blog>()

    useEffect(() => {
        const getBlog = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/blog/' + blogId);
                const data = await response.json();
                // Assuming data is an array, you can destructure it and create a Blog object
                const [id, title, body, timestampString] = data["blog"];
                const timestamp = new Date(timestampString)
                const blogData: Blog = { id, title, body, timestamp };
                console.log(blogData);
                setBlog(blogData);
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        }
    
        getBlog()
    }, [])

    

    return(
        <div className="container mx-auto px-4 py-8">
        {blog && (
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                <p className="text-gray-500 mb-2">{blog.timestamp.toLocaleString()}</p>
                <div className="prose">{blog.body}</div>
            </div>
        )}
    </div>
    )
}

export default BlogDetails;