import { blogPosts } from '../data/blogPosts';

const BlogList: React.FC = () => {
  return (
    <div className="mt-8">
      {blogPosts.map((post, index) => (
        <div className="bg-white rounded-lg shadow-md p-4 mb-4 card" key={index}>
          <h2 className="text-2xl font-semibold text-gray-600">{post.title}</h2>
          <p className="text-gray-600">By {post.author}</p>
          <p className="text-gray-600">{post.date}</p>
              <p className="my-4 text-gray-600">{post.content}</p>
          <a
            href={`/post/${post.id}`}
            class="rounded-full bg-gray-600 text-white px-5 py-2 mt-20">
            Learn More
          </a>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
