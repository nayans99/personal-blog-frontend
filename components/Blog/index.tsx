"use client"

import { useEffect, useState } from "react";
import BlogData from "./BlogData";
import SingleBlog from "./SingleBlog";
import { Blog } from "@/types/blog";

const BlogList = () => {

  const [blogs, setBlogs] = useState<Blog[]>([])

  useEffect(() => {
    const updateViews = async () => {
      console.log("Updating....")
      const response = await fetch('http://127.0.0.1:5000/');
      const data = await response.json()
      console.log(data)
      setBlogs(data["blogs"])
    }
 
    updateViews()
  }, [])
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28 ml-5">
      <div>
        <h1 className="mb-5">Blog Posts</h1>
        <div className="flex flex-col gap-3">
          {blogs.map(blog => (
            <SingleBlog blog = {blog} />
          ))}
      </div>
      </div>
      </section>
    </>
  );
};
  
  export default BlogList;