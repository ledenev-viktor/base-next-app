import { Metadata } from "next";

type PostProps = {
  params: {
    id: string;
  };
};

async function getPost(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
}

export async function generateMetadata({
  params: { id },
}: PostProps): Promise<Metadata> {
  const post = await getPost(id);
  return {
    title: post.title,
  };
}

const Post = async ({ params: { id } }: PostProps) => {
  const post = await getPost(id);
  return (
    <>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </>
  );
};

export default Post;
