import { Metadata } from "next";
import Link from "next/link";

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  return response.json();
}

export const metadata: Metadata = {
  title: "blog",
  description: "blog page",
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Blog = async () => {
  const posts = await getPosts();
  console.log(posts);
  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;
