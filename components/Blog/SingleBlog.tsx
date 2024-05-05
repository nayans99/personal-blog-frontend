"use client"

import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { Blog } from "@/types/blog";
import { useRouter } from "next/navigation";




const SingleBlog = ({blog}: {blog: Blog}) => {
    
    const router = useRouter()
    const viewBlog = () => {
        router.push("/blog/"+ blog.id)
    }
  return (
    <Card 
    className="h-32"
    isPressable
    onPress={viewBlog}
    >
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <h1 className="text-md">{blog.title}</h1>
        </div>
      </CardHeader>
      <CardBody>
      <p className="text-small text-default-500 truncate">{blog.body}</p>
      </CardBody>
    </Card>
  );
}

export default SingleBlog;
