"use client"

import { useEffect, useState } from "react";
import BlogData from "./BlogData";
import SingleBlog from "./SingleBlog";
import { Blog } from "@/types/blog";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

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

  const router = useRouter()

  const createBlog = () => {
    router.push("/blog/create")
  }
  return (
    <>
      <section className="py-16 md:py-20 lg:py-28 px-5 md:px-10 lg:px-20">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Blog Posts</h1>
                    <Button color="primary" onClick={createBlog}>
                      New Blog
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {blogs.map(blog => (
                        <SingleBlog key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    </>
  );
};
  
  export default BlogList;