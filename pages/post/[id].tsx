import { Post as IPost } from '@prisma/client';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import PostCard from '../../components/index/Post';
import PostProvider from '../../components/index/Post/PostContext';
import prisma from '../../lib/prisma';

// TODO where is nav?
// TODO create not found post page
const Post: NextPage<{ post: IPost }> = ({ post }) => {
  return post == null ? (
    <p>Post Not Found</p>
  ) : (
    <>
      <Head>
        <title>Poster | {post.title}</title>
        {post.avatar && <link rel="icon" sizes="128x128" href={post.avatar} type="image/*" />}
      </Head>
      <PostProvider posts={[post]} isLoaded>
        <PostCard postId={0} fullPage />
      </PostProvider>
    </>
  );
};

interface Params {
  params: {
    id: string;
  };
}

// @ts-ignore
export const getStaticProps: GetStaticProps = async ({ params: { id } }: Params) => {
  const post = (await prisma.post.findUnique({
    where: {
      id: parseInt(id)
    }
  })) as IPost | null;

  return {
    props: {
      post: post == null ? null : { ...post, time: post.time.toString() }
    },
    revalidate: 15 // 15s
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await prisma.post.findMany({ select: { id: true } });

  const paths = slugs.map(({ id }) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: 'blocking' // render not-provided posts on-demand
  };
};

export default Post;
