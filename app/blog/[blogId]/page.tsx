import BlogDetails from "@/components/Blog/BlogDetails";

export default function blogPage({ params }: { params: { blogId: Number } }) {
    return (
        <BlogDetails blogId={params.blogId} />
    )
}