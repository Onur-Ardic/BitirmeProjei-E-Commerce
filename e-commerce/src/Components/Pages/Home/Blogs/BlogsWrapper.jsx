import "./Blog.css";
import Blogİtem from "./Blogİtem";

const BlogsWrapper = () => {
  return (
    <div className="blog-wrapper container mx-auto">
      <h2 className="title">Bloglar</h2>
      <div className="blog-items">
        <Blogİtem />
      </div>
    </div>
  );
};

export default BlogsWrapper;
