import { blogPosts } from "../data/blogPosts";

const SinglePost: React.FC = (postId: number) => {
  const post = blogPosts.find((post) => post.id === postId);
  console.log(post);
  return (
    <div>
      <h2>Single Post</h2>
      <h1>{post?.title}</h1>
    </div>
  );
};

export default SinglePost;

// const post = blogPosts.find((post) => post.id === postId);

//   if (!post) {
//     return <div>Post not found</div>;
//   }
