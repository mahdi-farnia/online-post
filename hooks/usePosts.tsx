import useSWR from 'swr';
import type { Post as IPost } from '@prisma/client';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface PostHook {
  isLoaded: boolean;
  error?: any;
  posts?: IPost[] | undefined;
}

export default function usePosts(): PostHook {
  const { data, error } = useSWR<IPost[]>('/api/posts', fetcher, {
    shouldRetryOnError: true,
    errorRetryCount: 3,
    errorRetryInterval: 3_000
  });

  if (error) return { isLoaded: !1, error, posts: [] };

  if (!data) return { isLoaded: !1 };

  return { posts: data, isLoaded: !0 };
}
