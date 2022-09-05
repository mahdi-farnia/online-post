import { createContext, useContext, useState } from 'react';
import { type Post as IPost } from '@prisma/client';

interface PostContextProps {
  post: IPost | IEmptyPost;
  setPostData(post: PostContextProps['post']): void;
}

type IEmptyPost = Record<keyof IPost, undefined>;

const EmptyPost: IEmptyPost = {
  avatar: void 0,
  id: void 0,
  username: void 0,
  image: void 0,
  time: void 0,
  title: void 0
};

const Ctx = createContext<PostContextProps>({
  post: EmptyPost,
  setPostData() {}
});

interface PostProviderProps {
  post?: IPost;
  children: React.ReactNode;
}

export default function PostProvider({ post, children }: PostProviderProps) {
  const [data, setData] = useState<IPost | IEmptyPost>(post || EmptyPost);

  return <Ctx.Provider value={{ post: data, setPostData: setData }}>{children}</Ctx.Provider>;
}

export function usePostData() {
  return useContext(Ctx);
}

export function usePostIsLoading(): boolean {
  const { post } = useContext(Ctx);
  return post === EmptyPost;
}
