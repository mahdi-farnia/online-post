import { Post as IPost } from '@prisma/client';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Post from '../../components/Post';
import prisma from '../../lib/prisma';

// TODO where is nav?
const IPost: NextPage<{ post: IPost }> = ({ post }) => {
  return (
    <>
      <Head>
        <title>Poster | {post.title}</title>
        {post.avatar && <link rel="icon" sizes="128x128" href={post.avatar} type="image/*" />}
      </Head>
      <Post post={post} fullPage />
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
  })) as IPost;

  return {
    props: {
      post: {
        ...post,
        time: post.time.toString()
      }
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

export default IPost;
