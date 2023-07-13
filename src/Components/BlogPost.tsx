import { blogPosts } from '../data/blogPosts';

interface BlogPostProps {
  postId: number;
}

const BlogPost: React.FC<BlogPostProps> = ({ postId }) => {
  const post = blogPosts.find((post) => post.id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-2xl font-semibold">{post.title}</h2>
      <p className="text-gray-600">By {post.author}</p>
      <p className="text-gray-600">{post.date}</p>
      <p className="mt-4 text-gray-600">{post.content}</p>
    </div>
  );
};

export default BlogPost;
