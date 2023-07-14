import { blogPosts } from "../data/blogPosts";
import Button from "./Button/Button";

const BlogList: React.FC = (handleClick) => {
  return (
    <div className="mt-8 grid grid-cols-3 gap-10 mx-10">
      {blogPosts.map((post, index) => (
        <div
          className="bg-white rounded-lg shadow-md p-4 mb-4 card"
          key={index}
        >
          <h2 className="text-2xl font-semibold text-gray-600">{post.title}</h2>
          <p className="text-gray-600">By {post.author}</p>
          <p className="text-gray-600">{post.date}</p>
          <p className="my-4 text-gray-600">{post.content}</p>
          {/* <Button to={`/posts/${post.id}`}></Button> */}
          <Button
            href={`/posts/${post.id}`}
            onClick={handleClick}
            className="bg-transparent text-white font-semibold py-2 px-4 ml-5 border border-white rounded hover:bg-white hover:text-gray-800"
          >
            Click me!
          </Button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

{
  /* <a
            href={`/posts/${post.id}`}
            className="rounded-full bg-gray-600 text-white px-5 py-2 mt-20 hover:bg-gray-800 text-white decoration-0"
          >
            Learn More
          </a> */
}
