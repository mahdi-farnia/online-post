import { createContext, useContext } from 'react';
import { type Post as IPost } from '@prisma/client';

interface PostContextProps {
  posts: IPost[];
  isLoaded: boolean;
}

const Ctx = createContext<PostContextProps>({
  posts: [],
  isLoaded: false
});

interface PostProviderProps extends PostContextProps {
  children: React.ReactNode;
}

/**
 * Prevent Passing Props Multiple Times.
 * Just used for passing data between children
 */
export default function PostProvider({ posts, isLoaded, children }: PostProviderProps) {
  return <Ctx.Provider value={{ posts, isLoaded }}>{children}</Ctx.Provider>;
}

export function usePostData(postId: number): IPost {
  const { posts } = useContext(Ctx);

  return posts[postId];
}

export function usePostIsLoaded(): boolean {
  return useContext(Ctx).isLoaded;
}
