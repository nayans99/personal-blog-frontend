import BlogData from "./BlogData";
import SingleBlog from "./SingleBlog";

const BlogList = () => {
    return (
      <>
        <section id="features" className="py-16 md:py-20 lg:py-28 ml-5">
        <div>
          <h1 className="mb-5">Blog Posts</h1>
          <div className="flex flex-col gap-3">
            {BlogData.map(blog => (
              <SingleBlog blog = {blog} />
            ))}
        </div>
        </div>
        </section>
      </>
    );
  };
  
  export default BlogList;